<template>
	<div class="side-bar">
    <div class="action-hide">Hide this panel</div>
	</div>
</template>

<style>
	.side-bar {
    height: calc(100vh - 56px);
    width: 100%;
    background-color: #333;
    color: #f5f5f5;
	}
  .action-hide {
    background-color: #222;
    color: #777;
    padding: 20px;
    cursor: pointer;
    transition: all .3s ease;
  }
    .action-hide:hover {
      background-color: #3f3f3f;
      color: #fff;
    }
</style>