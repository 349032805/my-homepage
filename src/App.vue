<template>
  <div id="app">
  	<div class="head-ban">
  		<div class="ban-content">
          <ul class="clearfix">
            <li><span style="position:relative;top:1px;">关于我</span></li>
             <li>
               <div class="tooltip">
                <img src="./images/group.png" class="group-icon">
                <span>10001</span>
                <span class="tooltiptext">访问人数</span>
               </div>
             </li>
               <li>
                <div class="tooltip">
                  <img src="./images/browse.png" class="group-icon">
                  <span>20001</span>
                  <span class="tooltiptext">浏览次数</span>
                </div>
             </li>
          </ul>
        </div>
  	</div>
      <transition name='router-fade' mode='out-in'>
        <router-view></router-view>
      </transition>

      <div class="thank">Express by Vue2.0  Nodejs(koa)</div>
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
