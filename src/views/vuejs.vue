<template>
  <div>
 	<column></column>
  </div>
</template>

<script type="text/ecmascript-6">
    import column from '../components/column';
     export default {
      data() {
          return {
          }
        },
      created() {
          console.log("---------create");
       },
      methods: {
          
      } ,
      components: {
        column
      }
    };
</script>

<style lang="less" scoped>
	
</style>
