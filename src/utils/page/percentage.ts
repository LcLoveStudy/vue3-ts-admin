/**
 * 模拟进度条数据
 * startTime 时间0-100
 * begin() 开始计时
 * stop() 停止进度
 * end() 结束进度，到达100
 * @example
 * <template>
 *    //使用Math.ceil()函数取整，负责会出现小数点
 *    <el-progress :percentage="Math.ceil(a.startTime)" />
 * </template>
 * data(){
 *  return{
 *    a:new Percentage()
 *  }
 * },
 * mounted(){
 *    //begin()方法
 *    a.begin()
 *    setTimeout(()=>{
 *      //请求结束调用end方法
 *       a.end()
 *      //如果请求错误则调用
 *       a.stop()
 *    },2000)
 * }
 */
export class Percentage {
  startTime: number;
  Pertimer: any;
  constructor() {
    this.startTime = 0;
  }
  begin() {
    if (this.Pertimer) {
      clearInterval(this.Pertimer);
    }
    this.startTime = 0;
    this.Pertimer = setInterval(() => {
      if (this.startTime < 50) {
        this.startTime += 0.5;
      } else if (this.startTime >= 50 && this.startTime < 80) {
        this.startTime += 0.1;
      } else if (this.startTime >= 80 && this.startTime < 90) {
        this.startTime += 0.01;
      } else {
        clearInterval(this.Pertimer);
      }
    }, 100);
  }
  stop() {
    if (this.Pertimer) {
      clearInterval(this.Pertimer);
    }
  }
  end() {
    if (this.Pertimer) {
      clearInterval(this.Pertimer);
    }
    this.startTime = 100;
  }
}
