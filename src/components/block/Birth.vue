<template>
	<div>
		<header>
			<span class="arrow pointer" @click="window.history.go(-1)"><</span>
			<span>在您的通讯录中发现了<strong>{{length}}</strong>条生日</span>
      <span class="jump pointer">
        <router-link to="/guide">跳过</router-link>
        </span>
		</header>
		<ul>
			<li class="pointer" v-for="item in classify" @click="spec(item)">{{item}}</li>
		</ul>
		<birth-detail class="detail" :specific="specific"></birth-detail>
	</div>
</template>
<script>
//import birthdata from '../../../static/birth.json'
import BirthDetail from './BirthDetail'
import rel from "../../../static/birth/relative.json"
//var length = 0;
//for(var key in birthdata) {
//	length++;
//}
//console.log(rel)
export default {
	data () {
		return {
			length,
			specific: 'all',
			classify: ['全部','小学同学','朋友','大学同学','合作','客户','亲戚','第三方公司']
		}
	},
	components: {
		BirthDetail
	},
	methods: {
		spec (spec) {
			this.specific = rel[spec]
//      console.log(this.specific)
		}
	},
  mounted () {
	    this.$http.get('../../../static/birth/birth.json').then(res=>{
	        this.length = JSON.parse(res.bodyText).length;
      })
  }
}
</script>
<style scoped>
	header {
		position: relative;
		line-height: 20px;
	}
	header span {
		font-size: 15px;
		font-family: 'PingFangSC-Regular';
		color: #2a2a2a;
	}
	strong {
		color: #db0000;
		font-weight: normal;
	}
	.pointer {
		cursor: pointer;
	}
	.arrow {
		position: absolute;
		left:15px;
		font-size: 20px;
	}
	.jump {
		position: absolute;
		right: 15px;
	}
	ul {
		overflow-x: auto;
		overflow-y: hidden;
		width: 100%;
		height: 37px;
		border-top: 1px solid #f2f2f2;
		border-bottom: 1px solid #f2f2f2;
		padding: 0;
	}
	li {
		float: left;
		list-style: none;
		margin-left: 15px;
		font-family: 'PingFang-SC-Regular';
		font-size: 14px;
		/*color: #e83535;*/
		color: #2a2a2a;
		height: 37px;
		line-height: 37px;
	}
	.detail {
		width: calc(100% - 30px);
		margin: 0 auto;
	}
</style>
