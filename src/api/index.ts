import { http } from '@/utils'
// 在第二个参数中添加showMessage: true即可展示提示信息；showProgress:true展示头部进度条
// 默认不传为不显示

export const getList = (params: object) => {
  return http.get<ApiResponseType<any>>({
    url: 'http://localhost:80/list',
    params,
    config: {
      message: '获取列表成功',
      showMessage: true,
      showProgress: true
    }
  })
}
