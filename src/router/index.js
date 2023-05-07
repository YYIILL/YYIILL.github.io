import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: () => import('../views/UserLogin.vue'),
  },
  {
    path: '/',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '*',
    component: () => import('../views/NoFind.vue'),
  },
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to, from, next) => {
//   const { token } = store.state.user;
//   if (to.path !== '/login' && !token) return next('/login');
//   next();
// });

export default router;
