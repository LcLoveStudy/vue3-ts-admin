interface HttpRequestType {
  url: string
  config?: any
}

export interface HttpGetRequestType extends HttpRequestType {
  params?: object
}

export interface HttpPostRequestType extends HttpRequestType {
  data?: object
}
