export interface ApiResponseType<T> {
  data: T
  info: {
    name: string
    status: string
    size: number
  }
}
