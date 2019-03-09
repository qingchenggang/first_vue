<template>
  <div>
    <div class="header"></div>
    <transition :name="transitionName">
      <keep-alive>
      <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
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

<style scoped>
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
  .header {
    position:absolute;
    height:50px;
    background:#fff;
    width:100%;
    /*border-bottom: 1px solid black;*/
    /*display: flex;*/
    /*align-items: flex-start;*/
    /*justify-content: flex-start;*/
  }
</style>
