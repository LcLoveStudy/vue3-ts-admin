import { http } from '@/utils'

//在第二个参数中添加showMessage: true即可展示提示信息
//默认不传为不显示

export const getList = () => {
  return http.get(
    'http://localhost:80/list',
    {
      size: 10
    },
    {
      showMessage: true
    }
  )
}
