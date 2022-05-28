const User = require('./User');
const Candy = require('./Candy');


//create associations
/* --- to be used later possibly --- */
// User.hasMany(Candy, {
//     foreignKey: 'user_id',
// });
    

Candy.hasMany(User, {
    foreignKey: 'candy_id'
});

User.belongsTo(Candy, {
    foreignKey: 'user_id'
});


module.exports = { User, Candy };
