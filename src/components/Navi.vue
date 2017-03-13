<template lang="html">
  <nav>
  <div class="nav-wrapper">
    <router-link to="/" class="brand-logo">Survey Tracker</router-link>

    <router-link to="/" class="right">
      <a class="waves-effect waves-light btn" v-on:click="logout">Logout</a>
    </router-link>
  </div>
</nav>
</template>

<script>
import auth from '../auth';

export default {
  /* eslint-disable no-console */

  name: 'Navi',
  data() {
    return {

    };
  },
  props: ['user'],
  methods: {
    logout: auth.logout,
  },
  mounted: function check() {
    console.log(this.user, this.user.uid);
  },
};
</script>

<style lang="css" scoped>
#firebaseui-auth-container {
  height: 100px;
  width: auto;
}
</style>
