import axios, { AxiosError, type AxiosResponse, type AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils'
const service: AxiosInstance = axios.create({
  baseURL: ''
})

// / 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    //处理showMessage
    if (config.method == 'get') {
      config.headers.showMessage = config.params.showMessage ? true : false
      delete config.params?.showMessage
    } else if (config.method == 'post') {
      config.headers.showMessage = config.data.data.showMessage ? true : false
      delete config.data.data?.showMessage
    }
    //携带token
    if (getToken()) {
      config.headers.token = getToken()
    }
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    ElMessage.error(error.message)
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    //处理弹框
    if (Boolean(response.config.headers.showMessage)) {
      ElMessage({
        message: response.data?.info?.name,
        type: response.data?.code == 200 ? 'success' : 'error'
      })
    }
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return data
  },
  (error: AxiosError) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    ElMessage({
      message: error.message,
      type: 'error'
    })
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

const http = {
  get<T>(url: string, params?: object, config?: any): Promise<T> {
    return service.get(url, { params, ...config })
  },
  post<T>(url: string, data?: object, config?: any): Promise<T> {
    return service.post(url, { data, ...config })
  }
}

export default http
