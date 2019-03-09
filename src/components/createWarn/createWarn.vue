<template>
  <div class="warper">
    <div class="header">
      <img class="back" @click="goback" src="../../assets/images/左箭头.png" alt="">
      <div class="downType" @click="show">{{type}}
        <img src="../../assets/images/down.png" alt="" v-bind:class="{change:isChange}">
      </div>
      <div class="ok" @click="publish">发布</div>
    </div>
    <!--类型选择-->
    <div v-show="isShow" class="choose">
      <p>常用类别</p>
      <div v-for="key in typeList">
        <img :src="key.src" alt="">
        <span>{{key.name}}</span>
      </div>
      <p>其他类别</p>
      <div v-for="key in typeOthersList">
        <img :src="key.src" alt="">
        <span>{{key.name}}</span>
      </div>
    </div>
    <!--标题-->
    <ul>
      <li>
        <router-link class="title" to="createTitle">
          <span class="titledefault" v-show="titleShow">标题 <span>(10字内)</span></span>
          <span>{{titleContent}}</span>
          <img src="./../../assets/images/createWarn/left.png" alt="">
        </router-link>
      </li>
    </ul>
    <!--日期选择-->
    <div class="clickChoose">
      <!--<mt-button @click="handleButtonClick">Click Me</mt-button>-->
      <img class="datePto" src="./../../assets/images/createWarn/date.png" alt="">

      <mt-button @click.native="openPicker">
        <span v-show="dateDefaultShow">请选择日期</span>
        <span class="dateWord">{{date}} &nbsp;{{day}}</span>
      </mt-button>
      <mt-datetime-picker
        ref="picker"
        type="date"
        v-model="pickerValue"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        @confirm="handleConfirm"
      >
      </mt-datetime-picker>
    </div>
    <!--选择提醒时间-->
    <div class="clickChoose">
      <img src="./../../assets/images/createWarn/time.png" alt="">
      <span v-show="wordShow">请选择提醒时间</span>
      <div class="time" v-for="(item,index) in timeValueArr">
        <span>{{item}}</span>
        <img class="delTime" @click="del(index)" src="./../../assets/images/createWarn/del.png" alt="">
      </div>

      <mt-button id="timeBtn" @click.native="openTime">
        <img src="./../../assets/images/createWarn/add.png" alt="">
      </mt-button>
      <mt-datetime-picker
        ref="time"
        v-model="timeValue"
        type="time"
        @confirm="getTimeValue">
        >


      </mt-datetime-picker>
    </div>

    <!--提前提醒时间-->


    <router-link to="createAheadTime">
      <div class="clickChoose">
        <img src="./../../assets/images/createWarn/ahead.png" alt="">
        <span v-show="aheadTimeShow">添加提前提醒时间</span>
        <span id="contentColor">{{aheadTimeContent}}</span>
        <div class="leftPto">
          <img src="./../../assets/images/createWarn/left.png" alt="">
        </div>
      </div>
    </router-link>
    <!--铃声-->
    <router-link to="createBall">
      <div class="clickChoose">
        <img src="./../../assets/images/createWarn/ball.png" alt="">
        <span v-show="ballShow">铃声</span>
        <span id="contentColor2">{{musicContent}}</span>
        <div class="leftPto">
          <img src="./../../assets/images/createWarn/left.png" alt="">
        </div>
      </div>
    </router-link>
    <!--备注-->
    <router-link to="createRemrk">
      <div class="clickChoose">
        <img src="./../../assets/images/createWarn/remark.png" alt="">
        <span v-show="remarkShow">备注</span>
        <span id="reamarkcolor">{{remarkcontent}}</span>
        <div class="leftPto">
          <img src="./../../assets/images/createWarn/left.png" alt="">
        </div>
      </div>
    </router-link>
    <!--照片-->
    <div class="addPhoto">
      <div class="addBtn">
        <input id="file_input" accept="image/*" type="file" multiple @click="addPto">
      </div>
    </div>

  </div>
