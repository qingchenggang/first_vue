<template>
  <div class="personal">
    <div>
        <div class="userImg">
          <router-link to="/myacount">
          <img src="../../../static/image/home_img/userImg.jpg" alt="">
          </router-link>
          <div class="userMsg">
            <p>{{username}}</p>
            <p>{{usertel}}</p>
          </div>
        </div>
      <table cellpadding="10">
          <tr>
            <td><img src="../../../static/image/home_img/leftbar_icon_password.png" alt=""></td>
            <td>锁屏密码</td>
          </tr>
          <tr>
              <td><img src="../../../static/image/home_img/leftbar_icon_bell.png" alt=""></td>
              <td><router-link to="/remindRing" id="skipMusic">批量设置铃声、提醒声音</router-link></td>
          </tr>
          <tr>
              <td><img src="../../../static/image/home_img/leftbar_icon_gratuity.png" alt=""></td>
              <td>打赏作者</td>
          </tr>
          <tr>
              <td><img src="../../../static/image/home_img/leftbar_icon_Praise.png" alt=""></td>
              <td>给我们个评分吧！</td>
          </tr>
          <tr>
              <td><img src="../../../static/image/home_img/leftbar_icon_more.png" alt=""></td>
              <td>更多</td>
          </tr>
      </table>
    </div>
  </div>

</template>
<script>
    export default {
      name:'personal',
      data () {
          return{
            username:'陈思静',
            usertel:'18408272751'
          }
      }
    }
</script>
<style scoped>
  #skipMusic {
    color: red !important;
  }
  a:-webkit-any-link{
    color: white;
    text-decoration: none;
  }
.personal{
  color: #fff;
}
.personal>div{
  width: 90%;
  margin: 0 auto;
}
  .userImg img{
     width: 63px;
    height: 63px;
    border-radius: 63px;
  }
  .userImg{
    /*outline: 1px solid red;*/
    display: flex;
    width: 80%;
    margin: 0 auto;
    margin-top: 65px;
  }
  .userMsg{
    margin-top: 9px;
    margin-left: 15px;
    /*outline: 1px solid #f2f2f2;*/
    text-align: left;
    height: 45px;
  }
  .userMsg p:nth-child(1){
    font-size: 18px;
  }
  .userMsg p:nth-child(2){
    margin-top: 5px;
    font-size: 16px;
  }
table{
  border-spacing:17px 30px;
  width: 90%;
  margin: 0 auto;
  margin-top: 59px;
}
table td{
  text-align: left;
  font-size: 16px;
}
table td img{
  vertical-align:middle;
}
</style>
