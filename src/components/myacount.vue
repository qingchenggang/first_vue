<template>
  <div id="box">
      <div id="box1">
         <p>账户</p>
      </div>
    <img id="fanhui" src="../assets/切图/@1x/list_icon_right.png" alt="" @click="goback"/>
    <div id="touxiang" >
       <img  src="/static/img/userImg.387b53b.jpg" width="106px" height="106px" alt=""/>
    </div>

  <!--中间的内容  -->
    <div id="box3">
      <div>
        <p >账户类型</p>
        <span>新浪微博</span>
      </div>
      <div>
        <p>昵称</p>
        <span>陈思静 <img class="img" src="../assets/切图/@1x/list_icon_right.png" alt=""/></span>
      </div>

      <div>
        <p>用户名</p>
        <span>xiaodou1234567 <img class="img" src="../assets/切图/@1x/list_icon_right.png" alt=""/></span>
      </div>

      <div>
        <p>手机号</p>
        <span>未绑定<img class="img" src="../assets/切图/@1x/list_icon_right.png" alt=""/></span>
      </div>

      <div>
        <p>修改密码</p>
        <span><img class="img" src="../assets/切图/@1x/list_icon_right.png" alt=""/></span>
      </div>

    </div>
    <div id="btn">退出登录</div>
  </div>

</template>

<script>
  export default {
    name:'myacount',
    methods: {
      goback() {
          this.$router.goBack()
      }
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #box{

    position: relative;
  }
#fanhui{
  -webkit-transform:rotate(180deg);
  position: absolute;
  top:15px;
  left: 20px;
}
#box1{
  width: 100%;
  height: 40px;
  border-bottom:1px solid rgba(175, 183, 194, 0.18);
  }
#box1 img{
  float: left;
}
#box1 p{
  display: block;
  text-align: center;
  line-height: 40px;
  /*margin-left: -20px;*/
}
#touxiang{
  width: 106px;
  margin: 0 auto;
  margin-top: 35px;

}
#touxiang img{
  border-radius: 50%;
}
#box3{
  margin-top: 30px;
}
#box3 div{
  height: 50px;
}
#box3 div p{
  float: left;
  margin-left: 20px;
}
  #box3 div span{
  float: right;
    margin-right:20px;
    color: #afb7c2;
}

#btn{
  margin: 0 auto;
  width: 130px;
  height: 35px;
  border: solid 1px #e83535;
  border-radius: 40px;
  font-size: 18px;
  text-align: center;
  line-height: 35px;
  color: #e93a3a;
}
</style>
