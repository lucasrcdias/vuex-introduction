export default {
  setBrand(state, payload) {
    state.brand = payload.brand;
  },
  setSize(state, payload) {
    state.size = payload.size;
  },
  setSizes(state, payload) {
    state.sizes = payload.sizes;
  },
  setBrands(state, payload) {
    state.brands = payload.brands;
  },
  setProducts(state, payload) {
    state.products = payload.products;
  },
  clearFilters(state) {
    state.brand = null;
    state.size = null;
  },
};
