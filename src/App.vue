<template>
  <div id="app">
    <header>
      <div> 
        <router-link :to="{ name: 'home' }" class="logo-banner">
          <span>{{ app_name }}</span>
        </router-link>
        <router-link :to="{ name: 'account' }" class="account-banner">
          <span>{{ user().name }}</span>
        </router-link>
        <a class="account-banner" href="#/logout" @click.prevent="logout" v-if="user().ID"><span>Logout</span></a>
      </div>
      <div class="header-login-menu">
        <router-link class="account-banner" :to="{ name: 'offers-new'}">
          <span>{{ post_offer }}</span>
        </router-link>
      </div>
    </header>
    <main>
      <div>
        <transition name="fade">
          <keep-alive>
           <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      app_name: "FOODAWAY",
      account: "Your account",
      post_offer: "+ New offer",
    }
  },
  methods: {
    accountModal: function () {
      alert("done!")
    },
    user: function() {
      let us = this.$store.auth.getUser()
      if(us) {
        return us;
      }
      return {name: "Sign in"};
    },
    logout: function() {
      this.$store.auth.logout()
    }
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
}

header a, header div {
  display: inline-block;
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  margin: 0;
  background-color: #f0f0f0;  
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  margin: 0 auto;
  height: 56px;
  display: flex;
  font-weight: 700;
  background-color: #fff;
  color: #333;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .05em;
  font-weight: 500;
  box-sizing: border-box;
  padding-top: 18px;
  padding-left: 20px;
  padding-right: 20px;
}
header .logo-banner {
  font-family: 'Roboto', sans-serif;
  background-color: #38dd0b;
  color: #fff;
  text-transform: uppercase;
}
header .logo-banner span {
  letter-spacing: 0.1em;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 700;
} 
header .account-banner {
  cursor: pointer;  
  transition: all 0.3s ease;
}
header .account-banner:hover {
  background-color: #f3f3f3;
}
.modal {
  margin: 50px auto;
  max-width: 1000px;
  text-align: center;
}
input[type=text], input[type=password] {
  background-color: #fff;
  border: 1px solid #fcfcfc;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 15x;
  width: 70%;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
button {
  cursor: pointer;
  width: 70%;
  background-color: #38dd0b;
  padding: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  border: none;
  box-sizing: border-box;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
}
button:hover {
  background-color: #2ba80a;
}
button.login {
  background-color: #777;
}
button.login:hover {
  background-color: #666;
}
.accent {
  color: #38dd0b;
}
</style>
