// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui';
import vueresource from 'vue-resource'
//  vue-material 组件
import VueMaterial from 'vue-material'
import VueInputCode from 'vue-input-code'
// element-ui 组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'vue-material/dist/vue-material.css'
import 'mint-ui/lib/style.css';
//邱炳铭
import 'mint-ui/lib/style.css'
//赵兴云
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'zh', color: '#E83535'}) //locale can be 'zh' or 'en'

import '../node_modules/vue-event-calendar/dist/style.css'


Vue.component('VueInputCode', VueInputCode)
Vue.config.productionTip = false
Vue.use(vueresource)
Vue.use(VueMaterial)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.config.productionTip = false
//注册vue-material
Vue.material.registerTheme('whiteForm', {
  primary: 'white',
  accent: 'deep-orange',
  warn: 'red',
  background: 'white'
})
//青城刚
Vue.http.interceptors.push(function (request, next) {
  // ...
  // 请求发送前的处理逻辑
  // ...
  console.log('请求前')
  this.isShow = true
  //  调用者是谁 - VueComponent
  // console.log(this.fruit)
  next((response) => {
    // ...
    // 请求发送后的处理逻辑
    // ...
    // 根据请求的状态，response参数会返回给successCallback或errorCallback
    this.isShow = false
    return response
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
