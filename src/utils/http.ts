import axios, { AxiosError, type AxiosResponse, type AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
import { getItem, startLoading, endLoading } from '@/utils'
import { type HttpType } from '#/http'
// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: ''
})

// 添加请求拦截器
service.interceptors.request.use(
  (config: any) => {
    if (config.message) {
      config.headers.message = encodeURIComponent(config.message)
    }
    config.showMessage ? (config.headers.showMessage = true) : (config.headers.showMessage = false)
    if (config.showProgress) {
      startLoading()
    }
    if (getItem('userid')) {
      config.headers.userid = getItem('userid')
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
    endLoading() // 结束进度条
    if (response.config.headers.showMessage) {
      const messageInfo = decodeURIComponent(response.config.headers.message)
      // 处理弹框
      ElMessage({
        message: messageInfo !== 'undefined' ? messageInfo : response.data?.info?.name,
        type: response.status === 200 ? 'success' : 'error'
      })
    }
    return data
  },
  (error: AxiosError) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    switch (error.response?.status) {
      case 404:
        error.message = '请求地址不存在'
        break
      case 500:
        error.message = '服务器内部错误'
        break
      default:
        break
    }
    endLoading()
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

const http = {
  get<T>(arg: HttpType): Promise<T> {
    return service.get(arg.url, { params: arg.params, ...arg.config })
  },
  post<T>(arg: HttpType): Promise<T> {
    return service.post(arg.url, { data: arg.data }, ...arg.config)
  }
}

export default http
