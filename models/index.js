// modules to require
const Candy = require('./Candy');
const User = require('./User');


// *this worked at one point here
// create associations
// User.hasOne(Candy);
// *this works but is not ideal because it is not a one to many relationship maybe?
// User.hasMany(Candy);
// Candy.belongsTo(User);
// *the end of working coding

Candy.hasMany(User);

User.belongsTo(Candy);


// ! other possible associations for user
// User.hasOne(Candy);
// User.belongsTo(Candy);
// User.hasMany(Candy);
// User.belongsToMany(Candy, { through: 'UserCandy' });
// ! other possible associations for candy
// Candy.hasOne(User);
// Candy.belongsTo(User);
// Candy.hasMany(User);
// Candy.belongsToMany(User, { through: 'UserCandy' });






module.exports = { Candy, User };
