//modules
const seedUsers = require('./user-seeds');
const seedCandy = require('./candy-seeds');
const seedProducts = require('./product-seeds');
const sequelize = require('../config/connection');

//create a variable to hold all seeds
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n')

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n')

    await seedCandy();
    console.log('\n----- CANDIES SEEDED -----\n')

    await seedProducts();
    console.log('\n-----PRODUCTS SEEDED -----\n')

    process.exit(0);
}

//run seedAll function
seedAll();