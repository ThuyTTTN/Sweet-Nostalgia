// modules to require   *****Added Product 
const User = require('./User');
const Candy = require('./Candy');
const Product = require('./Product');


// create associations
User.belongsTo(Candy, {
    foreignKey: 'candy_id'
});

Candy.hasMany(User, {
    foreignKey: 'candy_id'
});

Product.belongsTo(Candy, {
    foreignKey: 'candy_id'
})

Candy.hasMany(Product, {
    foreignKey: 'candy_id'
})

User.hasMany(Product, {
    foreignKey: 'candy_id'
})

module.exports = { User, Candy, Product };


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