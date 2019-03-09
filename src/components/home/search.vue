<template>
  <div class="mysearch">
    <header>
      <div>
        <img src="../../../static/image/home_img/home_icon_seach.png" alt="">
        <input type="text"  placeholder="请输入标题">
        <router-link to="/home">
          <p>取消</p>
        </router-link>

      </div>
    </header>
    <section>
        <div class="classify">
          <p>分类搜索</p>
          <div class="box">
            <keyword text="单次提醒"></keyword>
            <keyword text="闹钟"></keyword>
            <keyword text="生日"></keyword>
            <keyword text="节日"></keyword>
            <keyword text="纪念日"></keyword>
            <keyword text="按日提醒"></keyword>
            <keyword text="按周提醒"></keyword>
            <!--<keyword text="按月提醒"></keyword>-->
          </div>
        </div>
      <div class="history">
        <div>
          <p>历史搜索</p>
          <img @click='deleteHistory'  src="../../../static/image/home_img/home_icon_delete.png" alt="">
        </div>
        <div class="box"  v-if='ok'>
          <keyword text="妈妈"></keyword>
          <keyword text="买车"></keyword>
          <keyword text="老婆生日"></keyword>
        </div>
      </div>
    </section>


  </div>

</template>
<script>
  import Keyword from "./keyword";
    export default {
      components: {Keyword}, name:'search',
      data(){
          return{
            ok:true
          }
      },
      methods:{
        deleteHistory(){
            console.log(111)
            this.ok=false;
        }
      }
    }
</script>
<style scoped>
  .mysearch{
    /*border: 1px solid red;*/
    width:90%;
    margin-top: 20px ;
    margin-left: 18.66px;
  }
  header{
    /*border: 1px solid mediumvioletred;*/
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 2;
    line-height: 25px;
  }
  header>div{

    /*border:1px solid red;*/
    width: 90%;
    line-height: 31px;
    height: 31px;
    margin: 20px auto;

  }
 header input,header p{
      float: left;
  }
  header input{
    margin-left: 0;
    margin-top: 0;
    outline: none;
    -webkit-appearance: none;
    border-style: none;
    height: 31px;
    border-radius: 31px;
    width:296.5px;
    background-color: #f6f7fb;
    font-size: 14px;
    text-indent: 13%;
  }
  header img{
    position: absolute;
    left: 9%;
    top:41%;

  }
  header p{
    font-size: 15px;
    color: #e83535;
    float: right;
  }
  ::-webkit-input-placeholder{
    color: #afb7c2;

  }
  section{
    /*border: 1px solid red;*/
    /*height: 30px;*/
    margin-top: 81px;
  }
  section p{
    font-size: 14px;
    color: #afb7c2;
    text-align: left;
  }
  section .history{
    margin-top: 30px;
  }

  .box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .history>div{
    display: flex;
    justify-content: space-between;
  }

</style>
