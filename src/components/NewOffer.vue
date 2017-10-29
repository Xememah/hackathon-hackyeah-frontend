<template>
  <div class="modal">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <form @submit="newOffer">
          <h1>Add a new offer</h1>
          <input type="text" placeholder="ITEM NAME"/>
          <input type="password"  placeholder="DESCRIPTION: QUANTITY"/>
          <input type="text" placeholder="PICKUP ADDRESS"/>
          <button class="login" @click="login">Log in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    newOffer: function() {

    }
  }
}
</script>

<style>
</style>