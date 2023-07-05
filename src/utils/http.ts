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
    //处理showMessage
    if (config.showMessage) {
      config.headers.showMessage = true
    } else {
      config.headers.showMessage = false
    }
    //处理进度条
    if(config.showProgress){
      startLoading()
    }
    //携带token
    if (getItem('userid')) {
      config.headers.token = getItem('userid')
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
    endLoading()
    const { data } = response
    //处理弹框
    if (Boolean(response.config.headers.showMessage)) {
      ElMessage({
        message: response.data?.info?.name,
        type: response.status == 200 ? 'success' : 'error'
      })
    }
    return data
  },
  (error: AxiosError) => {
    endLoading()
    // 超出 2xx 范围的状态码都会触发该函数。
    ElMessage({
      message: error.message,
      type: 'warning'
    })
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
