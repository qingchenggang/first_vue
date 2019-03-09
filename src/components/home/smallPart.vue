<template>
  <router-link to="/detail1">
  <div class="partMsg" v-if="ok" @click="set">
    <div class="headImg">
      <img src="../../../static/image/home_img/userImg.jpg" alt="">
    </div>
    <div>
      <p class="partTitle">{{partMsgTitle}}</p>
      <p class="day">{{today}} - {{dayTime}}</p>
    </div>

    <div class="moreBox">
      <el-popover
        ref="popover4"
        placement="top"
        width="200"
        trigger="click">
        <table class="morePOpover">
          <tr>
            <td><img src="../../../static/image/home_img/home_icon_up.png" alt=""></td>
            <td>置顶此条提醒</td>
          </tr>
          <tr>
            <td><img src="../../../static/image/home_img/home_icon_delete.png" alt=""></td>
            <td @click="deleteSmallPart" class="delete">删除</td>
          </tr>
        </table>
      </el-popover>

      <div v-popover:popover4 class="moreDiv">
        <img src="../../../static/image/home_img/home_icon_more.png" alt="">
      </div>

      <p v-show="isHour">
       <span class="hmd">{{hours}}</span><span class="hmdtext">小时</span><span class="hmd">{{minutes}}</span><span class="hmdtext">分</span>
      </p>
      <p v-show="isDay">
        <span class="hmd">{{days}}</span><span class="hmdtext">天</span>
      </p>
      <p class="over" v-show="isOver">已结束</p>
    </div>

  </div>
  </router-link>
</template>
<script>
    export default {
      name:'smallPart',
      data () {
        return{
          partMsgTitle :'陈思静生日',
          today:'今天',
          dayTime:'14:30',
          hours:1,
          minutes:15,
          days:1,
          isHour:true,
          isDay:false,
          isOver:false,
          ok:true,  //点击删除，整个小组件消失
          isdelete:'',
        }
      },
      methods:{
        deleteSmallPart(){
            this.ok=false;
        },
        set () {
          return Promise.resolve().then(()=>{
            return this.$http.get('../../static/detail/detail.json').then(res=>{
              var data = {};
              for(var key of JSON.parse(res.bodyText)) {
                if(key.title === '陈思静生日') {
                  data = key;
                  break;
                }
              }
              window.localStorage.setItem('detail',JSON.stringify(data))
            })
          })
        }
      },
      mounted() {
        window.setDetail = function () {
          return this.set();
        }.bind(this)
      }
}
</script>
<style scoped>
  .moreDiv{
    width: 13px;
    height: 3px;
    margin-bottom: 20%;
  }
  .morePOpover{
    border-spacing: 10px;
    font-size: 16px;
    color:#212121;
  }
  .moreBox{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 30%;
    /*border: 1px solid red;*/
  }
  .day{
    margin-top: 10px;
    font-size: 14px;
    color: #afb7c2;
  }
  .partMsg{
    margin-top: 20px;
    font-size:15px;
    color: #212121;
  }
  .partMsghide{
    display: none;
    margin-top: 20px;
    font-size:15px;
    color: #212121;
  }
  .partMsg>div:nth-child(2){
    margin-left: 15px;
  }
  .headImg{
    width: 49px;
    height: 49px;
    border-radius: 34px;
    background-color: #f2f2f2;
  }
  .headImg img{
    width: 49px;
    height: 49px;
    border-radius: 34px;
  }
  .partMsg div{
    float: left;
  }
  .partMsg div:nth-child(3){
    height:49px;
    float: right;
    /*border: 1px solid darkred;*/
    text-align: right;
  }
  .partMsg div:nth-child(3) img{
    vertical-align: text-top;
  }
  .hmd{
    font-size: 17px;
  }
  .hmdtext{
    font-size: 12px;
  }
  .hmd,.hmdtext{
    color: #e83535;
  }
  .over{
    color: #95a0b3;
    font-size: 13px;
  }


</style>
