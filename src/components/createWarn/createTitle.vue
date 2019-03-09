<template>
  <div>
    <div class="header">
      <img class="back" @click="goback" src="../../assets/images/左箭头.png" alt="">
      <span>标题</span>
      <span>&nbsp;</span>
    </div>

    <input type="text" class="titleContent" placeholder="请输入标题" maxlength="10" @blur="focus" v-model="value">
    <div class="keyword">
      <keyword text="还信用卡"></keyword>
      <keyword text="朋友 / 同学聚会"></keyword>
      <keyword text="还房贷"></keyword>
      <keyword text="生日"></keyword>
      <keyword text="交电费"></keyword>
      <keyword text="21天养成好习惯"></keyword>
      <keyword text="结婚纪念日"></keyword>
      <keyword text="签收纪念日"></keyword>
      <keyword text="学习中无法自拔"></keyword>
    </div>

  </div>

</template>
<script>
  import keyword from './keyword.vue'
    export default {
      data() {
          return {
            value: ''
          }
      },
      components: {
          keyword
      },
      methods: {
        goback () {
          this.$router.goBack()
        },
        focus() {
//          window.localStorage.title = this.value

          window.localStorage.setItem('title',this.value)
          window.dispatchEvent(evt);
          this.$router.push({path:"./createWarn",query: { data: this.value}})
//          this.$emit('update')
//          window.history.go(-1)
        }
      }

    }
</script>
<style scoped>
  ::-webkit-input-placeholder {
    color:#afb7a2 !important;
  }

  .titleContent {
    font-size: 25px;
    border:0;outline:none;
    /*padding:0 15px;*/
    margin: 30px 0 2px 0;
  }
  .keyword {
    /*width: 90%;*/
    /*margin:0 auto;*/
    padding-left: 15px;
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content:space-between
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    border-bottom: 1px solid gray;
  }
  .back {
    position: relative;
    right: 50px;
  }

</style>
