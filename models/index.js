// modules to require
const User = require('./User');
const Candy = require('./Candy');


// create associations
User.belongsTo(Candy, {
    foreignKey: 'candyId'
});

Candy.hasMany(User, {
    foreignKey: 'candyId'
});
// *this works but is not ideal because it is not a one to many relationship maybe?
// User.hasMany(Candy);







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






module.exports = { User, Candy };
