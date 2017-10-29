<template>
  <div class="row no-margin">
    
    <in-progress message="Fetching your current location" :display="inp_display"></in-progress>
    
    <transition name="fade">
      <side-bar class="col-md-3 col-sm-4 col-xs no-margin" v-on:google-maps-resize="resizeMaps"></side-bar>
    </transition>
    
    <interactive-map class="col-md col-sm col-xs no-margin" v-on:in-progress-dialog="dialogState"></interactive-map>
  
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      inp_display: false
    }
  },
  methods: {
    dialogState: function(data) {
      console.log(data)
      this.inp_display = data
    },
    resizeMaps: function() {
      console.log('resizeMaps called')
    }
  }
}
</script>

<style>
  .no-margin {
    margin: 0;
    padding: 0;
  }
</style>
