<template>
  <aside class="products-filters">
    <h1>Filtrar</h1>

    <products-filter
      name="size"
      label="Tamanho"
      value="size"
      :options="sizes"
      @changed="sizeChanged" />
    <products-filter
      name="brand"
      label="Marca"
      value="name"
      :options="brands"
      @changed="brandChanged"/>
  </aside>
</template>

<style lang="sass">
  .products-filters
    background: #f1f1f1
    border-radius: 5px
    flex: 1
    padding: 16px
</style>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import ProductsFilter from '@/components/ProductsFilter.vue';

export default {
  name: 'products-filters',
  methods: {
    ...mapMutations({
      sizeChanged: 'setSize',
      brandChanged: 'setBrand',
    }),
    ...mapActions(['getBrands', 'getSizes'])
  },
  computed: {
    ...mapState(['brands', 'sizes'])
  },
  components: {
    ProductsFilter,
  },
  created() {
    this.getBrands();
    this.getSizes();
  }
};
</script>
