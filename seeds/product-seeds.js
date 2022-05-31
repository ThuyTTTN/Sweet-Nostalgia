//Modules require -- Added product-seeds file
const Product = require('../models/Product');

//variable to hold all types of candies
const productData = [
    //expect key value pairs candy_id
    {
        product_name: 'Everlasting Gobstoppers',
        candy_id: '1',
    },
    {
        product_name: 'Fun Dip',
        candy_id: '1',
    },
    {
        product_name: 'Pop Rocks',
        candy_id: '1',
    },
    {
        product_name: 'Cow Tales',
        candy_id: '2',
    },
    {
        product_name: 'Push Pops',
        candy_id: '2',
    },
    {
        product_name: 'Big League Chew',
        candy_id: '2',
    },
    {
        product_name: 'Astro Pop',
        candy_id: '3',
    },
    {
        product_name: 'Bubble Tape',
        candy_id: '3',
    },
    {
        product_name: 'Mega Jawbreaker',
        candy_id: '3',
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

