export default {
  filteredProducts(state) {
    const filteredByBrand = state.products.filter((product) => {
      return !state.brand || state.brand === product.brand;
    });

    return filteredByBrand.filter((product) => {
      return !state.size || state.size === product.size;
    });
  },
};
