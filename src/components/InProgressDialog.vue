<template>
  <transition name="fade">
    <div id="in-progress" v-show="display">
      <div class="text center-xs middle-xs">{{ message }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    message: {
      default: "Default message",
      type: String
    },
    display: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#in-progress {
  background-color: #000;
  opacity: 0.9;
  width: 100%;
  position: absolute;
  z-index: 101;
  bottom: 0;
  padding-top: 15px;
  padding-bottom: 15px;
}
  #in-progress .text {
    color: #cfcfcf;
    font-size: 18px;
  }
</style>
