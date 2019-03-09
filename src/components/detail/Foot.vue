<template>
  <div class="wrap">
    <div>
      <router-link to="/createWarn">
      <img src="../../assets/detail/tab_icon_edit@2x.png" alt="">
      <span>编辑</span>
      </router-link>
    </div>
    <div>
      <router-link to="/home">
      <img src="../../assets/detail/tab_icon_close@2x.png" alt="">
      <span>关闭</span>
      </router-link>
    </div>
    <div>
      <router-link :to="{path:'/selectBg',query:{title:title1,name:name}}">
      <img src="../../assets/detail/remark.png" alt="">
      </router-link>
      <span class="zhufu">节日祝福</span>
</div>
    <div>
      <!--<router-link :to="{path:'/selectBg',query:{title:title}}">-->
      <img src="../../assets/detail/tab_icon_later@2x.png" alt="" @click="skipBirthday">
      <!--</router-link>-->
      <span class="zhufu">生日祝福</span>
</div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '生日祝福',
                title1: '节日祝福',
                name:''
            }
        },
      created:function(){
            console.log(localStorage.name);
            this.name=localStorage.name;

    },
        methods: {
          skipBirthday() {
              this.$router.push({path:"/selectBg",query: { title: this.title,name:this.name}})
          }
        }
    }
</script>
<style scoped>
  a {
    color: #afb7c2 !important;
  }
  .wrap .zhufu {
    width: 50px;
    position: relative;
    left: 5px;
  }
  .wrap {
    display: flex;
    justify-content: space-around;
    border-top: 0.5px solid #afb7c2;
    padding-top: 15px;
    height: 52px;
    width: 100%;
  }
  .wrap>div {
    width: 25%;
    cursor: pointer;
    font-size: 10px;
    font-family: 'PingFang-SC-Light';
    color: #afb7c2;
  }
  .wrap span {
    display: block;
    width: 21px;
    height: 13px;
    margin: 0 auto;
  }
  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.5px;
  }
</style>
