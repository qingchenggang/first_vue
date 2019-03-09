<template>
  <div class="bbb">
    <ul class="tup">
      <li v-for='obj in holiday' :class="{myclass:isTrue}">
        <!--<img src="../assets/xinyongk.jpg" alt=""/>-->
        <img :src='obj.img' alt=""/>
        <h3>{{obj.text}}</h3>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        holiday: {},
        isTrue: true
      }
    },
    mounted: function () {
      this.$http.get('static/holiday.json', {}, {
        emulateJSON: true,
        header: {}
      }).then(function (resp) {
        console.log(resp.data)
        this.holiday = resp.data
      })
    }
  }
</script>
<style scoped>
  .bbb{
    width: 90%;
    margin: 0 auto;
  }
  .myclass img {
    width: 337.5px;
    height: 247.5px;
    /*margin-left: -75px;*/


  }

  .tup {
    width: 100%;
    margin-top: 110px;

    /*position: fixed;*/
    /*position: relative;*/
  }


  .tup li {
    padding-left: 0;
    list-style: none;
  }
  .tup h3{
    text-align: left;
    margin-bottom: 30px;
  }

</style>
