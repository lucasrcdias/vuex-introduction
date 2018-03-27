<template>
  <div class="column" :style="{ flex: size }">
    <slot></slot>
  </div>
</template>

<style lang="sass">
  .column
    padding-left: 16px
    padding-right: 16px
</style>

<script>
export default {
  name: 'column',
  props: {
    size: {
      type: Number,
      required: false,
      default: 1,
    },
  },
};
</script>
