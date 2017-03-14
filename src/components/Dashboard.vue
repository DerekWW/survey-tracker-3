<template lang="html">
  <div class="Dashboard">
    {{ user }}
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {

    };
  },
  props: ['user'],

};
</script>

<style lang="css">
</style>
