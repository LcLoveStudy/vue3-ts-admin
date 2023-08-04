/**
 * 时间格式化
 * @param {*} date 初始时间(Fri Apr 07 2023 13:50:24 GMT+0800 (中国标准时间))
 * @param {*} format 目标格式（大小写严格区分） 年份YYYY,月份MM，日期DD，时h，分m，秒s
 * @returns 转换为目标格式的时间字符串
 * @example dateFormat(new Date(), 'YYYY年MM月DD h:m:s')
 * @author 李畅
 * @email dotb116393@163.com
 */
export const dateFormat = (date: Date, format: String) => {
  const newDate = new Date(date)
  const result = format
    .replace('YYYY', newDate.getFullYear().toString())
    .replace(
      'MM',
      (newDate.getMonth() + 1).toString().length == 1
        ? 0 + (newDate.getMonth() + 1).toString()
        : (newDate.getMonth() + 1).toString()
    )
    .replace(
      'DD',
      newDate.getDate().toString().length == 1
        ? 0 + newDate.getDate().toString()
        : newDate.getDate().toString()
    )
    .replace(
      'h',
      newDate.getHours().toString().length == 1
        ? 0 + newDate.getHours().toString()
        : newDate.getHours().toString()
    )
    .replace(
      'm',
      newDate.getMinutes().toString().length == 1
        ? 0 + newDate.getMinutes().toString()
        : newDate.getMinutes().toString()
    )
    .replace(
      's',
      newDate.getSeconds().toString().length == 1
        ? 0 + newDate.getSeconds().toString()
        : newDate.getSeconds().toString()
    )
  return result
}
