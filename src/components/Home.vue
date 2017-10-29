<template>
  <div class="row no-margin">
    
    <in-progress message="Fetching your current location" :display="inp_display"></in-progress>
    <bar-icon v-show="bar_display" v-on:sidebar-open="toggleSidebar"></bar-icon>
    <side-bar v-show="side_display" class="col-md-4 col-sm-4 col-xs no-margin"  v-on:sidebar-close="toggleSidebar"></side-bar>
    <interactive-map class="col-md col-sm col-xs no-margin" v-on:in-progress-dialog="dialogState"></interactive-map>
  
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      inp_display: false,
      bar_display: false,
      side_display: true
    }
  },
  methods: {
    dialogState: function(data) {
      console.log(data)
      this.inp_display = data
    },
    toggleSidebar: function() {
      console.log('toggleSidebar called')
      this.bar_display = !this.bar_display
      this.side_display = !this.side_display
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
