<template>
  <div>
    <div class="header">
      <div class="title">主页</div>
    </div>
    <ul>
      <li><router-link to="createWarn">新建提醒</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>
