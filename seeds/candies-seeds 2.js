const { Candies } = require('../models');

const candiesData = [
    {
      candy_name: 'Andes Mints',
      candybox_id: 1,
    },
    {
      candy_name: 'Appleheads',
      candybox_id: 1,
    },
    {
      candy_name: 'Astronaut Ice Cream Sandwich',
      candybox_id: 1,
    },
    {
      candy_name: 'Blow Pops',
      candybox_id: 1,
    },
    {
      candy_name: 'BuckEyes',
      candybox_id: 1,
    },
    {
      candy_name: 'BarNone',
      candybox_id: 2,
    },
    {
      candy_name: 'Nerds',
      candybox_id: 2,
    },
    {
      candy_name: 'Spree',
      candybox_id: 2,
    },
    {
      candy_name: 'Skor',
      candybox_id: 2,
    },
    {
      candy_name: 'Cow Tales',
      candybox_id: 2,
    },
    {
      candy_name: 'Baby Bottle Pops',
      candybox_id: 3,
    },
    {
      candy_name: 'Color Your Mouth Gumballs',
      candybox_id: 3,
    },
    {
      candy_name: 'Creme Savers',
      candybox_id: 3,
    },
    {
      candy_name: 'Gummi Hot Dog',
      candybox_id: 3,
    },
    {
      candy_name: 'Nerds Rope',
      candybox_id: 3,
    },
  ];

const seedCandies = () => Candies.bulkCreate(candiesData);

module.exports = seedCandies;
