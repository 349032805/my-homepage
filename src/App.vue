<template>
  <div id="app">
  	<div class="head-ban">
  		<a href="/test" target="_blank">aaa</a>
  	</div>
      <transition name='router-fade' mode='out-in'>
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
     mounted:function(){
     	createSnow('',15)
      },
}
</script>

<style lang="less">
@import 'common/css/common';
@import 'common/css/rest';
@import 'common/css/app';
</style>
