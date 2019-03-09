<template>
	<div class="wrap">
		<div class="fenlei">
			有生日的联系人
			<ul>
				<li class="perDetail" v-for="(info,index) in infos.know">
          <img @click="changeSrc" :src="circleSrc" alt="">
					{{info.name}}
					<span class="birthday">{{info.birth.replace(/\./g,'-')}}</span>
				</li>
			</ul>
		</div>

    <div class="fenlei" v-for="(info,le) in infos.letter">
      {{le}}
      <ul>
      <li class="perDetail" v-for="(info2,index) in info">
        <img @click="changeSrc" :src="circleSrc" alt="">
        {{info2}}
        <div class="ask">询问生日</div>
      </li>
    </ul>
    </div>

    <div class="import">
      <div>导入生日</div>
    </div>
	</div>
</template>
<script>
import pinyin from '../../../static/js/pinyin'
import circleSrc1 from '../../assets/block/icon_yindao_circle@2x.png'
import circleSrc2 from '../../assets/block/icon_yindao_gou@2x.png'
	export default {
		name: 'birth-detail',
		props: ['specific'],
		data () {
			return {
        circleSrc: circleSrc1,
				infos: {
            know: [],
            unknown: [],
            letter: {
//				        A: [], B: [], C: [], D: [],
//                E: [], F: [], G: [], H: [],
//                I: [], J: [], K: [], L: [],
//                M: [], N: [], O: [], P: [],
//                Q: [], R: [], S: [], T: [],
//                U: [], V: [], W: [], X: [],
//                Y: [], Z: []
            }
        }
			}
		},
		methods: {
		    update () {
          this.infos.letter = {};
          this.infos.know = {};
          this.infos.unknown = {};
          this.$http.get('../../../static/birth/birth.json').then(res=>{
            var data = JSON.parse(res.bodyText)
            if(this.specific !== 'all'){
              data = data.filter(info=>{
                return info.relative=== this.specific
              })
            }
            this.infos.know = data.filter(info=>{
              return info.birth!==''
            })
            this.infos.unknown = data.filter(info=>{
              return info.birth ===''
            })
            this.infos.unknown.sort(function(a,b){
              return pinyin.getCamelChars(a.name)[0] > pinyin.getCamelChars(b.name)[0]
            })

            for (var info of this.infos.unknown) {
              var letter = pinyin.getCamelChars(info.name)[0];
//              console.log(info.name)
              if(this.infos.letter[letter] === undefined){
                this.infos.letter[letter] = [];
              }
              this.infos.letter[letter].push(info.name);
            }
          })
        },
        changeSrc (e) {
		        var dom = e.target
		        dom.src = dom.src === require('../../assets/block/icon_yindao_circle@2x.png')
                ? require("../../assets/block/icon_yindao_gou@2x.png")
                : require('../../assets/block/icon_yindao_circle@2x.png')
//          dom.setAttribute('src',src)
        }
    },
		watch: {
		    specific () {
          this.update()
        }
    },
		beforeMount () {
      this.update();
		}
	}
</script>
<style scoped>
  .wrap {
    padding-bottom: 60px;
  }
	.fenlei {
		font-family: 'PingFang-SC-Medium';
		font-size: 13px;
		color: #afb7c2;
		text-align: left;
	}
  ul {
    padding: 0;
    margin-top: 20px;
  }
  li {
    list-style: none;
    margin-top: 20px;
    font-family: 'PingFang-SC-Regular';
    font-size: 15px;
    color: #2a2a2a;
    position: relative;
  }
  .perDetail {
    height: 30px;
    line-height: 30px;
  }
  .perDetail img {
    vertical-align: middle;
    margin-right: 10px;
  }
  .birthday {
    position: absolute;
    right: 18.5px;
    font-family: 'PingFang-SC-Regular';
    font-size: 15px;
    color: #afb7c2;
  }
  .ask {
    position: absolute;
    width: 69px;
    height: 29px;
    line-height: 30px;
    border: 1px solid #e93a2a;
    border-radius: 20px;
    color: #e93a3a;
    font-size: 12px;
    font-family: 'PingFangSC-Light';
    text-align: center;
    right: 18.5px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .import {
    width: 100%;
    position: fixed;
    z-index: 10;
    bottom: 0px;
    background-color: white;
    padding-bottom: 10px;
  }
  .import div {
    width: 149px;
    height: 43px;
    line-height: 44px;
    border: 1px solid #e93a2a;
    border-radius: 20px;
    color: #e93a3a;
    font-size: 12px;
    font-family: 'PingFangSC-Light';
    text-align: center;
    margin: 0 auto;
  }
</style>
