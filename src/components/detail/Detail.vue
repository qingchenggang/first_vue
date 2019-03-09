<template>
  <div>
    <header>
      <span class="head"><img src="./../../assets/images/左箭头.png" alt="" @click="goback"></span>
      <span class="head"></span>
      <div class="title">
        {{data.title}}
        <br>
        <!--<span v-if="data.time!==''">{{data.often}},{{data.time}}</span>-->
      </div>
    </header>
    <div class="alerttime">
      <img src="../../assets/detail/list_icon_time@2x.png" alt="">
      <span v-if="data.time===''">未设置日期</span>
      <span v-else>2017-1-1(周一) 提前1星期</span>
    </div>
    <div class="alert">
      <span>周</span>
      <div>
        <span>按周提醒</span>
        <br>
        <span>每周，周一 11:30</span>
      </div>
      <span>已结束</span>
    </div>
    <div class="remark">
      <div>备注</div>
      <div>{{data.remark}}</div>
    </div>
    <foot class="foot"></foot>
  </div>
</template>
<script>
  import Foot from './Foot'
    export default {
        data () {
            return {
              data: {},
              date: ''
            }
        },
        components: {
            Foot
        },
        methods: {
          goback() {
            this.$router.goBack()
          },
        },
        mounted () {
          window.setDetail().then(() => {
            var data = JSON.parse(window.localStorage.getItem('detail'));
            this.data = data;
            localStorage.name = this.data.title;
            localStorage.name = localStorage.name.slice(0, -2);
            console.log(localStorage.name);

//         var date = new Date();
//         this.date = date.getYear()+'-'+(date.getMonth()+1)
          })
        }
    }
</script>
<style scoped>
  div {
    text-align: left;
  }
  header {
    height: 275px;
    background: url('../../assets/detail/timg.jpg') no-repeat;
    background-size: 100% 100%;
    position: relative;
    width: 100%;
    /*background-color: green;*/
  }
  .head {
    position: absolute;
    top: 15px;
    cursor: pointer;
  }
  .head:nth-of-type(1) {
    left: 15px;
     font-size: 20px;
   }
  .head:nth-of-type(2) {
    right: 15px;
    width: 20px;
    height: 21px;
    display: inline-block;
    background: url('../../assets/detail/nav_icon_share@2x.png') no-repeat;
  }
  .foot {
    position: fixed;
    bottom: 0;
    background-color: white;
    z-index: 100;
  }
  .title {
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    font-size: 18px;
    font-family: 'PingFang-SC-Bold';
    text-align: left;
  }
  .title span {
    display: inline-block;
    padding-top: 5px;
  }
  .alerttime {
    margin-top: 30px;
    padding: 0 15px;
    width: calc(100% - 60px);
    text-align: left;
  }
  .alerttime img {
    vertical-align: bottom;
    width: 15.5px;
    height: 18.5px;
  }
  .alerttime span {
    font-family: 'PingFang-SC-Light';
    font-size: 14px;
    color: #212121;
    padding-left: 10px;
  }
  .alert {
    padding: 0 15px;
    width: calc(100% - 60px);
    text-align: left;
    margin-top: 30px;
    position: relative;
  }
  .alert>span:nth-of-type(1) {
    display: inline-block;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: green;
    text-align: center;
    line-height: 45px;
    color: white;
    font-size: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .alert>div {
    display: inline-block;
    padding: 5px 0 0 60px;
  }
  .alert>div span:nth-of-type(1) {
     font-family: 'PingFang-SC-Regular';
     font-size: 16px;
     color: #212121;
   }
  .alert>div span:nth-of-type(2) {
    font-family: 'PingFang-SC-Light';
    font-size: 14px;
    color: #afb7c2;
    display: inline-block;
    padding-top: 5px;
  }
  .alert>span:last-child {
    font-family: 'PingFang-SC-Regular';
    font-size: 17px;
    color: #e83535;
    position: absolute;
    right: 0;
    /*top: 10px;*/
    top: 0;
    bottom: 0;
    margin: auto 0;
    line-height: 51.5px;
  }
  .remark {
    padding: 0 15px;
  }
  .remark div:nth-of-type(1) {
    font-family: 'PingFang-SC-Light';
    font-size: 13px;
    color: #afb7c2;
    margin: 30px 0 15px 0;
  }
  .remark div:nth-of-type(2) {
    font-family: 'PingFang-SC-Regular';
    font-size: 17.5px;
    color: #212121;
    letter-spacing: 0.5px;
  }
</style>
