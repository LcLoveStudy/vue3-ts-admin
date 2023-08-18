interface HttpType {
  url: string
  config?: any
}

export interface HttpGetType extends HttpType {
  params?: object
}

export interface HttpPostType extends HttpType {
  data?: object
}
