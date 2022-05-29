// modules to require
const User = require('./User');
const Candy = require('./Candy');


//create associations
/* --- to be used later possibly --- */
User.hasOne(Candy);

User.belongsTo(Candy);

Candy.belongsTo(User);

Candy.hasMany(User);







module.exports = { User, Candy };
