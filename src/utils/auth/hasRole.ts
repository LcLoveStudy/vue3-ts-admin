/**
 * 用户是否有权限
 * @param userRole 当前用户的role
 * @param roleList 权限列表
 * @returns 是否有权限
 */
const hasRole = (userRole: string, roleList: Array<string>): boolean => {
  return roleList.includes(userRole);
};

export default hasRole;
