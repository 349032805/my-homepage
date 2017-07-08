<template>
  <div class="blogs">
 	<div class="nav">
            <ul>
              <waveBtn @click="changeTab('all')"  :class="{'active':currentTheme == 'all'}">全部</waveBtn>
              <waveBtn @click="changeTab('vuejs')" :class="{'active':currentTheme == 'vuejs'}">Vuejs</waveBtn>
              <waveBtn @click="changeTab('angularjs')" :class="{'active':currentTheme == 'angularjs'}">Angularjs</waveBtn>
              <waveBtn @click="changeTab('nodejs')" :class="{'active':currentTheme == 'nodejs'}">Nodejs</waveBtn>
              <waveBtn @click="changeTab('css3')" :class="{'active':currentTheme == 'css3'}">css3</waveBtn>
              <waveBtn @click="changeTab('java')" :class="{'active':currentTheme == 'java'}">Java</waveBtn>
              <waveBtn @click="changeTab('web')" :class="{'active':currentTheme == 'web'}">网站</waveBtn>
              <waveBtn @click="changeTab('other')" :class="{'active':currentTheme == 'other'}">生活</waveBtn>
            </ul>
      </div>
      <div class="content">
           <div class="column">
                <div class="two-columns">
                <div class="left-column part">
                  <p class="intro">
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
                        <li style="border-top: none;" @click="gotoDetail()">你好你好你好你好你好你好你好你好你好你好</li>
                        <li>你好你好你好你好你好你好你好你好你好你好</li>
                        <li>你好你好你好你好你好你好你好你好你好你好</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>

  </div>

</template>

<script type="text/ecmascript-6">
import waveBtn from '../components/waveBtn';
     export default {
      data() {
          return {
            currentTheme:''
          }
        },
      created() {
          console.log("---------create");
       },
      methods: {
        changeTab(theme){
          console.log("theme:"+theme);
          this.currentTheme = theme;
        },
        gotoDetail(){
          // this.$router.push({name:'orderDetail',params:{orderId:orderId}});
          this.$router.push({name:'blogDetail'});
        }
      },
      components: {
        waveBtn
      }
    };
</script>

<style lang="less" scoped>
	.blogs{
    width: 1200px;
    margin: 0 auto;
    position: absolute;
    top: 40px;
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
          li {
            flex: 1;
            cursor: pointer;
            text-align: center;
            height: 60px;
            line-height: 60px;
              &.active {
                color: #fff!important;
                background: #66caf1!important;
              }
              &:hover {
                color: #fff;
                background: #66caf1;
              }

          }

        }
    }

      .content {
        .column {
            position: absolute;
            top: 100px;
            bottom: 40px;
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
                  line-height: 24px;
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
                          font-size: 16px;
                          transition: .3s;
                          -webkit-transition: .3s;
                           &:hover {
                            color: #fff;
                            background: #66caf1;
                            opacity: 0.7;
                            padding-left: 30px;
                          }
                        }
                      }
                    }
                }
              }
            }
          }

      }
  }
</style>
