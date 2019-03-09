<template>
  <div style="width: 100%">
  <div class="bgimg">
    <nav-title text="选择背景"></nav-title>
    <transition name="myFade" mode="out-in">
      <router-link :to="{ path: '/greetingCard', query:{ cardImg: cardImg,title:title,name:name}}">
        <div @click="bgCheck" :id="bgImg.id" :key="bgImg.id" class="bgimgs" v-for="bgImg in Bgimg">
          <img :src="bgImg.imgsrc" class="img1" alt=""/>
          <div :class="bgImg.selectBimg ? 'selectBg':'selectBg1'">
            <img src="../../static/cardimg/list_icon_gou.png" alt=""/>
          </div>
        </div>
      </router-link>
    </transition>
  </div>
  </div>
</template>

<script>
  import greTitle from './greTitle'
  export default {
    name: 'bgimg',
    data: function() {
      return {
        Bgimg: {},
        cardImg:'',
        title:'',
        name:''
      }
    },
    mounted: function () {
      this.$http.get('static/josn/bgimg.json').then(function (resp) {
        this.Bgimg= resp.data
      })
      console.log(this.$route.query.title);
      this.title=this.$route.query.title;
      this.name=this.$route.query.name;
    },
    methods:{
      bgCheck:function(e){
        var a=e.target.currentSrc.split("/")[e.target.currentSrc.split("/").length-1];
        for(var i=0;i<this.Bgimg.length;i++){
          var b=this.Bgimg[i].imgsrc.split("/")[this.Bgimg[i].imgsrc.split("/").length-1];
          if(a==b){
            this.cardImg=this.Bgimg[i].imgsrc;
            this.Bgimg[i].selectBimg=false;
          }else{
            this.Bgimg[i].selectBimg=true;
          }
        }
      }
    },
    components: {
      'nav-title': greTitle
    }
  }

</script>

<style scoped>

  .bgimg{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    /*border: 1px solid red;*/
  }
  .bgimgs{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
    width: 43.2%;
    height:8.125rem;
    float: left;
    /*margin-top: 15px;*/
    margin-top: 0.9375rem;
    margin-left: 0.9375rem;
    overflow: hidden;
    position: relative;
  }
  .bgimgs .img1{
    width: 100%;
  }
  .selectBg{
    width:1.125rem ;
    height:1.125rem;
    position: absolute;
    right: 8%;
    bottom: 5%;
    display: none;

  }
  .selectBg img{
    width: 100%;
    height:100%;
  }
  .selectBg1{
    width:1.125rem ;
    height:1.125rem;
    position: absolute;
    right: 8%;
    bottom: 5%;
    display: block;

  }
  .selectBg1 img{
    width: 100%;
    height:100%;
  }
  .myFade-enter{
    transition-delay: 2s;
  }
  .myFade-enter-active{
    transition-delay: 2s;
  }

</style>
