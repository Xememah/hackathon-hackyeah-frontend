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

<style>
body {
  background-color: #f0f0f0;  
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