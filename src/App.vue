<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<style>
  /*@import url('./assets/css/animate.css');*/
  *{
    margin: 0;
    padding: 0;
    border: 0;
  }
  a:-webkit-any-link {
    color: -webkit-link;
    cursor: auto;
    text-decoration: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif,PingFang-SC-Regular;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
  }
  .addPhoto div {
    display: inline-block;
    margin-left: 3.5px;
  }

  .nodePtos {
    width: 75px;
    height: 75px;
    margin-left: 15px;
    margin-bottom: 15px ;
    border-radius: 5px;
  }
  .header {
    width:100%;
    height:50px;
    background:#fff;
    color:#000;
    line-height:50px;
    text-align: center;
  }
  .md-theme-default.md-sidenav .md-sidenav-content {
    background-color: #34353B !important;
    color: rgba(0, 0, 0, .3);
  }
  .md-sidenav.md-active .md-sidenav-backdrop {
    opacity: 0 !important;
    pointer-events: auto;
  }
  .child-view {
    position: absolute;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(25px, 0);
    transform: translate(25px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-25px, 0);
    transform: translate(-25px, 0);
  }
  /*popover样式覆盖*/

</style>
