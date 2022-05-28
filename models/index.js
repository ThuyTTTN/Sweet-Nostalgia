const User = require('./User');
const Candy = require('./Candy');


//create associations
User.hasMany(Candy, {
    foreignKey: 'user_id',
});
    

Candy.hasMany(User, {
    foreignKey: 'candy_id'
});


module.exports = { User, Candy };