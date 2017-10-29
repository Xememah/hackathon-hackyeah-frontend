<template>
  <div id="app">
    <header>
      
      <router-link :to="{ name: 'home' }" class="logo-banner">
        <span>{{ app_name }}</span>
      </router-link>

      <router-link :to="{ name: 'account' }" class="account-banner" style="color: inherit">
        <span>{{ account }}</span>
      </router-link>

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
      account: "Your account"
    }
  },
  methods: {
    accountModal: function () {
      alert("done!")
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

a {
  text-decoration: none;
}

body {
  margin: 0;
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
</style>
