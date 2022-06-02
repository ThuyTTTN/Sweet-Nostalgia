const { CandyBox } = require('../models');

const candyBoxData = [
  {
    decade: '70s',
    price: 14.99,
    stock: 14,
  
  },
  {
    decade: '80s',
    price: 14.99,
    stock: 25,

  },
  {
    decade: '90s',
    price: 14.99,
    stock: 12,
  
  },
];

const seedCandyBox = () => CandyBox.bulkCreate(candyBoxData);

module.exports = seedCandyBox;
