/** 接口的响应数据都应该遵守该规则 */
export interface ApiResponseType<T> {
  data: T
  info: {
    name: string
    status: string
    size: number
  }
}
