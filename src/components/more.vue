<template>
  <div>
    <div class="aaaa">{{text}}</div>
    <div class="section">
      <div class="zidong">
        <span>自动备份</span>
        <span>未开启</span>
        <img class="dayu" src="../../static/images/dayu.png" alt=""/>
      </div>

      <div class="tuijian you" >
        <span>推荐别人</span>
        <img class="dayu" src="../../static/images/dayu.png" alt=""/>
      </div>

      <div class="tuijian you">
        <span>关注我们</span>
        <img class="dayu" src="../../static/images/dayu.png" alt=""/>
      </div>
      <div class="tuijian you">
        <span>反馈建议</span>
        <img class="dayu" src="../../static/images/dayu.png" alt=""/>
      </div>
      <div class="tuijian you">
        <span>清空缓存</span>
        <img class="dayu" src="../../static/images/dayu.png" alt=""/>
      </div>
      <div class="tuijian a">
        <span>语言</span>
        <span>简体中文</span>
        <img class="dayu" src="../../static/images/dayu.png" alt=""/>
      </div>
      <div class="tuijian lala">
        <span>关于</span>
        <img class="dayu" src="../../static/images/dayu.png" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        text: "更多"

      }
    }
  }
</script>

<style scoped>
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

  .zidong {
    height: 40px;
    margin-top: 50px;
    border-bottom: 1px solid gainsboro;
    line-height: 40px;
  }

  .tuijian {
    border-bottom: 1px solid gainsboro;
    line-height: 40px;
    height: 40px;
  }

  .section span {
    margin-left: 10px;
  }
  .zidong span:nth-child(2){
    margin-left: 220px;
    color: gainsboro;
  }
  .dayu{
    width: 21px;
    height: 21px;
    vertical-align: middle;
  }
  .you img{
    margin-left: 270px;
  }
.lala img{
  margin-left: 300px;
}
  .tuijian span:nth-child(2){
    margin-left: 220px;
    color: gainsboro;
  }
  .a img{
margin-left: 10px;
  }
</style>
