<template>
  <div>
    <div class="header">
      <img class="back" @click="goback" src="../../assets/images/左箭头.png" alt="">
      <span>设置提前提醒时间</span>
      <span>&nbsp;</span>
    </div>

    <div class="time">
      <div v-for="(key,index) in timeList">
        <div @click="myClick(index)"><span>{{key.item}}</span></div>
      </div>
    </div>


  </div>
</template>
<script>
    export default {
      data() {
          return {
              timeList: [
                {item: '仅当前提醒'},
                {item: '提前10分钟'},
                {item: '提前20分钟'},
                {item: '提前30分钟'},
                {item: '提前40分钟'},
              ]
          }
      },
      methods: {
        goback() {
          this.$router.goBack()
        },
        myClick(obj) {
          console.log(this.$data.timeList[obj].item)  // 获取到当前点击的内容
          var value = this.$data.timeList[obj].item
          this.$router.push({path:"./createWarn",query: { data2: value}})
//          存储本地的设置提醒时间
          localStorage.aheadTime = value
          window.dispatchEvent(evt);
        }
      }
    }
</script>
<style scoped>
  .time {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .time>div{
    width: 375px;
    text-align: left;
    padding-left: 60px;
    font-size: 16px;
    margin-top: 30px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    border-bottom: 1px solid gray;
  }
  .back {
    position: relative;
    right: 33px;
  }
</style>
