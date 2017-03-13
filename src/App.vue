<template>
<div id="app">
  <navi :user="user" @checkIfLogged="checkIfLogged"></navi>
  <router-view :user="user"></router-view>
</div>
</template>

<script>
import navi from './components/Navi';
import auth from './auth';

const user = auth.getUser();
export default {
  name: 'app',
  components: {
    navi,
  },
  data() {
    return {
      user,
    };
  },
  methods: {
    checkIfLogged: () => {
      this.$emit('checkIfLogged');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
