<template>
  <div id="app">
    <navi :user="user"></navi>
    <router-view></router-view>
  </div>
</template>

<script>
import navi from './components/Navi';
import auth from './auth';

export default {
  name: 'app',
  components: {
    navi,
  },
  data() {
    return {
      user: auth.getUser(),
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
