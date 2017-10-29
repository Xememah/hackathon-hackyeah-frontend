<template>
	<div class="modal">
    <div class="row">
      <div class="col-sm-6 col-md-6">
        <h1>Hey, welcome back!</h1>
        <input type="text" placeholder="E-MAIL"/>
        <input type="password" placeholder="PASSWORD"/>
        <button class="login">Log in</button>
      </div>
      <div class="col-sm-6 col-md-6">
        <h1>Join <span class="accent">FOODAWAY</span>!</h1>
        <input type="text" placeholder="E-MAIL"/>
        <input type="text" placeholder="NAME"/>
        <input type="password" placeholder="PASSWORD"/>
        <button>Register</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
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