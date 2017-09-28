// entry
import '@/common/css'
import '@/common/scripts'
import '@/common/permission' // 权限

import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import App from './App'

import EventBus from '@/common/bus'

import * as filters from './filters' // 全局filter
import '@/components/Icon' // icon
import '@/mock'

// lib
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

Vue.prototype.$bus = EventBus

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

if (process.env.NODE_ENV === 'development') {
  console.info('[当前环境] 开发环境')
  Vue.config.devtools = false
  Vue.config.productionTip = false
}

if (process.env.NODE_ENV === 'production') {
  console.info('[当前环境] 生产环境')
  Vue.config.devtools = false
}
