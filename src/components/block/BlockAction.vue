<template>
  <div id="input" v-if="type==='remember'">
    <img @click="get" :src="cakeurl" height="51" width="68" alt="">
    <input type="text" placeholder="请输入您的生日">
  </div>
  <div v-else-if="type==='speak'" class="talk">
    <div class="words">
      如：妈妈生日1961年农历五月初九
    </div>
    <div class="words">
      明天上午10点开会
    </div>
    <div class="record"></div>
  </div>
  <div v-else-if="type==='cloud'" class="talk">
    <div class="words">
      开启云备份前您需要先登录
      <div class="recovery ">
        <span v-if="!login" @click="skipLogin">去登录</span>
        <span v-else>恢复云数据</span>
      </div>
    </div>
  </div>
</template>
<script>
  import cakeurl from '@/assets/block/icon_yindao_cake@2x.png'
    export default {
      template: `<div id="input"></div>`,
      props: ['type'],
      data () {
        return {
            login: false,
            cakeurl,
        }
      },
      methods: {
        skipLogin() {
            this.$router.push({path:'/login'})
        }
      }
    }
</script>
<style scoped>
  #input {
    position: absolute;
    top: 395px;
    z-index: 20;
    width: 200px;
    /*left: 90px;*/
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  #input img {
    width: 22.5px;
    height: 15px;
    margin-right: 15px;
  }
  input {
    background-color: transparent;
    outline: none;
    border: 1px solid transparent;
    border-bottom-color: #2a2a2a;
    font-size: 19px;
    font-family: 'PingFangSC-Light';
    color: #afb7c2;
    padding-bottom: 10px;
    letter-spacing: 1px;
    width: 187.5px;
  }
  .talk {
    position: absolute;
    top: 375px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding-top: 15px;
  }
  .words {
    font-family: 'PingFangSC-Ultrallght';
    font-size: 14px;
    color: #afb7c2;
    text-align: center;
    margin-bottom: 11px;
  }
  .record {
    width: 34.5px;
    height: 34.5px;
    margin: 0 auto;
    margin-top: 21px;
    background: url(../../assets/block/button_yindao_voice@2x.png)
    no-repeat 50% 50%;
    border-radius: 50%;
  }
  .recovery {
    text-align: center;
    width: 150px;
    height: 44px;
    margin: 0 auto;
    margin-top: 43px;
    background-color: #E83535;
    border-radius: 40px;
    line-height: 44px;
  }
  .recovery span {
    font-size: 17px;
    font-family: 'PingFangSC-Light';
    color: white;
  }
</style>
