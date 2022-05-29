// Modules required
const  Candy  = require('../models/Candy');

// variable to hold all the candy data
const candyData = [
    // expects key value pairs (candy_decade)
    {
        // the decade of candy
        category_decade: '70s',
        // the user id of the user that subscribed to the candy
   
    },
    {
        category_decade: '80s',
 
    },
];

///variable to hold all the candy for each user  in the candyData array
const seedCandy = () => Candy.bulkCreate(candyData);

module.exports = seedCandy;