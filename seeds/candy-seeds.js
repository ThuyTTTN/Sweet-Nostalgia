const  Candy  = require('../models/Candy');

const candyData = [
    // expects key value pairs candy_decade 
    {
        category_decade: '70s',
    },
    {
        category_decade: '80s',
    },
    {
        category_decade: '90s',
    }
    // add wild card 
];

// function to seed the users table with the data in the userData array
const seedCandy = () => Candy.bulkCreate(candyData);

module.exports = seedCandy;