import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Dashboard from '@/components/Dashboard';
import auth from '../auth';

Vue.use(Router);
/* eslint-disable no-console */

const router = new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello,
    meta: {
    },
    props: true,
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
    props: true,
  }],
});

router.beforeEach((to, from, next) => {
  let user;
  auth.authUser()
    .then(() => {
      user = auth.getUser();
      console.log(user.isLogged);
      if (to.meta.requiresAuth) {
        if (user.isLogged) {
          next();
        } else {
          next({
            path: '/',
          });
        }
      }

      if (!to.meta.requiresAuth) {
        next();
      }
    }).catch((err) => {
      console.log(err);
    });
});

export default router;
