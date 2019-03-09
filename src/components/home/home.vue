<script src="../../../../赵兴云/src/router/index.js"></script>
<template>
  <div>

      <div class="home" >
       <header>
          <ul>
            <li @click="toggleLeftSidenav">

              <img :src="menuActive" alt="">

            </li>
            <li class="homeTitle">{{homeTitle}}</li>
            <li>
              <el-popover
                ref="popover4"
                placement="bottom"
                width="80"
                trigger="click">
                <table class="rightTopIcon">
                  <tr>
                    <td><img src="../../../static/image/home_img/home_icon_reminder.png" alt=""></td>
                     <td> <router-link id="skipcolor" to="/holiday">常用提醒</router-link></td>
                  </tr>
                </table>
              </el-popover>
              <div v-popover:popover4 style="width: 21px;height: 21px;float: right">
                <img :src="menuFind" alt="" >
              </div>

            </li>
          </ul>
        <router-link to="search">
          <div class="search">
            <div class="img">
              <img src="../../../static/image/home_img/home_icon_seach.png" alt="">
            </div>
            <span>搜索</span>
          </div>
        </router-link>
        <div  class="news"  v-show="isshow">
          <span>您有{{num}}个已结束提醒，是否删除？</span>
          <a href="#">删除</a>
        </div>
      </header>
       <div class="section">

          <div class="todayMsg">
            <ul>
              <li>
                <img src="../../../static/image/home_img/home_icon_yuan.png">
              </li>
              <li class="calendar">
                <p>{{week}}</p>
                <div>
                  <p>今天 <span>{{myDateTime}}</span></p>
                  <p>{{mylunarYear}}({{mycYear}})年{{mylunarMonth}}月{{mylunarDay}}</p>
                </div>
              </li>
              <li class="festival">{{festival}}</li>
            </ul>
          </div>

          <!--引入大组件part的位置-->
         <part></part>
         <div :is="item.component"  v-for="item in items">

         </div>

          <!--引入大组件part的位置-->
          <div :class="classname" >
            <img src="../../../static/image/home_img/home_icon_1.png" alt="">
            <p>点击下方“+”添加提醒</p>
            <p>开启有计划的生活</p>
          </div>
        </div>
       <footer>
          <div class="footBox">
            <!--<router-link to="">是</router-link>-->
         <router-link to="/rili">
            <img src="../../../static/image/home_img/tab_icon_calendar.png" alt="">
         </router-link>
            <input type="text" v-model="inputTitle"  class="inputTitle" placeholder="请输入提醒标题">
            <img @click="add('part')" src="../../../static/image/home_img/tab_icon_send.png" alt="">
          </div>
        </footer>
      </div>
       <md-sidenav class="md-left" ref="leftSidenav" id="sidenav">
        <personal></personal>
      </md-sidenav>

    <router-link to="/createWarn">
      <img id="addWarn" src="../../../static/image/home_img/加号.png" alt="">
    </router-link>

  </div>

</template>
<script>
  import Part from "./part";
  import personal from "./personal";
//  import popOver from "../popOver/popOver";
  import calendar from '../../../static/js/calendar-converter.js'
export default {

  components: {Part,personal},
  name: 'home',
  data () {
    return {
       homeTitle: '全部提醒',
       menuActive:'../static/image/home_img/nav_menu1.png',
       menuFind:'../static/image/home_img/nav_find.png',
      inputTitle: '',
//      提醒删除的数据
       num:'1',
       isshow:false,
      classname:'bgStart',
      showOrhide:true,
//      今天信息的数据
      week:'',
      myDateTime:'',
      mylunarYear:'',
      mycYear:'',
      mylunarMonth:'',
      mylunarDay:'',
//      lunar_calendar:'鸡(丁酉)年正月十八',
      festival:'',
      myPartNum:'',
      newTitle:'',  //请输入标题存储的地方
      items: [],
    }
  },
  methods:{

    toggleLeftSidenav(){
//      console.log('我点击了菜单')
      this.$refs.leftSidenav.toggle();
    },
//    getThisValue(){
//        this.newTitle=this.inputTitle;
////        console.log(this.newTitle);
//       localStorage.title=this.newTitle;
////      console.log(localStorage.title)
//    },
    add(part){
//        console.log('我点击了发送按钮')
        this.inputTitle='';
      this.items.push({
        'component': part,
      })
    },
    render(h){
        return h;
    }

  },
  mounted(){

      /*获取当前时间，年月日，周几*/
      var now=new Date();
      var year=now.getFullYear();
      var month=now.getMonth()+1;
      var day=now.getDate();
      var week=now.getDay();
      switch(week){
        case 1:week='周一';break;
        case 2:week='周二';break;
        case 3:week='周三';break;
        case 4:week='周四';break;
        case 5:week='周五';break;
        case 6:week='周六';break;
        case 0:week='周天';break;
      }
      var myDateTime=year +'/'+ month +'/'+ day;
      this.myDateTime=myDateTime;
      this.week=week;
      var mycalendar=new CalendarConverter;
      var nowCalendar=mycalendar.solar2lunar(new Date(year,month,day));
      console.log(nowCalendar);
      this.mylunarYear=nowCalendar.lunarYear;
      this.mycYear=nowCalendar.cYear;
      this.mylunarMonth=nowCalendar.lunarMonth;
      this.mylunarDay=nowCalendar.lunarMonth;
      this.festival=nowCalendar.solarFestival;
  },
  updated(){
      /*判断页面上是否增加了提醒节点，添加节点后，本来在页面上的提示操作将会消失*/
    var num=document.getElementsByClassName('partBox');
    this.myPartNum=num.length;
    console.log('我是主页新增的提醒哦')
    console.log(this.myPartNum)
    if(this.myPartNum>=1){
      this.classname='bgStartHide';
    }else{
      this.classname='bgStart';
    }
  }

}
</script>


