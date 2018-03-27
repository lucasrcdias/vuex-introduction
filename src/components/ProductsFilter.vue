<template>
  <div class="products-filter">
    <label>
      <span class="products-filter__label">{{label}}</span>
      <select class="products-filter__select" v-model="selected" :disabled="isEmpty">
        <option :value="null">{{prompt}}</option>
        <option v-for="option in options" :key="option.id" :value="option[value]">{{option[value]}}</option>
      </select>
    </label>
  </div>
</template>

<style lang="sass">
  .products-filter
    &:not(:last-child)
      margin-bottom: 30px

  .products-filter__label
    display: block
    font-size: 14px
    margin-bottom: 8px

  .products-filter__select
    height: 35px
    width: 100%
</style>

<script>
export default {
  name: 'products-filter',
  data() {
    return {
      selectedOption: null,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
      default: '',
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
    value: {
      type: String,
      required: true,
      default: '',
    },
    selected: {
      type: String,
      required: false,
      default: null,
    },
    options: {
      type: Array,
      required: true,
      default: [],
    },
  },
  computed: {
    isEmpty() {
      return this.options.length === 0;
    },
    prompt() {
      return `Selecione um(a) ${this.label}`
    },
  },
  watch: {
    selected() {
      const payload = {};
      payload[this.name] = this.selected;

      this.$emit('changed', payload);
    },
  },
};
</script>
