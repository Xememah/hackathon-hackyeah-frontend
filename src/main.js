// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Map from './components/Map'
import SideBar from './components/SideBar'
import SideBarClosed from './components/SideBarClosed'
import InProgressDialog from './components/InProgressDialog'
import router from './router'
import Info from './components/Info'
import Store from './dataservice.js'

Vue.config.productionTip = false

Vue.component('interactive-map', Map)
Vue.component('side-bar', SideBar)
Vue.component('bar-icon', SideBarClosed)
Vue.component('in-progress', InProgressDialog)
Vue.component('info', Info)

Vue.filter('formatDate', function (value) {
  function pad(n) {
      return (n < 10) ? ("0" + n) : n;
  }

  if (value) {
    let d = new Date(value * 1000)
    return pad(d.getDate())+'.'+pad(d.getMonth())+'.'+d.getFullYear()+' '+pad(d.getHours()) +':'+pad(d.getMinutes())
  }
})

Vue.use(Store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
