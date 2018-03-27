<template>
  <main class="products-results">
    <h1>Produtos</h1>

    <strong v-show="isEmpty">Nenhum resultado encontrado</strong>

    <table class="products-results__table" v-show="isNotEmpty">
      <thead>
        <tr>
          <th class="products-results__table__header">Nome</th>
          <th class="products-results__table__header">Marca</th>
          <th class="products-results__table__header">Tamanho</th>
        </tr>
      </thead>
      <tbody>
        <product-item v-for="product in filteredProducts" :key="product.id" :product="product"/>
      </tbody>
    </table>
  </main>
</template>

<style lang="sass">
  .products-results
    flex: 3

  .products-results__table
    width: 100%

  .products-results__table__header
    height: 40px
    padding-left: 16px
    padding-right: 16px
    text-align: left
</style>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'products-results',
  computed: {
    isEmpty() {
      return this.filteredProducts.length === 0;
    },
    isNotEmpty() {
      return this.filteredProducts.length > 0;
    },
    ...mapGetters(['filteredProducts'])
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  components: {
    ProductItem,
  },
  created() {
    this.getProducts();
  },
};
</script>
