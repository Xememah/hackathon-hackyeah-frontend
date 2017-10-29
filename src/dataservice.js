import HttpService from './httpservice.js'
import router from './router'
import Vue from 'vue'

var API_PATH = 'https://hy.maciekmm.net/';
var client = new HttpService();

var store = {
  bus: new Vue(),
  queue: {},
  data: {},
  fetching: {},

  getResource(key, endpoint) {
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
        client.get(endpoint).then((v) => {
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
  auth: {
    user: {
      authenticated: false,
      role: 0
    },
    login(context, creds, redirect) {
      context.$http.post(API_PATH + 'login/', creds).then((data) => {
          localStorage.setItem('jwt_token', data.body.token)
          this.user.authenticated = true

          if (redirect) {
            router.push({
              name: redirect
            })
          }
        },
        (data) => {
          context.error = data.err
        })
    },
    register(context, creds, redirect) {
      context.$http.post(API_PATH + 'register/', creds).then((data) => {
          localStorage.setItem('jwt_token', data.body.token)
          this.user.authenticated = true
        
          if (redirect) {
            router.push({
              name: redirect
            })
          }
        },
        (data) => {
          context.error = data.err
        })
    },
    logout() {
      localStorage.removeItem('jwt_token')
      this.user.authenticated = false
    },

    ifAdmin() {
      var jwt = localStorage.getItem('jwt_token')
      var decode = jwt_decode(jwt)
      var user = decode.User

      console.log(decode)

      if (user.role == 1) {
        return true
      } else return false
    },

    refreshToken(context) {
      console.log(localStorage.getItem('jwt_token'))
      context.$http.get(API_PATH+'token/', {
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

    role() {
      var jwt = localStorage.getItem('jwt_token')
      var decode = jwt_decode(jwt)
      var user = decode.User
      return user.role;
    },

    checkAuth() {
      var jwt = localStorage.getItem('jwt_token')
      if (jwt) {
        this.user.authenticated = true
      } else {
        this.user.authenticated = false
      }
    },

    getAuthHeader() {
      return {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
      }
    }
  }
}

export default {
  store,
  install(Vue, options) {
    Vue.prototype.$store = store;
  }
}
