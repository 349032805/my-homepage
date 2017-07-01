
import home from '../views/home.vue'
import blogs from '../views/blogs.vue'
import about from '../views/about.vue'
import leaveMsg from '../views/leaveMsg.vue'
import blogDetail from '../views/blogDetail.vue'
import test from '../views/test.vue'
export default [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
     {
      path: '/blogs',
      name: 'blogs',
      component: blogs
    },
    {
        path: 'leaveMsg',
        name: "leaveMsg",
        component: leaveMsg
      },
      {
        path: 'about',
        name: "about",
        component: about
      },
     {
        path: 'test',
        name: "test",
        component: test
      },
      {
        path: 'blogDetail',
        name: "blogDetail",
        component: blogDetail
      },
];
