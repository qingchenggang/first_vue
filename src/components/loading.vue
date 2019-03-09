<template>
    <div class="loading">
      <img src="../../static/cardimg/1.gif" alt="loading"/>
      <p>{{loadingmsg}}</p>
    </div>
</template>

<script>
    export default{
      name: 'loading',
      props: ['loadingmsg']
    }
</script>

<style scoped>
img{
  width: 50px;
  height: 50px;
}
  p{
    font-size: 14px;
    color: #2a2a2a;
  }

</style>
