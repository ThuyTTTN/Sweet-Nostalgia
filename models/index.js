// modules to require
const User = require('./User');
const Candy = require('./Candy');


//create associations
/* --- to be used later possibly --- */
User.hasMany(Candy, {
});

User.belongsTo(Candy, {
});
    

Candy.hasMany(User, {
});

Candy.belongsTo(User, {
});


module.exports = { User, Candy };
