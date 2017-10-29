<template>
  <transition name="fade">
    <div class="bar-icon" @click="toggleSidebar"><img src="../assets/angle-double-line-white-right.svg" class="icon-2"/></div>
  </transition>
</template>

<script>
export default {
  methods: {
    toggleSidebar: function () {
      this.$emit('sidebar-open')
    }
  }
};
</script>

<style>
.icon-2 {
  width: 13px;
  height: 13px;
}
.bar-icon {
  position: absolute;
  top: 51;
  left: 0;
  padding: 20px;
  z-index: 99999999;
  background-color: #222;
  color: #777;
  transition: all 0.3s ease;
  cursor: pointer;
}
.bar-icon:hover {
  background-color: #3f3f3f;
  color: #fff;
}
</style>