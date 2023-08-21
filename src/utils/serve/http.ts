import axios, { AxiosError, type AxiosResponse, type AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
import { getItem, startLoading, endLoading } from '@/utils'
import { LocalStorageKeys } from '#/localstorage'
import * as HttpType from '@/utils/serve/types'
// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: ''
})

// 添加请求拦截器
service.interceptors.request.use(
  (config: any) => {
    const showMessage = config.showMessage
    const message = config.message
    const token = getItem(LocalStorageKeys.USERINFO)
    // 是否展示弹框提示，自定义提示信息
    if (showMessage) {
      config.headers.showMessage = true
      if (message) {
        config.headers.message = encodeURIComponent(message)
      }
    }
    // 是否展示头部进度条
    if (config.showProgress) {
      startLoading()
    }
    // 设置token
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    ElMessage.warning('请稍后再试')
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    const { showMessage, message } = response.config.headers
    endLoading()
    // 判断是否展示接口信息
    if (showMessage) {
      const messageInfo = decodeURIComponent(message)
      ElMessage({
        message: messageInfo !== 'undefined' ? messageInfo : data?.info?.name,
        type: response.status === 200 ? 'success' : 'error'
      })
    }
    return data
  },
  (error: AxiosError) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对状态码处理
    switch (error.response?.status) {
      case 404:
        error.message = '请求地址不存在'
        break
      case 500:
        error.message = '服务器内部错误'
        break
      default:
        error.message = '网络异常'
        break
    }
    endLoading()
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export const http = {
  // get请求
  get<T>(arg: HttpType.HttpGetRequestType): Promise<T> {
    return service.get(arg.url, { params: arg.params, ...arg.config })
  },
  // post请求
  post<T>(arg: HttpType.HttpPostRequestType): Promise<T> {
    return service.post(arg.url, { data: arg.data }, ...arg.config)
  }
}
