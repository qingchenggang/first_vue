<template>
  <div class="generateCard">
    <!--<nav-title text="短信"></nav-title>-->
    <div class="greeCardTop">
      <img :src="content.cardImg" alt=""/>
      <div class="logoimg">
        <img src="../../static/cardimg/logo.png" alt=""/>
      </div>
      <div class="greeCardCont">
        <p>
          <span>{{content.name}}</span>
          <span>{{content.date}}</span>
        </p>
        <div class="textInput">
         {{ content.contentText}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import greTitle from './greTitle'
  export default {
    name:'generateCard',
    data:function(){
      return {
        content: {
          cardImg:'',
          name:'',
          date:'',
          contentText:''
        }
      }
    },
    mounted:function(){
      this.content=this.$route.query.content;
      this.name=this.$route.query.name;
    }
//    components: {
//      'nav-title': greTitle
//    }


  }
</script>

<style scoped>
  .generateCard{
    width: 90%;
    margin: 1px auto;
    overflow: hidden;
  }
  .greeCardTop{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .greeCardTop img{
    width: 100%;
    height: 100%;
  }
  .logoimg{
    position: absolute;
    top: .375rem;
    left: 1.6%;
  }
  .greeCardCont{
    width: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: left;
    position: absolute;
    bottom:1.5rem;
    left: 9.1%;
    color: #212121;
  }

  .greeCardCont p{
    font-size: 0.9em;
    color: #000;
    font-weight: bold;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1.3rem;

  }
  .textInput{
    width: 100%;
    background:none;
    margin-bottom: 1rem;
  }

</style>
