<template>
  <div id="app">
    <header>
      <div class="logo-banner"><span>{{ app_name }}</span></div>
      <span>{{ account }}</span>
    </header>
    <main>
      <div>
        <transition name="fade">
          <router-view></router-view>
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
      app_name: "NOT YET DECIDED",
      account: "Your account"
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
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
</style>
