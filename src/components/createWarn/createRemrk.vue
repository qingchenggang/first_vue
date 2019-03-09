<template>
  <div>
    <div class="header">
      <img class="back" @click="goback" src="../../assets/images/左箭头.png" alt="">
      <span>备注</span>
      <span>&nbsp;</span>
    </div>

    <!--<textarea type="text" placeholder="请输入备注"></textarea>-->
    <textarea name="" id=""  placeholder="请输入备注" @blur="myBlur" v-model="value"></textarea>
  </div>
</template>
<script>
    export default {
        data() {
            return {
              value: ''
            }
        },
        methods: {
          goback() {
              this.$router.goBack()
          },
          myBlur() {
              window.localStorage.remark = this.value
              window.dispatchEvent(evt);
              window.history.go(-1)
          }
        }
    }
</script>
<style scoped>
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
  textarea {
    width: 345px;
    padding-left: 30px;
    outline: none;
    border: none;
    margin-top: 30px;
    font-size: 15px;
  }
  ::-webkit-input-placeholder {
    color:#afb7a2 !important;
  }
</style>
