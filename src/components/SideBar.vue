<template>
  <transition name="fade">
    <div class="side-bar" v-show="display">
      <div class="action-hide" @click="display = false">Hide the sidebar</div>
    </div>
    <div class="side-bar-button" v-show="display == false">text</div>
  </transition>
</template>

<style>
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
  }
};
</script>
