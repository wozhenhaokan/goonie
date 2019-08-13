<template>
  <div class="section" :style="{'height':offsetheight+'px'}">
    <div class="container" :style="{'transform': 'translate3d(0px,-'+ fullPage*offsetheight +'px, 0px)'}">
      <div v-for="(i,index) in bannerList" :key="index" :style="{'height':offsetheight+'px','background-image':`url('${i.src}')`}">
        <div v-show="index === 0">
          <ul>
            <li><img src="./../../public/logo.png" alt=""></li>
            <li style="font-size: 0.9vw">
            <span
                    v-for="(item, childindex) in nav"
                    :key="childindex"
                    :class="{ac:childindex == activeIndex}"
            >{{ item.name }}</span>
            </li>
            <li style="font-size: 0.8vw">咨询热线：400-650-7825 </li>
          </ul>
          <p>人工智能技术应用服务商<br>智慧网信解决方案提供商</p>
          <p>提供数据采集、数据标引、数据治理、深度学习、<br>自然语言、知识图谱、可视化分析、人工智能为一体的方案</p>
        </div>
        <div v-show="index === 1">
          <img src="../../public/page2_logo.png" alt="">
          <p>专注网络舆情12年，出版舆情著作4部</p>
          <p>提供一套全流程化舆情服务体系，全面覆盖舆情监测-舆情分析-舆情预警-舆情处置-<br>
            舆情引导-新闻发布-传播评估-形象修复，管理舆情完整生命周期，实现舆情管理工作的系统化</p>
          <img :src="i.content" alt="">
        </div>
        <div v-show="index === 2">
          <img src="../../public/page3_logo.png" alt="">
          <p>
            智慧网信是基于大数据、云计算、人工智能技术建设的，<br>
            实现业务流程标准化、处理过程智能化、数据分析可视化的新型网信工作管理体系。
          </p>
          <img :src="i.content" alt="">
        </div>
        <div v-show="index === 3">
          <img src="../../public/page4_logo.png" alt="">
          <p>
            防范企业风险  提升企业竞争力
          </p>
          <img :src="i.content" alt="">
        </div>
        <div v-show="index === 4">
          <p>客户案例</p>
          <img :src="i.content" alt="">
        </div>
        <div v-show="index === 5">
          <p style="color: #fff;font-size: 1.5vw;padding: 5.8vh 0">联系我们 <span style="font-size: 2vh;color: #ffc600">（咨询有礼）</span></p>
          <div>
              <p class="first_p">
                地       址：北京市海淀区清河嘉园甲1号楼A座14层（看地图怎么走）<br>
                电       话：（010）80812116 82834912 转分机804（最终客户）810（产品代理）<br>
                销售手机：133-1155-2128<br>
                在线咨询：QQ：93742871（产品代理）<br>
                售前邮箱：sales@goonie.cn&nbsp; &nbsp;&nbsp;&nbsp;售后邮箱：goonie800@126.com<br>
              </p>
              <img src="./../../public/page6_content1.png" alt="" style="width: 12.5vh;height: 12.5vh">
          </div>
          <div>
            <img src="./../../public/page6_content2.png" alt="" style="width: 55.9vh;height: 57vh">
            <p class="second_p">《领导干部网络舆情工作指南》、《领导干部大数据应用<br>指南》书已被中国国家图书馆、中央党校图书馆、清华大<br>学图书馆、北京大学图书馆、复旦大学图书馆、同济大学<br>图书馆、浙江大学图书馆、厦门大学图书馆等近20所高校<br>图书馆收藏。</p>
          </div>
          <p style="font-size: 0.8vw;width: 1100px;margin: 0 auto;text-align: center;color: #fff">谷尼国际软件（北京）有限公司 版权所有 Copyright Gooniesoft Co.,Ltd All Rights Reserved<br>
            北京海淀公安分局备案号：1101085030 京ICP备09060067号</p>
        </div>
      </div>
    </div>
    <div class="fixed-list">
      <div v-for="(i,index) in bannerList" :key="index" :class="fullPage==index?'color':''" @click="pageInfo(index)">
      </div>
    </div>
  </div>
