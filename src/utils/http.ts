import axios, { AxiosError, type AxiosResponse, type AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
import { getItem,startLoading,endLoading } from '@/utils'
//创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: '',
})

// 添加请求拦截器
service.interceptors.request.use(
  (config: any) => {
    config.showMessage?config.headers.showMessage = true: config.headers.showMessage = false //处理showMessage
    config.showProgress?startLoading():true     //处理进度条
    getItem('userid')?config.headers.userid = getItem('userid'): true  //携带token
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
    endLoading()  //结束进度条
    if (Boolean(response.config.headers.showMessage)) {  //处理弹框
      ElMessage({
        message: response.data?.info?.name,
        type: response.status == 200 ? 'success' : 'error'
      })
    }
    return data
  },
  (error: AxiosError) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    endLoading()
    return Promise.reject(error)
  }
)

const http = {
  get<T>(url: string, params?: object, config?: any): Promise<T> {
    return service.get(url, { params, ...config})
  },
  post<T>(url: string, data?: object, config?: any): Promise<T> {
    return service.post(url, { data }, config)
  }
}

export default http
