<template>
  <div class="home">
    <column :size="3">
      <products-results />
    </column>
    <column>
      <products-filters />
    </column>
  </div>
</template>

<style lang="sass">
  .home
    display: flex
    margin: 30px auto
    max-width: 1200px
</style>

<script>
import Column from '@/components/Column.vue';
import ProductsResults from '@/components/ProductsResults.vue';
import ProductsFilters from '@/components/ProductsFilters.vue';

export default {
  name: 'products',
  components: {
    Column,
    ProductsResults,
    ProductsFilters,
  },
};
</script>
