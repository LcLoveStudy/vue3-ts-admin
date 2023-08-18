/**
 * 时间格式化
 * @param {*} date 初始时间(Fri Apr 07 2023 13:50:24 GMT+0800 (中国标准时间))
 * @returns 转换为YYYY年MM月DD h:m:s格式的时间字符串
 * @example dateFormat(new Date())
 * @author 李畅
 * @email dotb116393@163.com
 */
export const dateFormat = (date: Date) => {
  const newDate = new Date(date)
  const result = 'YYYY年MM月DD h:m:s'
    .replace('YYYY', newDate.getFullYear().toString())
    .replace(
      'MM',
      (newDate.getMonth() + 1).toString().length === 1
        ? 0 + (newDate.getMonth() + 1).toString()
        : (newDate.getMonth() + 1).toString()
    )
    .replace(
      'DD',
      newDate.getDate().toString().length === 1
        ? 0 + newDate.getDate().toString()
        : newDate.getDate().toString()
    )
    .replace(
      'h',
      newDate.getHours().toString().length === 1
        ? 0 + newDate.getHours().toString()
        : newDate.getHours().toString()
    )
    .replace(
      'm',
      newDate.getMinutes().toString().length === 1
        ? 0 + newDate.getMinutes().toString()
        : newDate.getMinutes().toString()
    )
    .replace(
      's',
      newDate.getSeconds().toString().length === 1
        ? 0 + newDate.getSeconds().toString()
        : newDate.getSeconds().toString()
    )
  return result
}

/**
 * 将秒数转换时分秒
 * @param timeStamp 秒数
 * @returns 时分秒的格式
 */
export const hourFormat = (timeStamp: number) => {
  let hours = parseInt((timeStamp / 60 / 60).toString()).toString()
  let minute = parseInt(((timeStamp - Number(hours) * 60 * 60) / 60).toString()).toString()
  let second = (timeStamp - Number(hours) * 60 * 60 - Number(minute) * 60).toString()
  hours = Number(hours) < 10 ? '0' + hours : hours
  minute = Number(minute) < 10 ? '0' + minute : minute
  second = Number(second) < 10 ? '0' + second : second
  return hours + ':' + minute + ':' + second
}
