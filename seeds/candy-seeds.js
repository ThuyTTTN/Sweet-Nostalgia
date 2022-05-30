// Modules required
const Candy = require('../models/Candy');

// variable to hold all the candy data
const candyData = [
    // expects key value pairs (candy_decade)
    {
        // the decade of candy
        candyId: '1',

    },
    {
        candyId: '2',
    },
    {
        candyId: '3',
    },
    {
        candyId: '1',
    },
    {
        candyId: '2',
    },
    {
        candyId: '3',
    }
];

///variable to hold all the candy for each user  in the candyData array
const seedCandy = () => Candy.bulkCreate(candyData);

module.exports = seedCandy;