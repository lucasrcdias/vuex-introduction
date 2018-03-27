import Vue from 'vue';
import Router from 'vue-router';
import Products from './views/Products.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products,
    },
  ],
});
