import Vue from 'vue'
import Router from 'vue-router'
import Hello1 from './../components/Hello1.vue'
import createWarn from '../components/createWarn/createWarn.vue'
import index from '../components/createWarn/index.vue'
import createContent from '../components/createWarn/createContent.vue'
import createTitle from '../components/createWarn/createTitle.vue'
import createAheadTime from '../components/createWarn/createAheadTime.vue'
import createBall from '../components/createWarn/createBall.vue'
import createRemrk from '../components/createWarn/createRemrk.vue'
import keyword1 from '../components/createWarn/keyword.vue'
//陈思静
import home from '@/components/home/home'
import part from '@/components/home/part'
import smallPart from '@/components/home/smallPart'
import search from '@/components/home/search'
import keyword from '@/components/home/keyword'
import personal from '@/components/home/personal'
import login from '@/components/login/login'
import sigin from '@/components/login/sigin'
import mycode from '@/components/login/mycode'
import pwd from '@/components/login/pwd'
import artical from '@/components/login/artical'
// import popOver from '@/components/popOver/popOver'
//邱炳铭
import bgimg from '@/components/selectBg'
import greetingCard from '@/components/greetingCard'
import generateCard from '@/components/generateCard'
import message from '@/components/message'
import greTitle from '@/components/greTitle'
import remindRing from '@/components/remindRing'
import ringBell from '@/components/ringBell'
import loading from '@/components/loading'

import Detail1 from '@/components/detail/detail'
//青城刚
import Hello from '@/components/Hello'
import day2 from '@/components/day2'
import day1 from '@/components/day1'
import holiday from '@/components/holiday'
import content from '@/components/content'
import App from '@/App'
import jingxuan from '@/components/jingxuan'
import detail from '@/components/detail'
import fenxiang from '@/components/fenxiang'
import more from '@/components/more'
//胡钰坪
import myphon from '@/components/myphon'
import Verification from '@/components/Verification'
import Verificationerror from '@/components/Verificationerror'
import Toresend from '@/components/Toresend'
import myacount from '@/components/myacount'

import Guide from '@/components/block/Guide'
import Hello2 from '@/components/Hello2'
import Birth from '@/components/block/Birth'

//赵兴云
import calendar from '@/components/calendar'
import calendar_1 from '@/components/calendar_1'
import Hello3 from '@/components/Hello3'
import rili from '@/components/rili'
Vue.use(Router)
// Vue.use(vueresource)
// 返回
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello2',
    //   component: Hello2
    // },
    {
      path: '',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/birth',
      name: 'Birth',
      component: Birth
    },
    {
      path: '/Hello1',
      name: 'Hello1',
      component: Hello1,
      children: [
        {
          path: '/home',
          component: home
        },
        {
          path: '/createWarn',
          component: createWarn,
          children: [
            {
              path: '',
              component: createContent
            },

          ]
        },
        {
          path: '/createTitle',
          component: createTitle
        },
        {
          path: '/createAheadTime',
          component: createAheadTime
        },
        {
          path: '/createBall',
          component: createBall
        },
        {
          path: '/createRemrk',
          component: createRemrk
        },
      ]

    },
    {
      path: '/keyword',
      name: 'keyword',
      component: keyword
    },
    {
      path: '/part',
      name: 'part',
      component: part
    },
    {
      path: '/smallPart',
      name: 'smallPart',
      component: smallPart
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/keyword',
      name: 'keyword',
      component: keyword1
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/sigin',
      name: 'sigin',
      component: sigin,
    },
    {
      path: '/mycode',
      name: 'mycode',
      component: mycode,
    },
    {
      path: '/pwd',
      name: 'pwd',
      component: pwd,
    },
    {
      path: '/artical',
      name: 'artical',
      component: artical,
    },
     {
      path: '/greTitle',
      name: 'greTitle',
      component: greTitle
    },{
      path: '/selectBg',
      name: 'bgimg',
      component: bgimg
    },
    {
      path: '/greetingCard',
      name: 'greetingCard',
      component: greetingCard
    },
    {
      path: '/generateCard',
      name: 'generateCard',
      component: generateCard
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/remindRing',
      name: 'remindRing',
      component: remindRing
    },
    {
      path: '/ringBell',
      name: 'ringBell',
      component: ringBell
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/detail1',
      name: '/detail1',
      component: Detail1,
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello,
      children:[
        {
          path: '/jingxuan',
          name: 'jingxuan',
          component: jingxuan
        },

        {
          path: '/holiday',
          name: 'holiday',
          component: holiday
        },
        {
          path: '/day2',
          name: 'day2',
          component: day2
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/day1',
      name: 'day1',
      component: day1
    },
    {
      path: '/fenxiang',
      name: 'fenxiang',
      component: fenxiang
    },
    {
      path: '/more',
      name: 'more',
      component: more
    },
    {
      //path:'/myphon',
      //name:'myphon',
      //component:myphon

      //path:'/Verification',
      //name:'Verification',
      //component:Verification

      //path:'/Verificationerror',
      //name:'Verificationerror',
      //component:Verificationerror

      path:'/Toresend',
      name:'Toresend',
      component:Toresend
    },
    {
      path:'/myphon',
      name:'myphon',
      component:myphon
    },
    {
      path:'/Verification',
      name:'Verification',
      component:Verification

    },
    {
      path:'/Verificationerror',
      name:'Verificationerror',
      component:Verificationerror

    },{
      path:'/myacount',
      name: 'myacount',
      component: myacount
    },
    {
      path:'/calendar',
      name: 'calendar',
      component: calendar
    },
    {
      path:'/Hello3',
      name: 'Hello3',
      component: Hello3
    },
    {
      path:'/rili',
      name: 'rili',
      component: rili
    },
    {
      path:'/calendar_1',
      name: 'calendar_1',
      component: calendar_1
    }


  ]
})