<style scoped>
  #skipcolor {
    color: #000 !important;
  }
  .routerLink {
    position: absolute;
    left: 10px;
    top: 5px;
  }
  #addWarn {
    position: fixed;
    bottom: 60px;
    left: 50%;
    margin-left: -16px;
  }
/*<!--popover样式-->*/
/*右上角点击样式*/
.rightTopIcon{
  border-spacing: 10px;
  font-size: 16px;
  color:#212121;
}



  /*
    头部标题、菜单样式
    */

  a:-webkit-any-link {
    color: -webkit-link;
    cursor: auto;
    text-decoration: none;
  }
  .home{
    width:90%;
    margin: 20px auto;
    /*border: 1px solid red;*/
  }
  .home{
    font-family: PingFang-SC-Regular;
  }
  header{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 2;
  }
  header>div{
    width: 90%;
    margin: 0 auto;
  }

    .home header ul{
      width: 90%;
      height: 25px;
      /*line-height: 25px;*/
      margin: 0 auto;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .home header ul li{
      list-style: none;
      /*border: 1px solid black;*/
    }
  .home header ul li:nth-child(1){
    text-align: left;
      width: 30%;
    }.home header ul li:nth-child(2){
      text-align: center;
      line-height:24px ;
      width: 40%;
    }.home header ul li:nth-child(3){
    text-align: right;
      width: 30%;
    }
  ul:not(.md-list)>li+li {
     margin-top:0;
  }
    .home header .homeTitle{
      font-size: 15px;
      color: #212121;
    }
    .home header ul li:nth-child(1) img{
      width: 23px;
      height: 17px;
    }
    .home header ul li:nth-child(3) img{
      width: 21px;
      height: 21px;
    }
    /*
    搜索框样式
    */
    .search{
      width: 90%;
      margin: 0 auto;
      display: flex;
      background-color: #f6f7fb;
      position: relative;
      height: 31px;
      border-radius: 31px;
      margin-top: 20px;
      line-height: 31px;
      align-content: center;
      justify-content: center;
    }
    .search .img{
      /*padding-bottom: 3px;*/

    }
  .search span{
    font-size: 14px;
    color: #afb7c2;
    padding-left: 4px;
  }
  /*
    过期提醒消息样式
    */
  .news{
    margin-top: 15px;
  }
  .news span{
     color:#afb7c2;
     font-size: 14px;
   }
  .news a{
    color:#e83535;
    font-size: 14px;
  }
  /*内容部分样式*/
  .section{
    height: 482px;
    margin-top: 152px;
  }
  /*
    今日的消息样式（周一今天2017年2月14日情人节）
    */
  .todayMsg ul{
    margin-top: 20px;
    height: 48.5px;
  }
  .todayMsg ul li{
    float: left;
    height: 48.5px;
    list-style:none;
  }
  .todayMsg ul li:nth-child(1){
    line-height: 48.5px;
    /*border: 1px solid black;*/
  }
  .todayMsg ul li:nth-child(2){
    padding-left: 15px;
    /*border: 1px solid yellow;*/
  }.todayMsg ul li:nth-child(3){
    /*border: 1px solid firebrick;*/
    float: right;
  }

  .todayMsg .calendar{
    display: flex;
    font-size: 15px;
    color: #212121;

  }

  .calendar > p:nth-child(1){
    /*outline: 1px solid gold;*/
    height: 48.5px;
    line-height: 48.5px;
  }
  .calendar div{

    text-align: left;
    margin-left: 15px;
    /*outline: 1px solid gold;*/
  }

  .calendar div p:nth-child(1) span{
    /*padding-left: 4%;*/
  }
  /*鸡(丁酉)年正月十八*/
  .calendar div p:nth-child(2){
    font-size: 14px;
    color:#afb7c2;
    margin-top: 10px;
  }
  /* 情人节*/
  .festival{
    font-size: 16px;
    color: #e83535;
  }
  /*开启新生活的div*/
  .bgStart{
    margin: 104.75px auto;
    /*border: 1px solid red;*/
  }
  .bgStartHide{
    margin: 104.75px auto;
    display: none;
  }
  .bgStart p{
    font-size: 16px;
    color: #afb7c2;
  }
  .bgStart p:nth-child(1){
    margin-top: 20px;
  }
  .bgStart p:nth-child(2){
    margin-top: 9px;
  }

  /*底部*/
  footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    border-top:1px solid #f2f2f2;
    height: 52px;

  }
  .footBox{
    text-align: left;
    margin: 0 auto;
    margin-top: -23px;
    width: 90%;
    position: relative;
  }
  .footBox img{
    vertical-align: middle;
  }
  .inputTitle{
    text-indent: 20px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 38px;
    width:250px;
    height: 38px;
    outline: none;
    -webkit-appearance: none;
    border-style: none;
    border: 1px solid  #f2f2f2 ;
    font-size: 15px;
  }

  ::-webkit-input-placeholder{
    color: #b3bbc6;

  }
</style>
