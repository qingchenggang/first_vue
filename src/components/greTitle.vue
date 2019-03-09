<template>
    <div class="greTitle">
      <div class="titleimg" @click="historyGo">
        <img src="../../static/cardimg/list_icon_left@3x.png" alt=""/>
      </div>
      <h5>
        {{text}}
      </h5>
    </div>
</template>

<script>
    export default {
      name:'greTitle',
      props:{
        text:{
          type: String,
          default: '背景',
          validator:function(value){
            return value.length>0;
          }
        }
      },
      methods:{
        historyGo:function(){
          this.$router.go(-1);
        }
      }

    }
</script>

<style scoped>
  .greTitle {
    width: 90%;
    height: 50px;
    margin: 0 auto;
    /*border: 1px solid greenyellow;*/
  }
  .titleimg{
    width: 10px;
    height: 20px;;
    vertical-align: middle;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

  }
  .titleimg img{
    display: inline-block;
    width: 100%;
    height: 100%;
    margin-top: 35px;
  }
  h5{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;

  }


</style>
