import HttpService from './httpservice.js'
import router from './router'
import Vue from 'vue'
var jwt_decode = require('jwt-decode')

var API_PATH = 'https://hy.maciekmm.net/';
var client = new HttpService();

var store = {
  bus: new Vue(),
  queue: {},
  data: {},
  fetching: {},

  getResource(key, endpoint, token) {
    return new Promise((resolve, reject) => {
      if (this.fetching[key]) {
        if (!this.queue[key]) {
          this.queue[key] = [];
        }
        this.queue[key].push({
          resolve: resolve,
          reject: reject
        });
        return;
      }

      if (!this.data[key]) {
        this.fetching[key] = true
        client.get(endpoint, token).then((v) => {
          this.data[key] = JSON.parse(v)
          this.fetching[key] = false
          resolve(this.data[key])
          for (let waiting of this.queue[key]) {
            waiting.resolve(this.data[key])
          }
          this.queue[key] = []
        }).catch((v) => {
          reject(v)
          this.fetching[key] = false
          for (let waiting of this.queue[key]) {
            waiting.reject(v)
          }
          this.queue[key] = []
        })
      } else {
        resolve(this.data[key])
      }
    })
  },
  getOffers() {
    return this.getResource('offers', API_PATH + 'offers/')
  },
  newOffer(context, creds, redirect) {
    // console.log(JSON.stringify(creds))
    client.post(API_PATH + 'offers/', creds, this.auth.getAuthHeader()).then((data) => {
      console.log(data)
      if (redirect) {
        router.push({
          name: redirect
        })
      }
    }, (data) => {
      console.log(data)
    })
  },
  getUserOffers(id, token) {
    return this.getResource('userOffers', API_PATH+'offers/user/'+id+'/', token)
  },
  auth: {
    login(context, creds, redirect) {
      client.post(API_PATH + 'accounts/login/', creds).then((data) => {
        localStorage.setItem('jwt_token', JSON.parse(data).token)

        if (redirect) {
          router.push({
            name: redirect
          })
        }
      }, (fail) => {
        console.log(fail)
      })
    },
    register(context, creds, redirect) {
      client.post(API_PATH + 'accounts/register/', creds).then((data) => {
        localStorage.setItem('jwt_token', JSON.parse(data).token)

        if (redirect) {
          router.push({
            name: redirect
          })
        }
      }, (data) => {
        console.log(data)
      })
    },
    logout() {
      localStorage.removeItem('jwt_token')
      router.push({
        name: 'home',
        query: {
          t: + new Date()
        }
      })
      this.$vm.force
    },
    refreshToken(context) {
      console.log(localStorage.getItem('jwt_token'))
      context.$http.get(API_PATH + 'token/', {
        headers: auth.getAuthHeader()
      }).then((data) => {
          localStorage.setItem('jwt_token', data.body.token)
          console.log('set')
          console.log(localStorage.getItem('jwt_token'))
        },
        (data) => {
          console.log(data)
        })
    },
    getUser() {
      let jwt = localStorage.getItem("jwt_token");
      if(jwt) {
        return jwt_decode(jwt).User
      }
      return null
    },
    getAuthHeader() {
      return 'Bearer ' + localStorage.getItem('jwt_token')
    }
  }
}

export default {
  store,
  install(Vue, options) {
    Vue.prototype.$store = store;
  }
}
