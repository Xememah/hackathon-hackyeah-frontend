<template>
  <div class="row no-margin">
    <in-progress message="Fetching your current location" :display="inp_display"></in-progress>
    <side-bar class="col-md-3 col-sm-4 no-margin"></side-bar>
    <interactive-map class="col-md col-sm no-margin" v-on:in-progress-dialog="dialogState"></interactive-map>
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
