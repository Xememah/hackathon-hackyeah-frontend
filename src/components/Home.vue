<template>
  <div class="row no-margin">
    
    <in-progress message="Fetching your current location" :display="inp_display"></in-progress>
    <bar-icon v-show="bar_display" v-on:sidebar-open="toggleSidebar"></bar-icon>
    <side-bar v-show="side_display" class="col-md-4 col-sm-4 col-xs-12 no-margin"  v-on:sidebar-close="toggleSidebar" v-on:snap-to-and-open="snapToAndOpen"></side-bar>
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
      this.inp_display = data
    },
    toggleSidebar: function() {
      this.bar_display = !this.bar_display
      this.side_display = !this.side_display
      this.$store.bus.$emit('refresh-map');
    },
    snapToAndOpen: function(e) {
      this.$store.bus.$emit('snap-to-and-open', e);
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
