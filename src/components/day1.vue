<template>
  <div>
    <ul class="tup">
      <li v-for='obj in day1'>
        <div class="aaaa">{{obj.text}}</div>
      </li>
    </ul>
  </div>


</template>

<script>
  export default{
    name: 'day1',
    data: function () {
      return {
        day1: {}
      }

    },
    components: {},
    mounted: function () {
      this.$http.get('static/day1.json', {}, {
        emulateJSON: true,
        header: {}
      }).then(function (resp) {
        console.log(resp.data)
        this.day1 = resp.data
      })
    }
  }
</script>

<style scoped>
  .aaaa {
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 60px;
    font-weight: bold;
    color: #000;
    z-index: 6;
  }


</style>
