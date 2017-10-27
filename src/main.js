import 'babel-polyfill'  // 对ES6一些api，比如Promise进行转义
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'  // 解决移动端点击300ms延迟的问题

import 'common/scss/index.scss'

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)  // h其实是一个createElement的方法
})
