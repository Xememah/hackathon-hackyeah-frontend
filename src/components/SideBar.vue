<template>
  <transition name="fade">
    <div class="side-bar">
      <div class="action-hide" @click="toggleSidebar">
        <img src="../assets/angle-double-line-white.svg" class="icon"/>Hide the sidebar
      </div>

      <div class="offers-header">Available food nearby</div>
      <info v-for="item in offers" :key="item.id" :item="item"></info>
    </div>
  </transition>
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
</style>

<script>
import DataService from '../dataservice.js'
import Info from './Info.vue'

export default {
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
      this.offers = this.$store.getOffers().then((s) => {
        this.offers = s
      })
    },
    toggleSidebar: function () {
      this.$emit('sidebar-close')
    }
  }
};
</script>
