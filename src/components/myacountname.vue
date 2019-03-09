<template>
  <div id="fa">
    <div id="namebox">
      <p id="p1">昵称</p>
      <span>完成</span>
      <img src="../assets/切图/@1x/list_icon_right.png" alt=""/>
    </div>
  </div>
</template>

<script>
  export default {
    name:'myacountname'

  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
/*#fa{*/
  /*posr*/
/*}*/

  #namebox{
    width: 100%;
    height: 30px;
    border-bottom: solid 1px rgba(112, 112, 112, 0.37);
  }
#namebox p{
  color: #707070;
  line-height: 30px;
  text-align: center;
}
  span {
    color: #707070;
    float: right;
    margin-top: -25px;
    margin-right: 20px;
  }
  img {
    float: left;
    -webkit-transform: rotate(180deg);
    margin-top: -20px;
    margin-left: 20px;
  }
</style>
