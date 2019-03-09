<template>
  <div class="wrap">
    <div :class="{big:index===0}" class="cirlce"></div>
    <div :class="{big:index===1}" class="cirlce"></div>
    <div :class="{big:index===2}" class="cirlce"></div>
  </div>
</template>
<script>
    export default {
      props: ['index'],
      data () {
        return {
        }
      }
    }
</script>
<style scoped>
  .wrap {
    width: 46px;
    height: 9px;
  }
  .cirlce {
    width: 9px;
    height: 9px;
    background-color: #afb7c2;
    border-radius: 9px;
    float: left;
  }
  .cirlce:nth-of-type(2) {
    margin: 0 5px
  }
  .big {
    width: 18px;
    background-color: #fb4747;
  }
</style>
