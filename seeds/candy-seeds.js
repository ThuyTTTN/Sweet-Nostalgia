const Candy = require('../models/Candy');



const candyData = [
    // expects key value pairs candy_decade 
    {
        candy_decade: '70s',
    },
    {
        candy_decade: '80s',
    },
    {
        candy_decade: '90s',
    }
    // add wild card 
]

// function to seed the users table with the data in the userData array
const seedCandy = () => Candy.bulkCreate(candyData, {individualHooks: true});

module.exports = seedCandy;