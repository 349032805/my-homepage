<template>
  <div class="blogs">
 	<div class="nav">
            <ul>
              <router-link to="/blogs/allBlogs"><li>全部</li></router-link>
              <router-link to="/blogs/vuejs"><li>Vuejs</li></router-link>
              <router-link to="/blogs/angularjs"><li>Angularjs</li></router-link>
              <router-link to="/blogs/react"><li>React</li></router-link>
              <router-link to="/blogs/nodejs"><li>Nodejs</li></router-link>
              <router-link to="/blogs/java"><li>Java</li></router-link>
              <router-link to="/blogs/css3"><li>css3</li></router-link>
              <router-link to="/blogs/web"><li>网站</li></router-link>
              <router-link to="/blogs/about"><li>关于我</li></router-link>
              <router-link to="/blogs/leaveMsg"><li>留言</li></router-link>
            </ul>
      </div>

      <div class="content">
        <transition name="router-slid" mode="out-in">
          <router-view></router-view>
        </transition>
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
	.blogs{
        width: 1200px;
        margin: 0 auto;
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        bottom: 0;
        .nav {
            background-color: rgba(122,193,224,.42);
            overflow: hidden;
            border: 1px solid #68adc7;
            margin: 15px 0;

            ul {
              display: flex;
              a {
                flex :1;
                color: #666;

                &.active {
                  color: #fff!important;
                  background: #66caf1!important;
                }
                &:hover {
                  color: #fff;
                  background: #66caf1;
                }
              }
              li {
                text-align: center;
                height: 60px;
                line-height: 60px;
              }
            }
        }

        .content {

        }
      }
</style>
