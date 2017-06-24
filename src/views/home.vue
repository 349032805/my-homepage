<template>
  <div class="home">
 	<div class="poetry">
            <p>生活不止眼前的苟且</p>
            <p>还有诗</p>
            <p>和远方的田野</p>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
     export default {
      data() {
          return {
          }
        },
      mounted:function(){
          setTimeout(()=>{
             this.$router.push({name:'blogs'});
          },3000)
      },
    };
</script>

<style lang="less" scoped>
  .home {
      .poetry{
        font-size: 16px;
        color: #666;
        line-height:  34px;
        width: 400px;
        height: 400px;
        text-align: center;
        position: fixed;
        top:  0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
  }
</style>
