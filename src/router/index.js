import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/indexPage/index'
import home from '@/components/indexPage/home/index'
import gogo from '@/components/indexPage/home/friendlyLink/index'
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home', // 重定向到 /home 路径  
    name: 'indexPage',
    component: index,    
    meta: {
      title: '广东省航运公共信息服务平台'
    },
    children: [
      {
        path: 'home',
        name: 'home', // 页面路径的名称 必须是唯一的 跳转时可通过名称进行跳转
        component: home, 
        meta: {
          title: '广东省航运公共信息服务平台'
        },
      },
      {
        path: 'gogo',
        name: 'gogo', // 页面路径的名称 必须是唯一的 跳转时可通过名称进行跳转
        component: gogo, 
        meta: {
          title: 'gogos'
        },
      },
    ]
  },
  // { /* Not Found 路由，必须是最后一个路由 */
  //   path: '*',
  //   component: NotFound,
  //   meta: {
  //     title: '找不到页面'
  //   }
  // }
];

const router = new Router({
  mode: 'hash',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {//如果设置标题，拦截后设置标题
    document.title = to.meta.title
  }
  next()
})

export default router;
