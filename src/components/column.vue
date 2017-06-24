<template>
  <div class="column">
  	<div class="two-columns">
		<div class="left-column part">
			<p class="intro">
				欢迎来到fantasy的个人主页!
				欢迎来到fantasy的个人主页
				欢迎来到fantasy的个人主页
				欢迎来到fantasy的个人主页
				欢迎来到fantasy的个人主页
				欢迎来到fantasy的个人主页
				欢迎来到fantasy的个人主页
				欢迎来到fantasy的个人主页
				欢迎来到fantasy的个人主页
				欢迎来到fantasy的个人主页
				欢迎来到fantasy的个人主页
				欢迎来到fantasy的个人主页
			</p>
		</div>
		<div class="right-column part">
			<div class="list-box">
				<div class="box">
					<ul>
						<li style="border-top: none;">你好你好你好你好你好你好你好你好你好你好</li>
						<li>你好你好你好你好你好你好你好你好你好你好</li>
						<li>你好你好你好你好你好你好你好你好你好你好</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script type="text/ecmascript-6">
     export default {
      data() {
          return {
          }
        },
      created() {
          console.log("---------create");
       },
      methods: {
          
      }  
    };
</script>

<style lang="less" scoped>
.column {
	position: absolute;
	top: 100px;
	bottom: 20px;
	.two-columns {
		height: 100%;
		.part {
			height: 100%;
		      background-color: rgba(179,234,234,.24);
			border: 1px solid #66caf1;
			overflow-y: auto;
			overflow-x: hidden;
		}
		.left-column {
			width: 38%;
			float: left;
			.intro {
				padding: 15px;
				text-indent:2em;
				text-align: justify;
			}
		}

		.right-column{
			width: 60%;
			float: right;

			.list-box {
				padding: 15px;
				.box {
					width: 100%;
					height: 100%;
					border: 1px solid #fff;
					border-radius: 5px;
	  				ul {
	  					li{
	  						line-height: 43px;
	  						height: 45px;
	  						border-top: 1px solid #fff;
	  						padding: 0 15px;
	  					}
	  				}
	  			}
			}
		}
	}
}
	
</style>
