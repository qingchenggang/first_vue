<template>
  <div>
    <div class="header">
      <img class="back" @click="goback" src="../../assets/images/左箭头.png" alt="">
      <span>铃声</span>
      <span>&nbsp;</span>
    </div>

    <div class="myMusic" v-for="(v,index) in audioList" @click="setMusic(index)">
      <img  class="now" src="./../../../static/images/createWarn/now.png" alt="">
      <audio class="audio" :src="v.musicSrc"></audio>
      <span>{{v.name}}</span>
      <img :src="v.src" @click.stop="audioPlayer(index)" alt="">
    </div>

  </div>
</template>
<script>
    export default {
        data() {
          return {
            audioList: [
              {id: '0', name: '生日快乐',src: './../../../static/images/createWarn/paly.png',
              musicSrc: './../../../static/audio/happybirthday.mp3'},
              {id: '1',name: '闪电',src: './../../../static/images/createWarn/paly.png',
                musicSrc: './../../../static/audio/shandian.mp3'},
              {id: '2',name: '我们漫步在',src: './../../../static/images/createWarn/paly.png'},
              {id: '3',name: '轻轻响起',src: './../../../static/images/createWarn/paly.png'},
              {id: '4',name: '布谷鸟叫你起床',src: './../../../static/images/createWarn/paly.png'},
              {id: '5',name: '起床啦',src: './../../../static/images/createWarn/paly.png'},
              {id: '6',name: '音乐美味',src: './../../../static/images/createWarn/paly.png'},
            ],
          }
        },
        methods: {
          goback() {
            this.$router.goBack()
          },
          audioPlayer(obj) {
            var div = document.getElementsByClassName('now')
            var audio = document.getElementsByTagName('audio')
            for( var i = 0 ; i < div.length ; i++) {
              audio[i].pause()
              div[i].style.display = 'none'
            }
            var index = this.$data.audioList[obj].id
            audio[index].play()
            div[index].style.display = 'block'
          },
          setMusic(obj) {
            var value = this.$data.audioList[obj].name
            console.log(value)
//            this.$router.push({path:"./createWarn",query: { data3: value}})
            window.localStorage.music = value
            window.dispatchEvent(evt);
            window.history.go(-1)
          }
        }
    }
</script>
<style scoped>
  .now {
    display: none;
  }
  .myMusic .now {
    float: left;
    /*vertical-align: middle;*/
    margin-left: 15px;
  }
  .myMusic {
    width: 375px;
    height: 30px;
    margin-top: 30px;
    line-height: 30px;
    /*vertical-align: middle;*/
    position: relative;
  }
  .myMusic span {
    float: left;
    /*margin-left: 15px;*/
    position: absolute;
    left: 45px;
  }
  .myMusic img {

    float: right;
    vertical-align: middle;
    margin-right: 15px;
    position: relative;
    top: 5.5px;
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
    right: 50px;
  }
</style>
