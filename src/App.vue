<template>
<div id="app">
  <navi :user="user" v-on:getUser="getUser"></navi>
  <router-view :user="user" v-on:getUser="getUser"></router-view>
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
      user: '',
    };
  },
  methods: {
    getUser() {
      this.user = auth.getUser();
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
