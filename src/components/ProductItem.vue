<template>
  <tr class="product-item">
    <td class="product-item__detail">{{product.name}}</td>
    <td class="product-item__detail">{{product.brand}}</td>
    <td class="product-item__detail">{{product.size}}</td>
  </tr>
</template>

<style lang="sass">
  .product-item
    height: 40px

    &:nth-child(odd)
      background: #f1f1f1

  .product-item__detail
    padding-left: 16px
    padding-right: 16px
</style>

<script>
export default {
  name: 'product-item',
  props: {
    product: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>
