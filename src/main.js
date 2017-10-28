// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Map from './components/Map'
import SideBar from './components/SideBar'
import router from './router'

Vue.config.productionTip = false
Vue.component('interactive-map', Map)
Vue.component('side-bar', SideBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
