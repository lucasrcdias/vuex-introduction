const products = [
  { name: 'Nike Shox', brand: 'Nike', size: '40', id: 1 },
  { name: 'Adidas Springblade', brand: 'Adidas', size: '40', id: 2 },
  { name: 'Wave Creation', brand: 'Mizuno', size: '41', id: 3 },
  { name: 'Total 90', brand: 'Nike', size: '36', id: 4 },
  { name: '574 Evergreen', brand: 'New Balance', size: '43', id: 5 },
]

export default {
  index() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  },
};
