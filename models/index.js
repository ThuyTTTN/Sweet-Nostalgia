
// modules to require   *****Added Product 
const User = require('./User');
const Candy = require('./Candy');
const Product = require('./Product');



// *this worked at one point here
// create associations


User.belongsToMany(Product, { through: Candy})

Product.belongsToMany(User, { through: Candy})












// Candy.belongsToMany(User, { 
//     through: Candy,
//     foreignKey: 'product_id',
// });

// Candy.belongsToMany(Product, { 
//     through: User,
//     foreignKey: 'user_id',
//  });



module.exports = { User, Candy, Product };

