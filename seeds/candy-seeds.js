// Modules required
const  Candy  = require('../models/Candy');

// variable to hold all the candy data
const candyData = [
    // expects key value pairs (candy_decade)
    {
        // the decade of candy
        category_decade: '70s',
    },
    {
        category_decade: '80s',
    },
    {
        category_decade: '90s',
    }
    // TODO: add wild card 
];

///variable to hold all the candy for each user  in the candyData array
const seedCandy = () => Candy.bulkCreate(candyData);

module.exports = seedCandy;