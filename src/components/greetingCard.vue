<template>
  <div style="width: 100%">
  <div class="greeCard">
    <nav-title text="贺卡"></nav-title>
    <div class="greeCardTop">
      <img :src="content.cardImg" alt=""/>
      <div class="logoimg">
        <img src="../../static/cardimg/logo.png" alt=""/>
      </div>
      <div class="greeCardCont">
        <h3>{{content.title}}</h3>
        <p>
          <span>{{content.name}}</span>
          <span>{{content.date}}</span>
        </p>
        <div class="textInput">
           <textarea cols=60 rows=8 v-model="content.contentText">{{content.contentText}}</textarea>
          <router-link class="linkImg" :to="{ path: '/message', query:{ content: content.cardImg,name:content.name}}">
            <img src="../../static/cardimg/icon_choice.png" alt=""/>
          </router-link>
        </div>
      </div>
    </div>
    <!--<router-link :to="{ path: '/generateCard', query:{ cardImg: content.cardImg,name:content.name,date:content.date,contentText:content.contentText, }}">-->
    <router-link :to="{ path: '/generateCard', query:{ content: content }}">
      <button @click="greeBtn">生成卡片并发送</button>
    </router-link>
  </div>
  </div>
</template>

<script>
  import greTitle from './greTitle'
  export default {
    name:'greeCard',
    data:function(){
      return {
        content: {
          cardImg:'',
          title:'生日祝福',
          name:'杨小川',
          date:'2017年3月7日',
          contentText:'生日快乐'
        },
      }
    },
    created:function(){
//      console.log(this.$route.query.title);
//      console.log(this.$route.query.cardImg);
      this.content.cardImg=this.$route.query.cardImg;
      this.content.contentText=this.$route.query.selectText;
      this.content.title=this.$route.query.title;
      this.content.name=this.$route.query.name;
    },
    methods:{
      greeBtn:function(){
        this.content.contentText=this.content.contentText;
      }
    },
    components: {
      'nav-title': greTitle
    }

  }
</script>

<style scoped>
  .greeCard{
    width: 90%;
    margin: 0 auto;
    /*border: 1px solid green;*/
    overflow: hidden;
  }
  .greeCardTop{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32.375rem;
    position: relative;
  }
  .greeCardTop img{
    width: 100%;
    height: 100%;
  }
  .logoimg{
    position: absolute;
    top: .375rem;
    left: 1.6%;
  }
  .greeCardCont{
    width: 76%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    text-align: left;
    position: absolute;
    bottom:0.935rem ;
    left: 9.1%;
    color: #212121;
  }
  .greeCardCont h3{
    width: 100%;
    font-size: 1.0625em;
    margin-bottom: 12px;
  }
  .greeCardCont p{
    font-size: 0.9375em;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 12px;

  }
  .textInput{
    width: 100%;
    height: 6.625rem;
    background:none;
    position: relative;
  }
  .textInput textarea{
    width: 100%;
    height: 100%;
    background:none;
    border: 1px solid #afb7c2;
    padding: 10px 0 0 10px;
    font-size: 0.9375em;
    color: #afb7c2;
    outline: none;
  }
  .linkImg{
    width: 6%;
    height:0.9375em;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 99;
  }
  .textInput img{
    width: 100%;
    height:100%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 99;
  }

  button{
    width: 42.2%;
    height: 2.5rem;
    text-align: center;
    border: 1px solid #e83535;
    color: #e93a3a;
    border-radius: 20px;
    background-color: #fff;
    margin-top: 15px;
    outline: none;
  }


</style>
