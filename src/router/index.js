import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: () => import('../views/UserLogin.vue'),
  },
  {
    path: '/',
    component: () => import('../views/HomePage.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import('../views/DashBoard.vue'),
      },
      {
        path: '/article',
        component: () => import('../views/ArticleManage.vue'),
      },
    ],
  },
  {
    path: '*',
    component: () => import('../views/NoFind.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
    return;
  }
  if (store.state.user.token) {
    next();
    return;
  }
  next('/login');
});

export default router;
