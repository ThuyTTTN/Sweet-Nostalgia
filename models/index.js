
// modules to require   *****Added Product 
const User = require('./User');
const Candy = require('./Candy');
const Product = require('./Product');



// *this worked at one point here
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

