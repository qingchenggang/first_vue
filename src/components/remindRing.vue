<template>
    <div class="remindRing">
      <nav-title text="批量设置"></nav-title>
      <div class="ringcont">
        <div class="ringcontNin" v-for="item in ringData">
          <h5>{{item.title}}</h5>
          <ul>
            <li v-for="n in item.cont" :id="n.id" :class="n.type" @click="openPicker">
                <div class="imgleft">
                  <img :src="n.img1" alt=""/>
                  <p>{{n.title1}}</p>
                </div>
                <div class="imgright">
                  <p>{{n.sing}}</p>
                  <img src="../../static/cardimg/list_icon_right.png" alt=""/>
                </div>
            </li>
          </ul>
        </div>
      </div>
      <mt-datetime-picker
        ref="picker"
        type="time"
        v-model="pickerValue"
        @confirm="handleConfirm">

      </mt-datetime-picker>

      <mt-datetime-picker
        ref="pickerTime"
        type="datetime"
        v-model="pickerValueTime"
        @confirm="handleConfirmTime">

      </mt-datetime-picker>

    </div>
</template>

<script>
  import greTitle from './greTitle'
  import { DatetimePicker } from 'mint-ui';
//  Vue.component(DatetimePicker.name, DatetimePicker);
  export default {
    name:'remindRing',
    data(){
      return {
        ringData: {},
        pickerValue:'',
        number:0,
        pickerValueTime:'',
        numberTimes:0,
        rindvlaue:{},
        liid:''
      }
    },
    mounted:function(){
      var that=this;
      this.$http.get('static/josn/remingring.json').then(function (resp) {
        this.ringData= resp.data;
        var a=this.$route.query.remindVlaue;
        var b=this.$route.query.liid;
        that.ringData.a.cont[b].sing= a.ringname;

    });

    },
    components: {
      'nav-title': greTitle

    },
    methods: {
        openPicker:function(e){
            var that=this;
            for(var key in that.ringData){
              for(var i=0;i<that.ringData[key].cont.length;i++) {
                if( e.target.className==="singyog"){
                  if(e.target.id === that.ringData[key].cont[i].id){
                    that.liid=i;
                    window.location.href='#/ringBell?'+'liid='+that.liid;
//                    location.href="test2.html?"+"txt="+encodeURI(s.value);
                    console.log( that.liid);
                  }
                } else  if( e.target.className==="times") {
                  if (e.target.id === that.ringData[key].cont[i].id) {
                    that.number = i;
                    that.$refs.picker.open();
                  }

                } else  if( e.target.className==="timetq") {
                    if (e.target.id === that.ringData[key].cont[i].id) {
                    that.numberTimes = i;
                    that.$refs.pickerTime.open();
                  }
                }

              }
          }
        },
      handleConfirm:function(vlaue){
        var that=this;
        for(var key in that.ringData) {
            for (var i = 0; i < that.ringData[key].cont.length; i++) {
              if(that.ringData[key].cont[i].type==='times'){
                that.ringData[key].cont[that.number].sing=vlaue;
              }
            }

        }
      },
      handleConfirmTime:function(vlaue){
        var that=this;
        var vlaueText;
        var d = new Date(vlaue);
        var tiems=d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        console.log(tiems);
        function getRTime() {
          console.log(tiems);
          var EndTime = new Date(tiems); //截止时间 前端路上 http://www.51xuediannao.com/qd63/
          var NowTime = new Date();
          var t = EndTime.getTime() - NowTime.getTime();/*获取截止日期至今日日期的毫秒*/

          var d = Math.floor(t / 1000/ 60 / 60 / 24);
          var h = Math.floor(t / 1000 / 60 / 60 % 24);
          var m = Math.floor(t / 1000 / 60 % 60);
          var s = Math.floor(t / 1000 % 60);
          if(d>0){
            vlaueText='提前'+d+'天'
          }else if(d===0&&h>0){
            vlaueText='提前'+h+'小时'
          }else if(d===0&&h===0&&m>0){
            vlaueText='提前'+m+'分钟'
          }else {
            vlaueText='输入错误'
          }
        }
        getRTime();


        for(var key in that.ringData) {
          for (var i = 0; i < that.ringData[key].cont.length; i++) {
            if(that.ringData[key].cont[i].type==='timetq'){
              that.ringData[key].cont[that.numberTimes].sing=vlaueText;
            }
          }
        }
      }
    }

  }

</script>

<style scoped>
  .ringcont{
    width: 90%;
    margin: 0 auto;
  }
  .ringcontNin{
    width: 100%;
  }
  h5{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20px;
    font-size: 12px;
    color: #afb7c2;
  }
  .ringcontNin li{
    width:100%;
    height: 65px;
    line-height: 65px;
    vertical-align: middle;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  .routlink{
    text-decoration: none;
    width: 100%;
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  p{
    display: inline-block;
  }
  .imgleft img{
    margin-right: 15px;
    vertical-align: middle;
  }
  .imgleft p{
    font-size: 16px;
    color: #212121;
  }
  .imgright img{
    vertical-align: middle;
    margin-left: 15px;
  }
  .imgright p{
    font-size: 14px;
    color: #afb7c2;
  }

</style>
