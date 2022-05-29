// Modules required
const Candy = require('../models/Candy');

// variable to hold all the candy data
const candyData = [
    // expects key value pairs (candy_decade)
    {
        // the decade of candy
        category_decade: '70s',
        userId: 1,
    },
    {
        category_decade: '80s',
        userId: 2,
    },
    {
        category_decade: '90s',
        userId: 3,
    },
    {
        category_decade: '70s',
        userId: 4,
    },
    {
        category_decade: '80s',
        userId: 5,
    },
    {
        category_decade: '90s',
        userId: 6,
    }
];

///variable to hold all the candy for each user  in the candyData array
const seedCandy = () => Candy.bulkCreate(candyData);

module.exports = seedCandy;