</template>
<script>
import page1 from './../../public/page1.png'
import page2 from './../../public/page2.png'
import page3 from './../../public/page3.png'
import page4 from './../../public/page4.png'
import page5 from './../../public/page5.png'
import page6 from './../../public/page6.png'
import page1Content from './../../public/page1_content.png'
import page2Content from './../../public/page2_content.png'
import page3Content from './../../public/page3_content.png'
import page4Content from './../../public/page4_content.png'
import page5Content from './../../public/page5_content.png'
import page6Content from './../../public/page6_content1.png'
export default {
  data () {
    return {
      activeIndex: 0,
      bannerList: [ // 盒子背景颜色
        {
          src: page1,
          content: page1Content
        },
        {
          src: page2,
          content: page2Content
        },
        {
          src: page3,
          content: page3Content
        },
        {
          src: page4,
          content: page4Content
        },
        {
          src: page5,
          content: page5Content
        },
        {
          src: page6,
          content: page6Content
        }
      ],
      nav: [
        {
          name: '主页',
          href: ''
        },
        {
          name: '谷尼舆情',
          href: ''
        },
        {
          name: '智慧网信',
          href: ''
        },
        {
          name: '情报数据',
          href: ''
        },
        {
          name: '业绩案例',
          href: ''
        },
        {
          name: '联系我们',
          href: ''
        }
      ],
      offsetheight: document.documentElement.clientHeight, // 获取当前页面的高度
      fullPage: 0, // 当前在第几页
      fullPageNum: false // 是否在滑动
    }
  },
  watch: {
    'offsetheight' () {
      this.offsetheight = document.documentElement.clientHeight
    }
  },
  mounted () {
    //
    // 在元素加载完毕的时候添加鼠标滑动事件
    //
    if (document.addEventListener) {
      document.addEventListener('DOMMouseScroll', this.scroll, false)
    }
    window.onmousewheel = document.onmousewheel = this.scroll

    var _this = this
    window.onresize = function () { // 定义窗口大小变更通知事件
      _this.offsetheight = document.documentElement.clientHeight
    }
  },
  methods: {
    //
    // 点击左侧小点时跳转到相应的page
    //
    pageInfo (index) {
      this.fullPage = index
    },
    //
    // 鼠标事件
    //
    scroll (e) {
      e = e || window.event
      //
      // 是否正在滑动
      //
      if (this.fullPageNum) {
        return false
      }
      //
      //   e.wheelDelta为负数时向下滑动
      //
      if (e.wheelDelta < 0) {
        if (this.fullPage >= (this.bannerList.length - 1)) {
          return false
        }
        this.fullPageNum = true
        this.pageInfo(this.fullPage + 1)
        //
        //  css设置动画事件为500，所以等到500ms后滚动状态为false
        //
        setTimeout(() => {
          this.fullPageNum = false
        }, 500)
        //
        //   否则就是向上划
        //
      } else {
        if (this.fullPage <= 0) {
          return false
        }
        this.fullPageNum = true
        this.pageInfo(this.fullPage - 1)
        setTimeout(() => {
          this.fullPageNum = false
        }, 500)
      }
    }
  }
}
</script>
<style lang="scss">
  $w-base: 1920;
  $h-base: 960;
  @function vh($value) {
    @return ($value / $h-base) * 100vw
  }
  @function vw($value) {
    @return ($value / $w-base) * 100vw
  }
  .section{
    overflow: hidden;
  }
  .container{
    width: 100%;height: 100%;
    position: relative; transform: translate3d(0px, 0px, 0px); transition: all 500ms ease;
    &>div{
      background-size: cover;
      background-position: center;
      &>div{
        position: relative;
        width: 1100px;
        margin: 0 auto;
        &:nth-child(1){
          ul{
            padding-top: 2vh;
            width: 1100px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            color: #fff;
            li{
              span{
                margin-right: 30px;
                display: inline-block;
                padding-bottom: 4px;
                cursor: pointer;

                &.ac{
                  border-bottom: 1px solid #fff;
                }
              }
            }
          }
          p:nth-child(2){
            color: #fff;
            font-size: vw(18);
            line-height: 5.6vh;
            margin-bottom: 2vh;
            margin-top: 28vh;
          }
          p:last-child{
            color: #fff;
            font-size: 0.9vw;
            line-height: 3vh;
          }
        }
        &:nth-child(2){
          img:first-child{
            height: 4.6vh;
            margin: 0 auto;
            margin-top: 13.5vh;
          }
          p:nth-child(2){
            font-size: vw(18);
            line-height: 3vh;
            color: #fff;
            margin: 1.7vh 0;
          }
          p:nth-child(3){
            font-size: vw(16);
            line-height: 2.7vh;
            color: #fff;
          }
          img:last-child{
            height: 26vh;
            width: 66.6vh;
            object-fit: contain;
            margin: 0 auto;
            margin-top: 8.3vh;
          }
        }
        &:nth-child(3){
          img:first-child{
            height: 4.6vh;
            margin: 0 auto;
            margin-top: 13.5vh;
          }
          p:nth-child(2){
            font-size: 0.9vw;
            line-height: 2.7vh;
            color: #fff;
            margin-top: 1vh;
          }
          img:last-child{
            height: 23vh;
            width: 73vh;
            object-fit: contain;
            margin: 0 auto;
            margin-top: 8.3vh;
          }
        }
        &:nth-child(4){
          img:first-child{
            height: 4.6vh;
            margin: 0 auto;
            margin-top: 13.5vh;
          }
          p:nth-child(2){
            font-size: 0.9vw;
            line-height: 2.7vh;
            color: #fff;
            margin-top: 1vh;
          }
          img:last-child{
            height: 42vh;
            width: 67vh;
            object-fit: contain;
            margin: 0 auto;
            margin-top: 8.3vh;
          }
        }
        &:nth-child(5){
          padding-left: 1.7vh;
          box-sizing: border-box;
          text-align: left;
          p{
            font-size: 1.7vw;
            padding: 4.7vh 0 3.1vh;
            color: #fff;
          }
          img{
            height: 59.5vh;
            width: 104.1vh;
            object-fit: contain;
          }
        }
        &:nth-child(6){
          padding-left: 1.7vh;
          box-sizing: border-box;
          text-align: left;
          &>div{
            display: flex;
            width: 95vh;
            justify-content: space-between;
          }
          .first_p{
            font-size: 0.8vw;
            line-height: 3.8vh;
            color: #fff;
          }
          .second_p{
            font-size: 0.8vw;
            line-height: 3.1vh;
            color: #fff;
            padding-top: 10vh;
          }
          img{
            object-fit: contain;
          }
        }

      }
    }
  }
  .fixed-list{
    position: fixed;
    top: 35%;
    left: 90vw;
    div{
      width: 1.6vh;
      height: 1.6vh;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-bottom: 2vh;
    }
    div.color{
      background:#9fabdf;
    }
  }
</style>
