<template>
  <div class="modal">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-xs-12">
        <form @submit.prevent.stop="newOffer">
          <h1>Add a new offer</h1>
          <input type="text" v-model="form.title" placeholder="ITEM NAME / TITLE"/>
          <input type="text" v-model="form.description" placeholder="DESCRIPTION: QUANTITY AND MORE"/>
          <input type="text" v-model="form.location" placeholder="PICKUP ADDRESS"/>
          <div class="emoji-selector">Your item's picture: <select v-model="form.picture" id="emojipicture"/></select></div>
          <button type="submit" class="login">Add a new offer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        location: "",
        picture: "🍅",
        expiration: 1509601875,
        pickup_start: 1509246085,
        longitude: 19.9449799,
        latitude: 50.0646501,
        pickup_end: 1509560020
      }
    }
  },
  activated() {
    if(!this.$store.auth.getUser()) {
      router.push({
        name: 'account'
      })
    }
  },
  mounted() {
    this.makeEmojis()
  },
  methods: {
    makeEmojis: function() {
      var select = document.getElementById('emojipicture')
      var opt;
      var range = [
        [127813, 127854]
      ];
      for (var i = 0; i < range.length; i++) {
        var range = range[i];
        for (var x = range[0]; x < range[1]; x++) {

          opt = document.createElement('option');
          opt.value = x;
          opt.innerHTML = "&#" + x + ";";
          select.appendChild(opt);
        }
      }
    },
    newOffer: function() {
      var t = 'Kraków ' + this.form.location + ', Polska';
      var geocoder = new google.maps.Geocoder();
      var b = this.map;
      geocoder.geocode({ 'address': t }, (results, status) => {
        if (status === 'OK') {
          var res = results[0].geometry.location
          console.log(res)        
        }
      })
      console.log(this.form)
      this.$store.newOffer(this, JSON.stringify(this.form), 'home')
    }
  }
}
</script>

<style>
.emoji-selector {
  margin-top: 20px;
}
</style>