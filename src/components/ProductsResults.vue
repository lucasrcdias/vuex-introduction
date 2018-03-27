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

    <button
      type="button"
      class="products-results__clear"
      v-show="hasFilters"
      @click="clearFilters">
      Limpar filtros
    </button>
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

  .products-results__clear
    background: none
    border: 1px solid #ccc
    border-radius: 5px
    cursor: pointer
    display: block
    font-size: 14px
    height: 30px
    margin-top: 30px
    width: 200px

    &:hover,
    &:active,
    &:focus
      border-color: #333
</style>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
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
    ...mapGetters(['filteredProducts', 'hasFilters'])
  },
  methods: {
    ...mapMutations(['clearFilters']),
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