</template>
<script>


  import type1 from '../../assets/images/createWarn/times.png'
  import type2 from '../../assets/images/createWarn/time2.png'
  import type3 from '../../assets/images/createWarn/time3.png'
  import type4 from '../../assets/images/createWarn/time4.png'
  import type5 from '../../assets/images/createWarn/time5.png'
  import type6 from '../../assets/images/createWarn/time6.png'
  import type7 from '../../assets/images/createWarn/time7.png'
  //引入mint-ui日期插件
  import Vue from 'vue'
  import {DatetimePicker} from 'mint-ui';
  Vue.component(DatetimePicker.name, DatetimePicker);

  export default {
    name: 'createWarn',
    data() {
      return {
        flag: false,
        type: '单次提醒',
        isShow: false,
        isChange: false,
        typeList: [
          {src: type1, name: '单次提醒'},
          {src: type2, name: '生日提醒'},
          {src: type3, name: '周期提醒'},
        ],
        typeOthersList: [
          {src: type4, name: '起床闹钟'},
          {src: type5, name: '节日'},
          {src: type6, name: '纪念日'},
          {src: type7, name: '喝水吃药'},
        ],
        aheadTimeContent: '',
        pickerValue: '',
        date: '',
        day: '',
        timeValue: '',
        timeValueArr: [],
        wordShow: 'true',
        dateDefaultShow: 'true',
        index: '',
        aheadTimeShow: true,
        ballShow: true,
        remarkShow: true,
        titleShow: true,
        titleContent: '',
        musicContent: '',
        remarkcontent: '',
      }
    },
    methods: {
      goback () {
        this.$router.goBack()
      },
      show() {
        if (this.isShow == true) {
          this.isShow = false
          this.isChange = false
        } else {
          this.isShow = true
          this.isChange = true
        }
      },
      openPicker() {
        this.$refs.picker.open();
      },
      openTime() {
        this.$refs.time.open();

      },
      handleConfirm(date) {
        this.dateDefaultShow = false;
        this.date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        var day = date.getDay()
        switch (day) {
          case 0 :
            this.day = '周日';
            break;
          case 1 :
            this.day = '周一';
            break;
          case 2 :
            this.day = '周二';
            break;
          case 3 :
            this.day = '周三';
            break;
          case 4 :
            this.day = '周四';
            break;
          case 5 :
            this.day = '周五';
            break;
          case 6 :
            this.day = '周六';
            break;
        }
      },
      getTimeValue(time) {
        this.timeValueArr.push(time)
        this.wordShow = false;
      },
      del(obj) {
        this.timeValueArr.splice(obj, 1)
      },
      addPto() {
        var input = document.getElementById("file_input");
        var result, div;

        if (typeof FileReader === 'undefined') {
          result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
          input.setAttribute('disabled', 'disabled');
        } else {
          if (!this.flag) {
            this.flag = true;
            input.addEventListener('change', readFile, false);

          }
        }
        function readFile() {
          console.log(this.files)
          for (var i = 0; i < this.files.length; i++) {
            if (!input['value'].match(/.jpg|.gif|.png|.bmp/i)) {
              return alert("上传的图片格式不正确，请重新选择")
            }
            var reader = new FileReader();
            reader.readAsDataURL(this.files[i]);
            reader.onload = function (e) {
              console.log(this.result.length)
              result = '<img class="nodePtos" src="' + this.result + '" alt=""/>';
              div = document.createElement('div');
              var addPhoto = document.getElementsByClassName('addPhoto')[0]
              div.innerHTML = result;
              addPhoto.insertBefore(div, addPhoto.childNodes[0])
              reader = null;
            }
          }
        }

      },
      titleContent1() {
        console.log('获取本地数据' + localStorage.title)
        this.titleShow = false
        this.titleContent = localStorage.title
        if(localStorage.title == '') {
          this.titleShow = true
        }
      },
      aheadTimeContent1() {
          console.log('获取提醒时间'+localStorage.aheadTime)
        this.aheadTimeShow = false
        this.aheadTimeContent = localStorage.aheadTime
        if(localStorage.aheadTime == '') {
          this.aheadTimeShow = true
        }

      },
      remarkContent() {
        this.remarkShow = false
        this.remarkcontent = localStorage.remark
        if(localStorage.remark == '') {
          this.remarkShow = true
        }
      },
      ballContent() {
          this.ballShow = false
        this.musicContent = localStorage.music
        if(localStorage.music == '') {
          this.ballShow = true
        }
      },
      publish() {
          window.localStorage.remark= ''
          window.localStorage.title= ''
          window.localStorage.aheadTime= ''
          window.localStorage.music= ''
//          window.history.go(-1)
          this.$router.push({path:"/home"})
      }
    },
    component: {},
    mounted () {
      window.addEventListener('setItem',function(){
          this.aheadTimeContent1()
          this.titleContent1()
        this.remarkContent()
        this.ballContent()
      }.bind(this))

      window.evt = document.createEvent('HTMLEvents');
      evt.initEvent('setItem')
    }
  }

