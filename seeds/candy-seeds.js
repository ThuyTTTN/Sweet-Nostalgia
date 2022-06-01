// Modules required
const Candy = require('../models/Candy');

// variable to hold all the candy data
const candyData = [
    // expects key value pairs (candy_id)
    {
        // the decade of candy
        candyDecade: '70s',
        // the user_id of the candy
        user_id: 1,
        // the product_id of the candy
        product_id: 1,
    },
    {
        candyDecade: '80s',
        user_id: 2,
        product_id: 2,

    },
    {
        candyDecade: '90s',
        user_id: 3,
        product_id: 3,
    },
    // {
    //     candyId: '1',
    // },
    // {
    //     candyId: '2',
    // },
    // {
    //     candyId: '3',
    // }
];

///variable to hold all the candy for each user  in the candyData array
const seedCandy = () => Candy.bulkCreate(candyData);

module.exports = seedCandy;