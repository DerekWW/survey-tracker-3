<template lang="html">
  <div class="Dashboard">
    <button type="button" v-on:click="getSheet" name="button">get sheet</button>
    <div class="">
      {{ spreadsheet }}
    </div>
  </div>

</template>

<script>
/*eslint-disable*/
export default {
  name: 'Dashboard',
  data() {
    return {
      spreadsheet: '',
    };
  },
  props: ['user'],
  methods: {
    getSheet: function() {
      gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: '1tA60Gczx8N2451Ul9_0nPfoMTggHa6k8JWoJQdoJvOI',
          range: 'Class Data!A2:E',
        })
        .then((response) => {
          this.spreadsheet = response;
        });
    },
  },

};
</script>

<style lang="css">
</style>
