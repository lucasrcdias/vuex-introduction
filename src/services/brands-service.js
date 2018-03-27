const brands = [
  { name: 'Adidas', id: 1 },
  { name: 'Nike', id: 2 },
  { name: 'Mizuno', id: 3 },
  { name: 'Oakley', id: 4 },
  { name: 'New Balance', id: 5 },
]

export default {
  index() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(brands);
      }, 1000);
    });
  },
};
