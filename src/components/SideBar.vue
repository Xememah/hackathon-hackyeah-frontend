<template>
  <div class="side-bar" v-show="display">
    <div class="action-hide" @click="toggleSidebar">
      <img src="../assets/angle-double-line-white.svg" class="icon"/>Hide the sidebar
    </div>

    <div class="offers-header">Available food nearby</div>
    <div class="offers-item" v-for="item in offers" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<style>
.icon {
  width: 13px;
  height: 13px;
  padding-right: 15px;
}
.side-bar {
  height: calc(100vh - 56px);
  width: 100%;
  background-color: #333;
  color: #f5f5f5;
  overflow-y: auto;
}
.side-bar-button {
  background-color: #333;
  width: 50px;
  height: 50px;
  position: fixed;
}
.action-hide {
  background-color: #222;
  color: #777;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.action-hide:hover {
  background-color: #3f3f3f;
  color: #fff;
}
.offers-header {
  padding: 20px;
  padding-bottom: 10px;
}
.offers-item {
  background-color: #cfcfcf;
  margin: 10px;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #333;
  font-weight: 600;
}
</style>

<script>
import DataService from '../dataservice.js'

export default {
  props: {
    display: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
      offers: {}
    }
  },
  mounted: function () {
    this.fetchOffers()
  },
  methods: {
    fetchOffers: function () {
      var dataService = new DataService()
      this.offers = dataService.getOffers().then((s) => {
        this.offers = JSON.parse(s)
        console.log(this.offers)
        this.populateOffers()
      })
    },
    toggleSidebar: function () {
      this.display = !this.display
      this.$emit('google-maps-resize')
      google.maps.event.trigger(map, "resize");
    }
  }
};
</script>
