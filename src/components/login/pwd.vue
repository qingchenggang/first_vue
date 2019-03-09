<template>
  <div>
    <header>
      <ul>
        <router-link to="mycode" class="arrow">
          <li>
            <img src="../../../static/image/login_img/left.png" alt="">
          </li>
        </router-link>
        <li>{{zhuce}}({{n}}/3)</li>
        <router-link to="login" class="next">
          <li>{{listtext}}</li>
        </router-link>
      </ul>
    </header>
    <section>
      <div>
        <img class="img" src="../../../static/image/login_img/icon_unlock.png" alt="">
        <input type="text" placeholder="请输入密码">
      </div>
     <div>
      <img class="img" src="../../../static/image/login_img/icon_lock.png" alt="">
      <input type="password" placeholder="请重复密码">
     </div>

    </section>
  </div>

</template>
<script>
    export default {
      data () {
        return{
          zhuce:'注册',
          listtext:'完成',
          n:3,
        }
      }
    }
</script>
<style scoped>
  .img {
    margin-top: 20px;
  }
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

  section{
    /*outline: 1px solid red;*/
    width:60%;
    height: 200px;
    margin: 0 auto;
    margin-top: 100px;
  }
  section>div{
    position: relative;
  }
 section img{
   position: absolute;
   top:30%

 }
  input{
    color: #2a2a2a;
    padding: 15px 0;
    outline: none;
    width: 100%;
    -webkit-appearance: none;
    border-style: none;
    /*border-radius: 5px;*/
    border-bottom: 1px solid #f2f2f2;
    text-indent: 15%;
    font-size: 15px;
  }
  ::-webkit-input-placeholder{
    color: #afb7c2;
  }
</style>
