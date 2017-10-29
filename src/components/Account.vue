<template>
	<div class="modal">
    <div class="row">
      <div class="col-sm-6 col-md-6">
        <form @submit="login">
          <h1>Hey, welcome back!</h1>
          <input type="text" v-model="login_credentials.email" placeholder="E-MAIL"/>
          <input type="password" v-model="login_credentials.password" placeholder="PASSWORD"/>
          <button class="login" @click="login">Log in</button>
        </form>
      </div>
      <div class="col-sm-6 col-md-6">
        <form @submit="register">
          <h1>Join <span class="accent">FOODAWAY</span>!</h1>
          <input type="text" v-model="register_credentials.email" placeholder="E-MAIL"/>
          <input type="text" v-model="register_credentials.name" placeholder="NAME"/>
          <input type="password" v-model="register_credentials.password" placeholder="PASSWORD"/>
          <button @click="register">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login_credentials: {
        email: "",
        password: ""
      },
      register_credentials: {
        email: "",
        name: "",
        password: ""
      }
    }
  },
  methods: {
    register: function () {
      this.$store.auth.register(this, JSON.stringify(this.register_credentials), 'home')
    },
    login: function() {
      this.$store.auth.login(this, JSON.stringify(this.login_credentials), 'home')
    }
  }
}
</script>
