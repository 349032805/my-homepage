<template>
  <div id="app">
      <transition name='router-fade' mode='out-in'>
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
     mounted:function(){
        createSnow('', 10);
      },
}
</script>

<style lang="less">
@import 'style/common';
@import 'style/rest';
@import 'style/app';
</style>
