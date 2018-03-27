<template>
  <div id="app">
    <router-view/>
    <!-- <pre>
      {{state | json }}
    </pre> -->
  </div>
</template>
<script>
export default {
  computed: {
    state() {
      return this.$store.state;
    },
  },
};
</script>
