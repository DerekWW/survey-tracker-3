// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import * as firebase from 'firebase';
import vuefire from 'vuefire';
import App from './App';
import router from './router';
import database from './database';

Vue.config.productionTip = false;

Vue.use(vuefire);

const config = {
  apiKey: 'AIzaSyDVvtSK4fZ6htviqyvwUsMAQ-MYbPkgCEk',
  authDomain: 'survey-tracker-3d376.firebaseapp.com',
  databaseURL: 'https://survey-tracker-3d376.firebaseio.com',
  storageBucket: 'survey-tracker-3d376.appspot.com',
  messagingSenderId: '1018029921808',
};

const initApp = () => {
  firebase.initializeApp(config);
  database.init();
};

initApp();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
