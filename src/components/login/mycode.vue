<template>
  <div>


  <header>
    <ul>
      <router-link to="sigin" class="arrow">
        <li>
          <img src="../../../static/image/login_img/left.png" alt="">
        </li>
      </router-link>
      <li>{{zhuce}}({{n}}/3)</li>
      <router-link to="pwd" class="next">
        <li>{{listtext}}</li>
      </router-link>
    </ul>
  </header>
  <div  class="mycode">
      <p>验证码已发送至184****2751
      <br>
      重新发送验证码({{time}}s)
      </p>
    <div class="input">
      <input type="text">
      <input type="text">
      <input type="text">
      <input type="text">
      <input type="text">
      <input type="text">
    </div>
  </div>
    <!--<vue-input-code span-size="40px" type="number" :number="6"-->
                    <!--height="60px" width='45px' span-color="#2a2a2a" input-color="#2a2a2a"-->
                    <!--input-size="40px" :code="code" :getinput="getInput" :success="success" class="input">-->

    <!--</vue-input-code>-->

  </div>


</template>
<script>
    export default {
        name:'code',
      data(){
        return {
          time: 60,
          zhuce: '注册',
          listtext: '下一步',
          n: 2,

        }

      }
    }
</script>
<style scoped>

  header ul .arrow{
    display: block;
    text-align: left;
    width: 30%;
  }

  header ul .next{
    display: block;
    text-align: right;
    /*border: 1px solid blue;*/
    width: 30%;
  }
  header ul li:nth-child(2){
    text-align: center;
    width: 40%;
  }
  a:-webkit-any-link {
    color: -webkit-link;
    cursor: auto;
    text-decoration: none;
  }
  header{
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
  }
  header img{
    width: 20px;
    height: 20px;
    position: absolute;
    left: 16px;
  }
  header ul{
    padding: 15px 0;
    width: 90%;
    margin: 0 auto;
    /*float: left;*/
    display: flex;
    justify-content: space-between;

  }
  header ul li{
    list-style: none;
    font-size: 15px;
    color: #2a2a2a;
  }
  /*header ul li:nth-child(2){*/
    /*padding-left: 20px;*/
  /*}*/
  .mycode{
    /*outline: 1px solid red;*/
    width: 90%;
    margin: 0 auto;
    color: #afb7c2;
    margin-top: 60px;
  }
  .mycode p{
    width: 70%;
    margin: 0 auto;
    padding-top: 15px;
    font-size: 14px;
    line-height: 25px;
  }
  .input{

    /*outline: 1px solid red;*/
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    margin-left: -25px;
  }

  input{
    display: block;
    /*margin-right: 11px;*/
    text-align: center;
    color: #2a2a2a;
    font-size: 40px;
    width: 45px;
    height: 60px;
    outline: none;
    -webkit-appearance: none;
    border-radius: 5px;
    border: 1px solid #f2f2f2;



  }
</style>
