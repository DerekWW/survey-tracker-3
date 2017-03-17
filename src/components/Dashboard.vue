<template lang="html">
  <div class="Dashboard">
    <button type="button" v-on:click='getSheet'  name="button">Get Sheet</button>
    <div class="">
      {{ user }}
    </div>
    <div class="">
      {{ spreadsheet }}
    </div>
  </div>

</template>

<script>
/*eslint-disable*/
import firebase from 'firebase';
import auth from '../auth';

export default {
  name: 'Dashboard',
  data() {
    return {
      spreadsheet: '',
      accessToken: this.user.google.accessToken,

    };
  },
  props: ['user'],
  methods: {
    getSheet() {
      this.$http(`https://sheets.googleapis.com/v4/spreadsheets/1tA60Gczx8N2451Ul9_0nPfoMTggHa6k8JWoJQdoJvOI?key=AIzaSyDVvtSK4fZ6htviqyvwUsMAQ-MYbPkgCEk&access_token=${this.accessToken}`)
        .then((res) => {
          console.log('Here',res);
        }).catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.$emit('getUser')
  }

};
</script>

<style lang="css">
</style>
