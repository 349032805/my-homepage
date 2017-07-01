<template>
  <div id="app">
  	<div class="head-ban">
  		<div class="ban-content">
                  <ul class="clearfix">
                     <li>
                        <img src="./images/group2.png" class="group-icon" title="访客人数">
                     </li>
                       <li>
                        <img src="./images/group2.png" class="group-icon">
                     </li>
                  </ul>
            </div>
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
