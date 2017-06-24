
import home from '../views/home.vue'
import blogs from '../views/blogs.vue'
import allBlogs from '../views/allBlogs.vue'
import vuejs from '../views/vuejs.vue'
import angularjs from '../views/angularjs.vue'
import react from '../views/react.vue'
import nodejs from '../views/nodejs.vue'
import java from '../views/java.vue'
import css3 from '../views/css3.vue'
import web from '../views/web.vue'
import about from '../views/about.vue'
import leaveMsg from '../views/leaveMsg.vue'
export default [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    //  {
    //   path: '/blogs',
    //   name: 'blogs',
    //   component: blogs
    // },
     {
      path: '/blogs',
      name: "blogs",
      component: blogs,
      children : [
        {
          path: '',
          name: "allBlogs",
          component: allBlogs
        },
        {
          path: 'allBlogs',
          name: "allBlogs",
          component: allBlogs
        }, 
        {
          path: 'vuejs',
          name: "vuejs",
          component: vuejs,
        }, 
        {
          path: 'angularjs',
          name: "angularjs",
          component: angularjs,
        }, 
        {
          path: 'react',
          name: "react",
          component: react
        }, 
        {
          path: 'nodejs',
          name: "nodejs",
          component: nodejs
        }, 
        {
          path: 'java',
          name: "java",
          component: java
        }, 
        {
          path: 'css3',
          name: "css3",
          component: css3
        }, 
        {
          path: 'web',
          name: "web",
          component: web
        }, 
        {
          path: 'about',
          name: "about",
          component: about
        }, 
        {
          path: 'leaveMsg',
          name: "leaveMsg",
          component: leaveMsg
        }
      ]
    }
];
