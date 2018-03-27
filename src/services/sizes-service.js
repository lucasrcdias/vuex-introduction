const sizes = [
  { size: '37', id: 1 },
  { size: '38', id: 2 },
  { size: '39', id: 3 },
  { size: '40', id: 4 },
  { size: '41', id: 5 },
  { size: '42', id: 6 },
  { size: '43', id: 7 },
  { size: '44', id: 8 },
  { size: '45', id: 9 },
  { size: '46', id: 10 },
]

export default {
  index() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sizes);
      }, 3000);
    });
  },
};
