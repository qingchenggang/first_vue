<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="header">
      <img class="back" @click="goback" src="./../assets/images/左箭头.png" alt="">
      <span>日历</span>
      <span>&nbsp;</span>
    </div>

    <!--<auxiliary1></auxiliary1>-->
    <!--<auxiliary2></auxiliary2>-->
    <!--<auxiliary3></auxiliary3>-->
    <!--<auxiliary4></auxiliary4>-->
    <!--<auxiliary5></auxiliary5>-->
    <!--<auxiliary6></auxiliary6>-->
    <!--<auxiliary7></auxiliary7>-->
    <calendar_1></calendar_1>
    <calendar></calendar>
  </div>
</template>

<script>
//  import day1 from './components/day1'
  import calendar from './calendar'
  import calendar_1 from './calendar_1'
//  import auxiliary from './components/auxiliary'
//  import auxiliary1 from './components/auxiliary1'
//  import auxiliary2 from './components/auxiliary2'
//  import auxiliary3 from './components/auxiliary3'
//  import auxiliary4 from './components/auxiliary4'
//  import auxiliary5 from './components/auxiliary5'
//  import auxiliary6 from './components/auxiliary6'
//  import auxiliary7 from './components/auxiliary7'
  export default {

  name: 'app',
  components: {
    'calendar': calendar,
    'calendar_1': calendar_1,
//    'auxiliary': auxiliary,
//    'auxiliary1': auxiliary1,
//    'auxiliary2': auxiliary2,
//    'auxiliary3': auxiliary3,
//    'auxiliary4': auxiliary4,
//    'auxiliary5': auxiliary5,
//    'auxiliary6': auxiliary6,
//    'auxiliary7': auxiliary7
  },
    methods: {
      goback() {
          this.$router.goBack()
      }
    },
}
</script>

<style>
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
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
