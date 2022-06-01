//Modules require -- Added product-seeds file
const Product = require('../models/Product');

//variable to hold all types of candies
const productData = [
    //expect key value pairs candy_id
    {
        product_name: 'Everlasting Gobstoppers',
        
    },
    {
        product_name: 'Fun Dip',
      
    },
    {
        product_name: 'Pop Rocks',
       
    },
    {
        product_name: 'Cow Tales',
 
    },
    {
        product_name: 'Push Pops',
        
    },
    {
        product_name: 'Big League Chew',
        
    },
    {
        product_name: 'Astro Pop',
        
    },
    {
        product_name: 'Bubble Tape',
        
    },
    {
        product_name: 'Mega Jawbreaker',
        
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

