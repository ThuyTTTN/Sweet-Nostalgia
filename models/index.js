// modules to require
const User = require('./User');
const Candy = require('./Candy');


//create associations
/* --- to be used later possibly --- */
User.hasOne(Candy);
// *this works but is not ideal because it is not a one to many relationship maybe?
// User.hasMany(Candy);

// User.belongsTo(Candy);

Candy.belongsTo(User);

// Candy.hasMany(User);

// User.hasMany(Candy, {
// });

// ! same as above
// User.belongsTo(Candy, {
// });
    

// Candy.hasMany(User, {
// });

// Candy.belongsTo(User, {
// });








module.exports = { User, Candy };
