
// modules to require   *****Added Product 
const User = require('./User');
const Candy = require('./Candy');
const Product = require('./Product');



// *this worked at one point here
// create associations


User.hasMany(Candy);

Candy.belongsTo(User);

Candy.hasMany(Product);

Candy.belongsTo(Product);

User.hasMany(Product);

Product.belongsTo(User);

Product.hasMany(Candy);

Candy.belongsTo(Product);











// Candy.belongsToMany(User, { 
//     through: Candy,
//     foreignKey: 'product_id',
// });

// Candy.belongsToMany(Product, { 
//     through: User,
//     foreignKey: 'user_id',
//  });



module.exports = { User, Candy, Product };

