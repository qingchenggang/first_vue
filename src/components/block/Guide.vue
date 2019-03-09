<template>
	<div class='container'>
		<span class="pointer" @click="toggle">跳过</span>

    <transition :name="animate[0]">
      <div class="wrapImg" v-if="type[index]==='remember'">
        <img :src="bgnurl[type[index]]" height="1220" width="654" alt="">
        <span>记住自己和亲友的生日</span>
        <block-action :type="type[index]"></block-action>
        <circle-three :index="index" class="circle"></circle-three>
      </div>
    </transition>

    <transition :name="animate[1]">
      <div class="wrapImg" v-if="type[index]==='speak'">
        <img :src="bgnurl[type[index]]" height="1220" width="654" alt="">
        <span>说出要记录的事情，自动识别</span>
        <block-action :type="type[index]"></block-action>
        <circle-three :index="index" class="circle"></circle-three>
      </div>
    </transition>

    <transition :name="animate[2]">
      <div class="wrapImg" v-if="type[index]==='cloud'">
        <img :src="bgnurl[type[index]]" height="1220" width="654" alt="">
        <span>云备份，数据永不丢失</span>
        <block-action :type="type[index]"></block-action>
        <circle-three :index="index" class="circle"></circle-three>
      </div>
    </transition>

		<div id="backWhite"></div>
	</div>
</template>
<script>
  import CircleThree from "./CircleThree"
  import BlockAction from "./BlockAction"
  import remember from '@/assets/block/bg_yindao_birthday@2x.png'
  import speak from '@/assets/block/bg_yindao_speak@2x.png'
  import cloud from '@/assets/block/bg_yindao_cloud_backup@2x.png'
export default {
  name: 'guide',
  data () {
  	return {
      index: 0,
      animate: ['out','in','in'],
      type: ['remember','speak','cloud'],
      bgnurl: {
          remember,speak,cloud
      }
  	}
  },
  components: {
    CircleThree,
    BlockAction
  },
  methods: {
    toggle () {
      if(this.index!==2){
          this.index+=1;
      }else if (this.index ==2 ) {
          this.$router.push({path:'/home'})
      }
    }
  },
  mounted () {
    document.onkeydown = function (e) {
        for(var key in this.animate) {
          this.animate[key] = 'in'
        }
        if(e.keyCode === 39) {
          if(this.index!==2){

            this.index+=1;
          }
        }else if(e.keyCode === 37) {
          if(this.index!==0){

            this.index-=1;
          }
        }
    }.bind(this)
  }
}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	.container {
		width: 100%;
		height: 100vh;
		font-size: 10px;
		/*background-color: #FF6868;*/
		background: url('../../assets//block/bg_yindao_gradient@2x.png');
		position: relative;
	}
	.wrapImg {
		position: absolute;
		margin: auto;
		left:0;right:0;top:0;bottom:0;
		z-index: 10;
		width: 290px;
		height: 573px;
	}
	.wrapImg>img {
		border-radius: 5px;
		width: 100%;
	}
	.wrapImg span {
		font-family: "PingFangSC-Regular";
		font-size: 17px;
		color: #212121;
		position: absolute;
		z-index: 20;
		top: 350px;
		/*left: 120px;*/
    left: 0;
    right: 0;
    margin: 0 auto;
	}

	#backWhite {
		background-color: white;
		width: 323px;
		height: 523px;
		position: absolute;
		margin: auto;
		left:0;right:0;top:0;bottom:0;
		z-index: 0
		/*-webkit-border-raduis: 20px;*/
	}
	.pointer {
		position: absolute;
		right: 20px;
		font-size: 15px;
		font-family: 'PingFangSC-Regular';
		top: 10px;
		cursor: pointer;
		color: white;
	}
  .circle {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .out-enter,.out-leave-active {
    left: -1000px;
  }
  .out-enter-active,.out-leave-active {
    transition: all 1s;
  }
  .in-enter,.in-leave-active {
    transform: scale(0);
    z-index: -1;
  }
  .in-enter-active,.in-leave-active {
    transition: all .5s .2s;
  }
</style>
