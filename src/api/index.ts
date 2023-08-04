import { http } from '@/utils';
import { type commonApi } from '#/api-return';
//在第二个参数中添加showMessage: true即可展示提示信息；showProgress:true展示头部进度条
//默认不传为不显示

export const getList = (params: object) => {
  return http.get<commonApi>('http://localhost:80/list', params, {
    showMessage: true,
    showProgress: true
  });
};
