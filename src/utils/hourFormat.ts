/**
 * 将秒数转换时分秒
 * @param timeStamp 秒数
 * @returns 时分秒的格式
 */
export const hourFormat = (timeStamp: number) => {
  let hours = parseInt((timeStamp / 60 / 60).toString()).toString();
  let minute = parseInt(((timeStamp - Number(hours) * 60 * 60) / 60).toString()).toString();
  let second = (timeStamp - Number(hours) * 60 * 60 - Number(minute) * 60).toString();
  hours = Number(hours) < 10 ? '0' + hours : hours;
  minute = Number(minute) < 10 ? '0' + minute : minute;
  second = Number(second) < 10 ? '0' + second : second;
  return hours + ':' + minute + ':' + second;
};
