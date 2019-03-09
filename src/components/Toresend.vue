<template>
  <div>
    <div>
      <div id="div1">
        <p>绑定手机(1/2)</p>
      </div>
      <div id="div2">
        <img src="../assets/切图/@1x/list_icon_right.png" alt=""/>
      </div>

        <p id="p1">验证码已发送至135****4444</p>

      <p id="redp">重新发送验证码</p>
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
    name:'Toresend'
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
    text-align: center;
    margin-top: 30px;
    font-size: 14px;

  }
  input{
    width: 35px;
    height: 45px;
    border-radius: 8px;
    margin-left: 17px;
    margin-top: 30px;
  }
  #redp{
    color:red;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }
</style>
