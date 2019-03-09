<template>
  <div class="bbb">
    <ul class="tup">
      <li v-for='obj in xiangqing'>
        <div>
          <router-link :to="{path:'/detail',query:{img:obj.img,text:obj.text,img4:obj.img4,img5:obj.img5,text1:obj.text1,img6:obj.img6,img7:obj.img7,img8:obj.img8,img9:obj.img9,img10:obj.img10}}">
          <img :src='obj.img' :class="{myclass:isTrue}"/>
          </router-link>
        </div>
        <div class="zi">
          <h3>{{obj.text}}</h3>
          <router-link to="/fenxiang">
            <img :src='obj.img2' class="fen"/>
          </router-link>

          <img :src='obj.img3'v-if="willShow" @click="fn" class="jia"/>
          <img :src='obj.img7'v-else @click="fn" class="dui"/>
        </div>
      </li>
    </ul>
    <!--<router-view></router-view>-->
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        xiangqing: {},
        isTrue: true,
        willShow: true
      }
    },
    mounted: function () {
      this.$http.get('static/xiangqing.json', {}, {
        emulateJSON: true,
        header: {}
      }).then(function (resp) {
//        console.log(resp.data)
        this.xiangqing = resp.data
      })
    },
    methods: {
      fn: function () {
        if(this.willShow==true){
          this.willShow=false;
        }else{
          this.willShow=true
        }
      }
    }
  }
</script>
<style scoped>
  a {
    display: inline-block;
  }
  .bbb {
    width: 90%;
    margin: 0 auto;
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .myclass {
    width: 337.5px;
    height: 247.5px;
    /*margin-left: -75px;*/
    position: relative;

  }
.zi{
  width: 100%;
 display: inline-block;
}
  .tup {
    width: 100%;
    margin-top: 110px;

    /*position: fixed;*/
    /*position: relative;*/
  }

  .tup li {
    padding-left: 0;
    list-style: none;
  }

  .tup h3 {
    /*text-align: left;*/
    display: inline-block;
/*    margin-top: 10px;*/
  }

  .fen {
    width: 25px;
    height: 25px;
    display: inline-block;
    margin-left: 56px;
  /*  margin-left: 240px;
    margin-top: -20px;*/
    /*
      position: absolute;
      top: 259px;
      left: 250px;
    */

  }

  .jia {
    width: 25px;
    height: 25px;
    display: inline-block;
    margin-left: 10px;
 /*   margin-top: -50px;
    margin-left: 260px;*/
    /*    position: absolute;
        top: 259px;
        left: 290px;*/
  }
  .dui{
    width: 25px;
    height: 25px;
    display: inline-block;
    margin-left: 10px;
  }
</style>
