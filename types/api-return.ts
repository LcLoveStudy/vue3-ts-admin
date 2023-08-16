export interface ApiType<T> {
  data: T
  info: {
    name: string
    status: string
    size: number
  }
}
