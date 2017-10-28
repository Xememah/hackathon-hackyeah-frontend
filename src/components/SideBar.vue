<template>
  <div class="side-bar" v-show="display">
    <div class="action-hide" @click="toggleSidebar">
      <img src="../assets/angle-double-line-white.svg" class="icon"/>Hide the sidebar
    </div>
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
</style>

<script>
export default {
  props: {
    display: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {}
  },
  methods: {
    toggleSidebar: function () {
      this.display = !this.display
      this.$emit('google-maps-resize')
      google.maps.event.trigger(map, "resize");
    }
  }
};
</script>
