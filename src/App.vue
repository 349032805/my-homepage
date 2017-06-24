<template>
  <div id="app">
  	<div>hello world!</div>
      <transition >
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import 'style/common';
@import 'style/rest';
</style>
