//modules
const seedCandy = require('./candy-seeds');
const sequelize = require('../config/connection');

//create a variable to hold all seeds
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n')

    await seedCandy();
    console.log('\n----- CANDIES SEEDED -----\n')

    process.exit(0);
}

//run seedAll function
seedAll();