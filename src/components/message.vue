<template>
    <div class="message" @touchstart="Touchstart" @touchend="Touchend">
      <nav-title text="短信"></nav-title>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :id="item.id" v-for="item in character" @click="blessBtn" :class="item.liClass ? 'lired' : '' ">
            {{item.charatr}}
          </div>
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
      <loading loadingmsg="正在加载中。。。" v-show="isShow"></loading>
      <!--<div id="navtieleul" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">-->
        <!--<ul class="mui-scroll">-->
          <!--&lt;!&ndash;这里放置真实显示的DOM内容&ndash;&gt;-->
          <!--&lt;!&ndash;<ul>&ndash;&gt;-->
          <!--<li  class="mui-control-item" v-for="item in character" :id="item.id" @click="blessBtn" :class="item.liClass ? 'lired' : '' ">-->
          <!--{{item.charatr}}-->
          <!--</li>-->
          <!--&lt;!&ndash;</ul>&ndash;&gt;-->
        <!--</ul>-->
      <!--</div>-->
      <transition name="fade" >
        <div v-if="show" class="mesCont">
          <router-link :to="{ path: '/greetingCard', query:{ cardImg:content,selectText: selectText,name:name }}" class="linktext">
            <div class="mesverMsage" :id="n.id"  @click="messContext" v-for="n in blessing">
              {{n.text}}
            </div>
          </router-link>
        </div>
      </transition>
    </div>
</template>

<script>
  import greTitle from './greTitle'
  import loading from './loading'
    export default {
      name:'message',
      data:function(){
        return{
          character:[{id:'1',charatr:'全部',liClass:false},{id:'2',charatr:'妈妈',liClass:false},{id:'3',charatr:'爸爸',liClass:false},
            {id:'4',charatr:'老婆/女友',liClass:false},{id:'5',charatr:'老公/男友',liClass:false},{id:'6',charatr:'长辈'},
            {id:'7',charatr:'外语/方言',liClass:false},{id:'8',charatr:'传统/习俗',liClass:false}
          ],
          blessing:{},
          dowmwz:0,
          messUl:null,
          selectText:null,
          content:'',
          show: true,
          kk:true,
          isShow: false,
          touy:'',
          name:''
        }
      },
      created:function(){
        this.content=this.$route.query.content;
        this.name=this.$route.query.name;
      },
      mounted:function(){
          this.character[0].liClass=true;
          this.$http.get('static/josn/welltext.json').then(function (resp) {
            this.blessing= resp.data.a;
          });
      },
      methods: {
        blessBtn: function (e) {
          var cnTxetarr=['a','b','c','d','e','f','g','h'],a=0;
          for(var i=0;i<this.character.length;i++){
            if(e.target.id==this.character[i].id){
              this.character[i].liClass=true;
              a=i;
              this.$http.get('static/josn/welltext.json').then(function (resp) {
                this.blessing= resp.data[cnTxetarr[a]];
              });

//              if(this.show==false){
                this.show=true;
//              }
//              else{
//                  this.show=false
//              }

            }else {
              this.character[i].liClass=false;
            }
          }
        },
        messContext:function(e){
            console.log(e.target.id);
          for(var i=0;i<this.blessing.length;i++){
            if(e.target.id==this.blessing[i].id) {
              this.selectText=this.blessing[i].text;
            }
          }
        },
        Touchstart:function(e){
          var that=this;
          that.touy=e.changedTouches[0].clientY;
        },
        Touchend:function(e){
          var tie=3;
          var that=this;
          var y=e.changedTouches[0].clientY;
          if(that.touy-y<=0){
            that.isShow=true;
          var tshow=setInterval(function(){
            console.log("999999");
              tie--;
              if(tie<0){
                clearInterval(tshow);
                that.isShow=false;
              }
            },1000)
          }
        }
      },
      components: {
        'nav-title': greTitle,
        loading: loading
      }
    }
</script>

<style scoped>
  .message{
    overflow-x:hidden;
  }
  .swiper-container{
    margin-top: 3%;
  }
  .swiper-wrapper{
    height:2.5rem;
  }
  .swiper-slide{
    width: 20% !important;
    height:1.153rem;
    line-height: 1rem;
    text-align: center;
    font-size: 14px;
    color: #2a2a2a;
    margin-left: 15px;
  }
  .swiper-slide:nth-child(1){
    margin-left: -5px;
  }
/*
  #navtieleul{
    /*margin-top: 15%;
  }
  ul{
    width: 150%;
    height: 34px;
    line-height: 34px;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    overflow-x:auto;
  }
  ul li{
    list-style: none;
    font-size: 14px;
    color: #2a2a2a;
    float: left;;
    pointer-events: none;
  }
  ul li+li{
    margin-left: 16px;
  }
  ul li:nth-child(1){
    padding-left: 15px;
  }
*/
  .lired{
    color: #e83535;
  }
  .mesCont{
    width: 90%;
    margin:0 auto;
  }
  .linktext{
    text-decoration: none;
  }
  .mesverMsage{
    width: 100%;
    padding: 1.15rem 1px;
    text-align: left;
    color: #2a2a2a;
    font-size: 0.875rem;
    border-bottom: 1px solid #d2d2d2;
  }
  .fade-enter-active {
    animation: bounce-in ease-in 1s;
  }
  /*.fade-leave-active {*/
    /*animation: bounce-out ease-out 0.5s;*/
  /*}*/
  @keyframes bounce-in {
    0% {
      opacity: 0;
      transition: ease-in 0.2s;
    }
    25% {
      opacity: 0.25;
      transition: ease-in 0.2s;
    }
    50% {
      opacity: 0.5;
      transition: ease-in 0.2s;
    }
    75% {
      opacity: 0.75;
      transition: ease-in 0.2s;
    }
    100% {
      opacity: 1;
      transition: ease-in 0.2s;
    }
  }
  @keyframes bounce-out {
    0% {
      opacity: 1;
      transition: ease-in 0.2s;
    }
    25% {
      opacity: 0.75;
      transition: ease-in 0.2s;
    }
    50% {
      opacity: 0.5;
      transition: ease-in 0.2s;
    }
    75% {
      opacity: 0.25;
      transition: ease-in 0.2s;
    }
    100% {
      opacity: 0;
      transition: ease-in 0.2s;
    }
  }

</style>
