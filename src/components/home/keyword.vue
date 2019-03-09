<template>
  <div class="keyword">{{text}}</div>
</template>
<script>

    export default {
      name:'keyword',
      props:{
        text:{
          type:String,
        },
      },

    }
</script>
<style scoped>
  .keyword{
    margin-right: 15px;
    height: 31px;
    font-size: 16px;
    color: #afb7c2;
    margin-top: 15px;
    text-align: center;
    line-height: 31px;
    border-radius: 31px;
    padding: 1px 23px;
    border: 1px solid #afb7c2;
  }

</style>
