<template>
  <div class="xiang">
    <img class="myleft" src="./../assets/images/左箭头.png" alt="" @click="goback">
    <div class="aaaa">{{text}}</div>
    <img :src="img" alt="" class="tu"/>
    <img :src="img4" v-model="isTrue" v-if="willShow" @click="fn" class="jia"/>
    <img :src="img6" v-else class="dui" @click="fn"/>

    <div class="wen">
      <img :src="img5" alt=""/>

      <p>未设置日期</p>
    </div>
    <div class="footer">
      <div class="beizhu">备注</div>
    </div>
    <div class="miaoshu">
      <p>{{text1}}</p>
    </div>
    <div class="weibu" v-show="isShow">
      <router-link to="/createWarn">
        <img :src="img8" class="bianji"/>
      </router-link>
      <img :src="img9" class="bofang"/>
      <img :src="img10" class="chanchu"/>
    </div>
  </div>

</template>

<script>
  export default{
    name: 'detail',
    data: function () {
      return {
        text: '',
        img: '',
        img4: '',
        img5: '',
        img6: '',
        text1: '',
        img8: '',
        img9: '',
        img10: '',
        willShow: true,
        isTrue: false,
        isShow: false,
        meg: '87453'
      }
    },
    methods: {
      goback(){
          this.$router.goBack()
      },
      fn: function () {
        if (this.willShow == true) {
          this.willShow = false;
        } else {
          this.willShow = true
        }
        this.isShow = !this.isShow;
      }
    },


    created: function () {
      console.log('进入了电影详情页面')
      this.img = this.$route.query.img
      this.text = this.$route.query.text
      this.img4 = this.$route.query.img4
      this.img5 = this.$route.query.img5
      this.text1 = this.$route.query.text1
      this.img6 = this.$route.query.img6
      this.img8 = this.$route.query.img8
      this.img9 = this.$route.query.img9
      this.img10 = this.$route.query.img10
    }


  }
</script>
<style scoped>
  .myleft {
    position: absolute;
    left: 15px;
    z-index: 999;
    top: 20px;
  }
  .xiang {
    width: 100%;
  }

  .tu {
    width: 100%;
    height: 200px;
    margin-top: 50px;
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
    color: #000;
    z-index: 6;
  }

  .jia {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 235px;
    left: 85%;
  }

  .dui {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 235px;
    left: 85%;
  }

  .wen img {
    width: 50px;
    height: 50px;
    margin-left: 162.5px;
    margin-top: 20px;
  }

  .wen p {
    text-align: center;
    color: #bfbfbf;
  }

  .beizhu {
    width: 50px;
    background-color: firebrick;
    border-radius: 20px 20px 20px 20px;
    text-align: center;
    color: white;
    margin-left: 20px;
    margin-top: 10px;
  }

  .miaoshu p {
    width: 90%;
    color: #bfbfbf;
    margin-left: 18.75px;
    margin-top: 20px;

  }

  .myclass p {
    color: red;
  }

  .weibu {
    width: 100%;
    height: 50px;
    background-color: #F5F5F5;
    position: fixed;
    top: 520px;
    line-height: 70px;
    z-index: 12;
    text-align: center;
    justify-content: space-around;
  }

  .bianji {
    width: 30px;
    height: 30px;

  }

  .bofang {
    width: 30px;
    height: 30px;
    margin-left: 30px;
  }

  .chanchu {
    width: 30px;
    height: 30px;
    margin-left: 30px;
  }
</style>
