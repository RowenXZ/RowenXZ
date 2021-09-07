/**
 * 分割省略 aa...bb
 * @param {*} endTime 秒
 * @returns {*} text
 */
export function formateTime(endTime: any) {
  let secondTime = parseInt(endTime)//将传入的秒的值转化为Number
  let min = 0// 初始化分
  let h = 0// 初始化小时
  let result = ''
  if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
    min = parseInt(String(secondTime / 60))//获取分钟，除以60取整数，得到整数分钟
    secondTime = parseInt(String(secondTime % 60))//获取秒数，秒数取佘，得到整数秒数
    if (min > 60) {//如果分钟大于60，将分钟转换成小时
      h = parseInt(String(min / 60))//获取小时，获取分钟除以60，得到整数小时
      min = parseInt(String(min % 60)) //获取小时后取佘的分，获取分钟除以60取佘的分
    }
  }
  result = `${h.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${secondTime.toString().padStart(2, '0')}`
  return result
}

/**
 * 分割省略 aa...bb
 * @param {*} text 字符串
 * @param {*} start 开始保留几位
 * @param {*} end 结束保留几位
 * @returns {*} text
 */
export function subSplit(text: string | undefined, start: number, end: number) {
  if (text && text !== " ") {
    return text.substr(0, start) + '....' + text.substr(text.length - end, text.length);
  }
  return null
}