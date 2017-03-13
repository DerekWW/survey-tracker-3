<template lang="html">
  <nav>
  <div class="nav-wrapper">
    <a href="#" class="brand-logo">Survey Tracker</a>
    <div class="right" id="firebaseui-auth-container" >

    </div>
    <div class="right">
      <button type="button" name="button" v-on:click="logout">Logout</button>
    </div>
  </div>
</nav>
</template>

<script>
import auth from '../auth';

export default {
  name: 'Navi',
  data() {
    return {

    };
  },
  props: ['user'],
  methods: {
    logout: auth.logout,
  },
};
</script>

<style lang="css" scoped>
#firebaseui-auth-container {
  height: 100px;
  width: auto;
}
</style>
