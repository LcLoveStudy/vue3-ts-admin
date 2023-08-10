export interface commonApi<T> {
  data: T
  info: {
    name: string
    status: string
    size: number
  }
}
