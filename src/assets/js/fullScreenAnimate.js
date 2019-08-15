/**
   * 1 定义三组数据，大中小三个球
   * 2 定义不超过屏幕的随机数，初始化小球的位置,使用绝对定位
   * 3 每隔一秒，屏幕随机出现十个随机小球
   * 4 减小小球的top改变小球的位置使其向上移动，当top=0时，
   * 5 小球的速度与球的大小有关，越大越慢
   */
var domList = [
  {
    style: 'width: 3px;height: 3px;border-radius: 3px;z-index: 99999;display:block;background-color:rgba(255,255,255,.7);position: fixed',
    speed: 1.5
  },
  {
    style: 'width: 2px;height: 2px;z-index: 99999;display:block;background-color:rgba(255,255,255,.7);position: fixed',
    speed: 3
  },
  {
    style: 'width: 1px;height: 1px;z-index: 99999;display:block;background-color:rgba(255,255,255,.7);position: fixed',
    speed: 5
  }
]
var fullScreenAnimate = {
  /**
   * 制作小球
   */
  makeDom () {
    let index = Math.ceil(Math.random() * 3) // 生成 1~2随机数,取出两个小球中的一个
    let x = Math.ceil(Math.random() * 100) // 小球x轴位置
    let y = this.randomNum(20, 100) // 小球y轴位置
    // let style = `${domList[index - 1].style};left:${x}vw;top:${y}vh;transition:top ${y / domList[index - 1].speed}s`
    let style = `${domList[index - 1].style};left:${x}vw;top:${y}vh;animation: fullScreenAnimate ${y / domList[index - 1].speed}s linear infinite`
    return style
  },
  init () {
    let arr = []
    for (let i = 0; i < 160; i++) {
      arr.push(
        {
          style: this.makeDom()
        }
      )
    }
    return arr
  },
  // 生成从minNum到maxNum的随机数
  randomNum (minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10)
        break
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
        break
      default:
        return 0
        break
    }
  }
}
export default fullScreenAnimate
