<template>
  <div class="login">
    <header>
      <div>
        <router-link to="/home">
          <img src="../../../static/image/login_img/login_icon_close@2x.png" alt="">
        </router-link>
      </div>
      <div>
        <router-link to="sigin">
          <span>注册</span>
        </router-link>
      </div>

    </header>
    <section>
      <div>
        <img src="../../../static/image/login_img/logo_login.png" alt="">
      </div>
      <div class="userLogin">
        <input type="text" placeholder="用户名" id="username">
        <input type="password" placeholder="密码" id="userpwd">
        <p>重置密码</p>
      </div>
    </section>
    <footer>
      <div>
        <img @click='loginBtn' src="../../../static/image/login_img/login_btn_login.png" alt="">
      </div>
      <div class="iconsBox">
        <ul>
          <li>
            <img src="../../../static/image/login_img/icon_WeChat.png" alt="">
          </li>
          <li>
            <img src="../../../static/image/login_img/icon_weibo.png" alt="">
          </li>
          <li>
            <img src="../../../static/image/login_img/icon_QQ.png" alt="">
          </li>
        </ul>
      </div>
    </footer>
  </div>

</template>
<script>
    export default {
      name:'login',
      data(){
          return{
              login:[
                {
                  username:'',
                  userpwd:''
                }
              ]
          }
      },
      methods:{
        loginBtn(){
          console.log('我点击了登录按钮');
          var username=document.getElementById('username');
          var userpwd=document.getElementById('userpwd');
          if(this.username==username.value || this.userpwd==userpwd.value){
              this.$router.push({path:'/home'});
          }
          else if(this.username!=username.value || this.userpwd!=userpwd.value){
              username.value='';
              userpwd.value='';
          }
        }
      },
      mounted(){

          this.$http.get('static/json/login.json').then(function(response){
            console.log(response)
            this.username=response.data.login[0].username;
            this.userpwd=response.data.login[0].userpwd;
            console.log(this.username)
            console.log(this.userpwd)
          })

      }
    }
</script>
<style scoped>
  .iconsBox li:nth-child(1) img {
    margin-top: 8px;
  }
  a:-webkit-any-link {
    color: -webkit-link;
    cursor: auto;
    text-decoration: none;
  }
  .login{
    width:90%;
    margin: 0 auto;
    height: 500px;
    margin-left: 18.66px;
  }
  header{
    margin-top: 15px;
    /*border: 1px solid red;*/
    width: 100%;
    display: flex;
    align-items: center;
    /*line-height: 31px;*/
    justify-content: space-between;
  }
  header div:first-child{
    flex:0 1 50%;
    text-align:left;
  }
  header div:last-child{
    flex:0 1 50%;
    text-align:right;
  }
  header img{
    width: 15.5px;
    height: 15.5px;
  }
  header span{
    margin-top: 12px;
    font-size: 17px;
    color: #afb7c2;
  }
  section{
    margin-top: 35px;
  }
  section .userLogin{
    /*outline: 1px solid red;*/
    display: flex;
    margin-top:35px;
    flex-direction: column;
  }
  .userLogin input{
    margin: 0 auto;
    width: 65%;
    background-color: transparent;
    font-size: 15px;
    padding: 15px 0;
    outline: none;
    border-radius: 0;
    -webkit-appearance: none;
    border-style: none;
    border-bottom: 1px solid #afb7c2;
  }
  .userLogin p{
    /*display: inline-block;*/
    text-align: right;
    font-size: 13px;
    margin-right: 18%;
    margin-top: 15px;
    color: #e83535;
  }
  ::-webkit-input-placeholder{
    color: #afb7c2;
  }
  footer{
    margin-top: 50px;
  }
  footer .iconsBox  ul{

    width: 65%;
    margin: 0 auto;
    margin-top: 105px;

    display: flex;
    justify-content: space-between;
  }
  .iconsBox ul li{
    list-style: none;
  }
</style>
