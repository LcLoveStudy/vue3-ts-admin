import type { AxiosRequestConfig } from 'axios'

/** 所有请求都应该遵守的约定 */
interface HttpRequestType {
  url: string
  config?: AxiosRequestConfig & {
    showMessage?: boolean
    message?: string
    showProgress?: boolean
    // 上传文件使用以下两个
    // headers: {
    //   'Content-Type': 'multipart/form-data'
    // }
    // transformRequest: [
    //     (data: any) => {
    //       const fordata = new FormData()
    //       fordata.append('file', data.file)
    //       fordata.append('path', data.path)
    //       return fordata
    //     }
    //   ]
  }
}

/** get请求的参数限制 */
export interface HttpGetRequestType extends HttpRequestType {
  params?: object
}

/** post请求的参数限制 */
export interface HttpPostRequestType extends HttpRequestType {
  data?: object
}
