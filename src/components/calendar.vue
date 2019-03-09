<template>
  <div>
    <div class="calendar_5">
      <div class="calendar">今日提醒</div>
      <!--// 接收数据-->
      <div>
        <div class="calendar_2">

          <div class="calendar_1"><img src="../assets/calendar/@3x/list_icon_Single@3x.png"></div>
          <div class="calendar_3">
            <p>购物抢包包</p>
            <p class="calendar_p">2017-3-2 14:20</p>
          </div>
        </div>
        <div class="calendar_2">
          <div class="calendar_1"><img src="../assets/calendar/@3x/list_icon_alarm_clock@3x.png"></div>
          <div class="calendar_3">
            <p>睡觉</p>
            <p class="calendar_p">每天 22:20</p>
          </div>
        </div>
        <div class="calendar_2">
          <div class="calendar_1"><img src="../assets/calendar/@3x/list_icon_anniversary@3x.png"></div>
          <div class="calendar_3">
            <p>结婚纪念日</p>
            <p class="calendar_p">每年 3-2 09:30</p>
          </div>
        </div>
        <div class="calendar_2">
          <div class="calendar_1"><img src="../assets/calendar/@3x/list_icon_alarm_clock@3x.png"></div>
          <div class="calendar_3">
            <p>每周重要例会</p>
            <p class="calendar_p">每周，周三 11:00</p>
          </div>
        </div>
      </div>
    </div>
    <!--固定的输入框-->
    <div class="calendar_4">
      <input type="text" name="myonput1" class="calendar_input" placeholder="输入提示标题"/>
      <img src="../assets/calendar/@3x/tab_icon_voice@3x.png">

    </div>
  </div>
</template>

<script>
    export default{
        name:'calendar'
    }

</script>
<style scoped>
  .calendar{
    font-size: 20px;
    margin-left: 6%;
    color: #afb7c2;
     }
  .calendar_1{
    float: left;
    width: 60px;
    height: 60px;
  }
  .calendar_1 img{
    width: 100%;
    height: 100%;
  }
  .calendar_2{
    margin-top: 30px;
    margin-left: 6%;
    height: 60px;
  }
  .calendar_3{
    float: left;
    margin-left: 30px;
    line-height: 30px;
  }
  .calendar_p{
    color: #afb7c2;
  }
  .calendar_4{
    border: 1px solid #d7dbe0;
    background-color: white;
    width: 100%;
    position: fixed;
    height: 50px;
    bottom: 0;
    left: 0;
  }
  .calendar_input{
    width: 75%;
    height: 37px;
    border-radius: 20px;
    margin-left: 5%;
    margin-top: 8px;
    border: 1px solid #d7dbe0;
    float: left;
    color: #b3bbc6;
    padding-left: 20px;
  }
  .calendar_4 img{
    margin-left: 5%;
    width: 20px;
    height: 27px;
   float: left;
    margin-top: 15px;
  }
  .calendar_5{
    margin-bottom: 55px;
  }

</style>
