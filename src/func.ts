// 将时间格式化为字符串
const getTimeStr = (date: Date, type: String): String | undefined => {
  try{
    let year = date.getFullYear();
    let month = date.getMonth() + 1 || '';
    let day = date.getDate() || '';
    let hours = date.getHours() || '';
    let minutes = date.getMinutes() || '';
    let seconds = date.getSeconds() || '';
    if ((month as string).length === 1) {
        month = "0" + month;
    }
    if ((day as string).length === 1) {
        day = "0" + day;
    }
    if ((hours as string).length === 1) {
        hours = "0" + hours;
    }
    if ((minutes as string).length === 1) {
        minutes = "0" + minutes;
    }
    if ((seconds as string).length === 1) {
        seconds = '0' + seconds;
    }
    if(type === 'all')
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    else if(type === 'year')
      return `${year}`;
    else if(type === 'month')
      return `${year}-${month}`;
    else if(type === 'day')
      return `${year}-${month}-${day}`;
  } catch(e) {
    return '';
  }
}

export { getTimeStr }
