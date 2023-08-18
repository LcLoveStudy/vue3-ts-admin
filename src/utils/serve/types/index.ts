/** 所有请求都应该遵守的约定 */
interface HttpRequestType {
  url: string
  config?: any
}

/** get请求的参数限制 */
export interface HttpGetRequestType extends HttpRequestType {
  params?: object
}

/** post请求的参数限制 */
export interface HttpPostRequestType extends HttpRequestType {
  data?: object
}
