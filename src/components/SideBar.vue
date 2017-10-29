<template>
  <div class="side-bar" v-show="display">
    <div class="action-hide" @click="toggleSidebar">
      <img src="../assets/angle-double-line-white.svg" class="icon"/>Hide the sidebar
    </div>

    <div class="offers-header">Available food nearby</div>
    <div class="offers-item" v-for="item in offers" :key="item.id">
      <div class="row">
        <div class="col-xs-2" style="text-align: center; font-size: 24px;">{{ item.picture }}</div>
        <div class="col-xs">{{ item.title }}</div>
      </div>
      <div class="row">
        <div class="col-xs-2"></div>
        <div class="col-xs offers-item-desc">{{ item.description }}<br/>Expires on {{ item.expiration | formatDate }}</div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-xs-12 offers-item-pickup">Pick this item up between {{ item.pickup_start | formatDate }} and {{ item.pickup_end | formatDate }}</div>
      </div>
    </div>
  </div>
</template>

<style>
hr {
  margin: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
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
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #333;
  font-weight: 500;
  font-size: 18px;
}
.offers-item-desc {
  font-size: 14px;
  font-weight: 400;
}
.offers-item-pickup {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
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
