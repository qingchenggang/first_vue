<template>
  <div>
      <div id="boxh">
        <p id="p1">修改密码</p>
      </div>
    <div id="boxw">
      <img src="../assets/切图/@1x/list_icon_right.png" alt=""/>
      <p id="p2">保存</p>
    </div>

      <div id="boxbig">
          <div class="box1">
            <img src="../assets/切图/@1x/icon_unlock.png" alt=""/>
            <input type="password" placeholder="请输入旧密码">
          </div>
          <div class="box1">
            <img src="../assets/切图/@1x/icon_unlock.png" alt=""/>
            <input type="password" placeholder="请输入新密码">
          </div>
          <div class="box1">
            <img src="../assets/切图/@1x/icon_unlock.png" alt=""/>
            <input type="password" placeholder="请重复新密码">
          </div>
      </div>
  </div>

</template>

<script>
  export default {
    name:'mypassword'
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #boxh{
    width: 100%;
    height: 30px;
    border-bottom: 1px solid rgba(175, 183, 194, 0.15);
    padding: 10px 0 10px 0;
  }
  #boxw{
    position: relative;
  }
  #boxw img {
    position: absolute;
    -webkit-transform: rotate(180deg);
    top: -33px;
    left: 30px;
  }
  #boxw p{
    float: right;
    color: #2a2a2a;
    margin-top: -38px;;
    font-size: 16px;
    margin-right: 30px;
  }
  #boxh img{
    -webkit-transform: rotate(180deg);
  }
  #boxh p{
     text-align: center;
    line-height: 30px;
  }
  input{
    width: 200px;
     outline: none;
     -webkit-appearance: none;
     border-style: none;
    margin-bottom: 5px;
    padding-bottom: 10px;

   }
  ::-webkit-input-placeholder{
    padding-left:10px;

  }

  #boxbig{
    width: 230px;
    height: 100%;
    margin: 60px auto;

  }
  .box1{
    padding: 30px 30px 0 0;
    width: 230px;
    border-bottom: 1px solid #afb7c2;
  }
  .box1 img{
    /*margin-top: 5px;*/
    /*display: inline-block;*/

  }
</style>
