<template>
  <div>
    <router-link to="/jingxuan">
      <div class="beijing">
        <p>点击取消</p>
      </div>
    </router-link>

    <div class="weibu">
      <img class="duanxin" src="../../static/images/duanxin.jpg" alt=""/>
      <img class="weixin" src="../../static/images/weixin.jpg" alt=""/>
      <img class="pengyouquan" src="../../static/images/pengyouquan.jpg" alt=""/>
    </div>

  </div>


</template>

<script>
  export default {}
</script>

<style scoped>
  .beijing {
    width: 100%;
    height: 480px;
    background-image: url("../../static/images/beijing.jpg");
  }
.beijing p{
  color:white;
  text-decoration: none;
  position: absolute;
  top: 430px;
  left: 35%;
  font-weight: bold;
  font-size: 30px;
}
  .weibu {
    width: 100%;
    height: 90px;
    background-color: white;
    text-align: center;
  }

  .duanxin {
    width: 55px;
    height: 55px;
    margin-top: 10px;

  }

  .weixin {
    width: 60px;
    height: 60px;
    margin-top: 10px;
    margin-left: 20px;
  }

  .pengyouquan {
    width: 55px;
    height: 55px;
    margin-left: 20px;
  }
</style>
