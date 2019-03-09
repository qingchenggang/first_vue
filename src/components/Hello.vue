<template>
  <div class="hello">
    <div class="aaaa">
      <router-link to="/home">
      <img src="./../assets/images/左箭头.png" alt="" >
      </router-link>
      <span>常用提醒</span>
    </div>
    <div class="swiper-container">
    <div class="swiper-wrapper">
    <div class="swiper-slide">
    <router-link to="/jingxuan">精选</router-link>
    </div>
    <div class="swiper-slide">
    <router-link to='/holiday'>节假日提醒</router-link>
    </div>
    <div class="swiper-slide">
    <router-link to='/day2'>生日提醒</router-link>
    </div>
    <div class="swiper-slide">
    <router-link to='aa'>生活提醒</router-link>
    </div>
    </div>
    <div class="swiper-scrollbar"></div>
  </div>
    <transition mode="out-in" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <router-view></router-view>
    </transition>

    </div>
</template>

<script>
  export default {
    name: 'hello',
    data: function () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      goback() {
         this.$router.goBack()
      }
    },
    mounted: function () {
      var mySwiper = new Swiper('.swiper-container', {
        width: 30, //你的slide宽度
        scrollbar: '.swiper-scrollbar'
      })
      this.$router.push('/jingxuan')
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #000 !important;
  }
  @import '../assets/animate.css';
  .myclass{
    color:red
  }
  .swiper-container {
    width: 100%;
    height: 40px;
    /*border:1px solid red;*/
    border-bottom: 1px solid gainsboro;
    border-top: 1px solid gainsboro;
    text-align: center;
    position: fixed;
    top:50px;
    left: 0;
    background-color: white;
    overflow: visible;
    z-index: 3;
  }

  .swiper-slide {
    width: 30% !important;
    height: 100%;
    background-color: white;
  }
  a:-webkit-any-link {
    text-decoration: none;
    color: black;
    font-size: 14px;
    line-height: 40px;
    width: 60px;
  }

  .aaaa {
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 60px;
    font-weight: bold;
    color:#000;
    z-index: 6;
  }
  .aaaa img {
    position: absolute;
    left: 15px;
    top: 23px;
  }
  .myclass{
    color: red;
  }
  .myFade-enter, .myFade-leave-to{
    opacity:0;
  }
  .myFade-enter-active{
    transition: all 3s linear;
  }
  .myFade-leave-active{
    transition: all .5s linear;
  }
</style>
