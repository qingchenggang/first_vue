<template>
  <div class="sigin">
    <header>
      <ul>
        <router-link to="login" class="arrow">
          <li>
            <img src="../../../static/image/login_img/left.png" alt="">
          </li>
        </router-link>
        <li >{{zhuce}}({{n}}/3)</li>
        <router-link to="mycode"  class="next">
          <li>{{listtext}}</li>
        </router-link>

      </ul>
    </header>
    <section>
      <p>我们将发送验证码到这个手机
      <br>
        点击“下一步”表示同意
        <router-link to="artical">
          <span>《服务协议》</span>
        </router-link>

      </p>
      <div class='tel'>
        <span>+86</span>
        <input type="text" placeholder="手机"/>
      </div>
    </section>
  </div>
</template>
<script>
//  import tel from './tel'
//  import mycode from './mycode'
    export default {
      name:'sigin',
        data () {
            return{
              zhuce:'注册',
              listtext:'下一步',
              n:1,
            }
        }
    }
</script>
<style scoped>

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
    /*top:20px;*/
    left: 16px;
  }
  header ul{
    /*outline: 1px solid red;*/
    padding: 15px 0;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

  }

  header ul li{
    list-style: none;
    font-size: 15px;
    color: #2a2a2a;
    height:100%;
    width: 100%;
  }
  header ul .arrow{
     display: block;
     text-align: left;
     width: 30%;
    /*border: 1px solid blue;*/
   }

  header ul .next{
    display: block;
    text-align: right;
    width: 30%;
  }
  header ul li:nth-child(2){
    text-align: center;
    width: 40%;
  }
  section{
    width: 70%;
    margin: 0 auto;
    color: #afb7c2;
    margin-top: 60px;
  }
  section p{
    padding-top: 15px;
    font-size: 14px;
    line-height: 25px;
  }
  section p span{
    color: #67a2f3;
  }
  section .tel{
    width: 90%;
    margin: 0 auto;
    /*outline: 1px solid red;*/
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
  .tel span{
    font-size: 25px;
    color: #2a2a2a;
    margin-top: 28px;
  }
  .tel input{
    width: 70%;
    outline: none;
    font-size: 25px;
    padding: 15px 0;
    -webkit-appearance: none;
    border-style: none;
  }
  ::-webkit-input-placeholder{
    color: #afb7c2;
    font-size: 25px;
  }

</style>
