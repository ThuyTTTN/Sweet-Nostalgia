// Modules required
const Candy = require('../models/Candy');

// variable to hold all the candy data
const candyData = [
    // expects key value pairs (candy_decade)
    {
        // the decade of candy
        candy_70s: 1,
        candy_80s: 2,
        candy_90s: 3,
    },
];

///variable to hold all the candy for each user  in the candyData array
const seedCandy = () => Candy.bulkCreate(candyData);

module.exports = seedCandy;