</script>
<style scoped>

  #contentColor, #contentColor2,#reamarkcolor{
    color: black;
    /*width: 350px;*/
  }

  .nodePtos {
    width: 75px;
    height: 75px;
  }

  .addPhoto img {
    z-index: 1;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    /*border-bottom: 1px solid gray;*/
  }

  .addBtn {
    width: 75px;
    height: 75px;
    background: url("./../../assets/images/createWarn/photo.png");
    margin-left: 15px;
  }

  .addPhoto input {
    z-index: 2;
    width: 75px;
    height: 75px;
    opacity: 0;

  }

  .addPhoto {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 30px;
    position: relative;
  }

  .addPhoto img {
    margin-left: 15px;
  }

  .title {
    margin-top: 10px;
    height: 100%;
  }

  .leftPto {
    display: inline-block;
    float: right;
    margin-right: 15px;
    height: 100%;
  }

  .leftPto img {
    vertical-align: middle;
  }

  .time {
    width: 100%;
    text-align: left;
    /*padding-left: 30px;*/
    margin-bottom: 30px;
    color: black;
  }

  .time img {
    margin-left: 5px;
    position: relative;
    top: 1px;
  }

  .dateWord {
    color: #000;
  }

  .clickChoose > span {
    font-size: 15px;
    text-align: left;
    color: #afb7c2;
  }

  .time span {
    font-size: 15px;
  }

  #timeBtn {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 15px;
    bottom: 0;
  }

  .mint-button {
    width: 100%;
    height: 20px;
    text-align: left;
    font-size: 15px;
    color: #afb7c2;
    line-height: 20px;
    background: transparent;
    padding: 0;
    box-shadow: none;
  }

  .titledefault {
    color: #afb7c2;
  }

  .clickChoose {
    /*display: flex;*/
    text-align: left;
    line-height: 20px;
    justify-content: flex-start;
    align-items: center;
    margin-left: 15px;
    margin-top: 30px;
    position: relative;

  }

  .clickChoose > img {
    position: absolute;
    left: 0;
    top: 0;
  }

  .clickChoose span {
    margin-left: 15px;
    padding-left: 15px;
    width: 100%;
  }

  ul li a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /*color: #afb7c2;*/
  }

  a > img {
    margin-right: 15px;
  }

  a > span {
    font-size: 25px;
    margin-left: 15px;
  }

  span span {
    font-size: 14px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .child-view {
    position: absolute;
    width: 100%;
    transition: all .8s cubic-bezier(.55, 0, .1, 1);
  }

  .downType {
    padding: 0 75px;
    margin-left: 50px;
    font-size: 15px;
    position: relative;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    border-bottom: 1px solid gray;
  }

  .ok {
    border: 1px solid red;
    width: 70px;
    height: 30px;
    border-radius: 15px;
    font-size: 12px;
    line-height: 30px;
    color: red;
  }

  .back {
    position: relative;
    left:10px;
  }

  .downType img {
    position: absolute;
    bottom: 5px;
    left: 50%;
    margin-left: -4px;
  }

  .choose {
    /*height: 100vh;*/
    width: 375px;
    background: #fff;
    transition: all 1s linear;
    /*position: absolute;*/
  }

  .warper {
    /*overflow: hidden;*/
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }

  .choose p {
    display: block;

    height: 20px;
    text-align: left;
    margin-left: 15px;
    margin-top: 15px;
    font-size: 15px;
    color: #B8BFC8;
    -webkit-font-family: PingFang-SC-Regular !important;
  }

  .choose div {
    margin-left: 15px;
    margin-top: 15px;
    text-align: left;

    height: 50px;
    /*line-height: 100px;*/
    font-size: 16px;
    position: relative;
  }

  .choose div span {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    position: absolute;
    top: 0;
    left: 65px;
  }

  .change {
    transform: rotate(180deg);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(25px, 0);
    transform: translate(25px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-25px, 0);
    transform: translate(-25px, 0);
  }

</style>
