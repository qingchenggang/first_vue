<template>
  <div class="ringBell">
    <nav-title text="批量设置"></nav-title>
    <!--<img src="../../static/cardimg/bg_yindao_birthday@3x.png" alt=""/>-->
    <ul>
      <li v-for="item in ringsData">
        <div class="nameleft">
          <img :src="item.imgsrc" alt=""/>
          <span>{{item.ringname}}</span>
          <span>00:0{{item.stime}}</span>
        </div>

        <div class="colerright">
          <img :id="item.id" :src="item.palycol ? '../../static/cardimg/list_icon_play.png':'../../static/cardimg/list_icon_suspend.png'" alt="" @click="ringPlay"/>
          <router-link :to="{ path: '/remindRing', query:{ remindVlaue: remindVlaue,liid:liid }}">
            <img class="colerimg2" src="../../static/cardimg/zhengque1.png" alt="" @click="ylink(item)"/>
          </router-link>
        </div>
        <audio class="audio" :src="item.src"/>
        </audio>
      </li>

    </ul>
  </div>
</template>

<script>
  import greTitle from './greTitle'
  export default {
    name: 'ringBell',
    data(){
      return{
        ringsData:{},
        remindVlaue:{},
        liid:''
      }
    },
    components: {
      'nav-title': greTitle

    },
    mounted:function(){
      this.$http.get('static/josn/ring.json').then(function (resp) {
        this.ringsData= resp.data
      });
      this.liid=this.$route.query.liid;
      console.log("--------------");
      console.log(this.liid);

    },
    methods: {
      ringPlay: function (e){
        var audio = document.querySelector('.audio');
        var that=this;
        for(var i=0;i<that.ringsData.length;i++) {
          if (e.target.id === that.ringsData[i].id) {
            that.ringsData[i].palycol=false;
            if(that.ringsData[i].palycol==false){
              if (!that.isPlaying){
                audio.play();
                that.isPlaying = true;
                that.ringsData[i].palycol=true;
              }
            }else {
              if (that.isPlaying) {
                audio.pause();
                audio.currentTime = 0;
                that.ringsData[i].palycol=false;
              }
            }
          }else {
            that.ringsData[i].palycol=true;
          }
        }
      },
      ylink:function(vlaue){
//        console.log(vlaue);
        this.remindVlaue=vlaue;
      }
    }
  }

</script>

<style scoped>
  .ringBell{
    width: 100%;
    height: 667px;
    /*background: url("../../static/cardimg/jinyu.jpg");*/
    /*background-repeat :no-repeat;*/
    /*background-attachment: fixed;*/
    /*background-position :center;*/
    /*background-size: 100%;*/
    /*filter:opacity(0.3) ;*/
    background-color: rgba(255,255,255,0.3);
  }
  ul{
    width: 90%;
    margin: 0 auto;
  }
  li{
    list-style: none;
    width: 100%;
    height:60px;
    /*line-height: 40px;*/
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    margin: 10px 0;
    color: #2a2a2a;
  }
  audio{
    border: 1px solid yellow;
  }
  .nameleft img{
    vertical-align: middle;
    width: 36px;
    height: 36px;
    border-radius: 20px;
    margin:0 8px;
  }
  .nameleft span{
    margin: 0 4px;
    font-size: 14px;
  }
  .colerright img{
    vertical-align: middle;
  }
  .colerimg2{
    vertical-align: middle;
    width: 16px;
    height: 16px;
    margin:0 20px;
  }


</style>


