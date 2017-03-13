import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Dashboard from '@/components/Dashboard';
import auth from '../auth';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
});

router.beforeEach((to, from, next) => {
  auth.authUser().then(() => {
    next();
  });
});

export default router;
