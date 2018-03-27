import ProductsService from '@/services/products-service';
import BrandsService from '@/services/brands-service';
import SizesService from '@/services/sizes-service';

export default {
  getProducts({ commit }) {
    ProductsService.index()
      .then((products) => commit('setProducts', { products }));
  },
  getBrands({ commit }) {
    BrandsService.index()
      .then((brands) => commit('setBrands', { brands }));
  },
  getSizes({ commit }) {
    SizesService.index()
      .then((sizes) => commit('setSizes', { sizes }));
  },
};
