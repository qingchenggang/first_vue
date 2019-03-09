<template>
<div>
    <div id="div1">
      <p>绑定手机(1/2)</p>
    </div>
  <div id="div2">
    <img src="../assets/切图/@1x/list_icon_right.png" alt=""/>
    <p>下一步</p>
  </div>
  <p id="p1">我们将发送验证码到这个手机</p>
  <div id="myinput">
    <input type="" placeholder="手机">
  </div>
  <p id="hao">+86 |</p>

</div>
</template>

<script>
  export default {
    name:'myphon'
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
    #div1{
      text-align: center;
      height: 40px;
      line-height: 40px;
      border-bottom:1px solid rgba(175, 183, 194, 0.18);
    }
  #div2 img{
    -webkit-transform: rotate(180deg);
    float: left;
    margin-top: -27px;
    margin-left: 20px;
  }
  #div2 p{
    float: right;
    margin-top: -30px;
    margin-right: 20px;
  }
  #p1{
    color: #afb7c2;
    font-size: 14px;
    text-align: center;
    margin-top: 30px;
  }
  #myinput{
    width: 100%;
    text-align: center;
  }
  #myinput input{
    outline: none;
    -webkit-appearance: none;
    border-style: none;
    margin-top: 30px;
    margin-left: 70px;

  }
  #hao{
    margin-left: 100px;
    margin-top: -20px;
  }
</style>
