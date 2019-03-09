<template>
  <div>
    <div>
      <div id="div1">
        <p>绑定手机(1/2)</p>
      </div>
      <div id="div2">
        <img src="../assets/切图/@1x/list_icon_right.png" alt=""/>
      </div>
      <div id="text">
        <p>验证码已发送至135****4444</p>
        <p></p>
      </div>
      <p id="redp">验证码错误</p>
      <div>
        <input type=""/>
        <input type=""/>
        <input type=""/>
        <input type=""/>
        <input type=""/>
        <input type=""/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Verificationerror'
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
  #text p{
    text-align: center;
    margin-top: 30px;
    font-size: 14px;
    /*color: rgba(175, 183, 194, 0.89);*/
    color: #e83a3a;
  }
  input{
    width: 35px;
    height: 45px;
    border-radius: 8px;
    margin-left: 15px;
    margin-top: 30px;
  }
  #redp{
    color:red;
    text-align: center;
    font-size: 14px;
  }
</style>
