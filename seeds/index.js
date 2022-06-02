const seedCandies = require('./candies-seeds');
const seedCandyBox = require('./candybox-seeds');
const seedSubscription = require('./subscription-seeds');
const seedUsers = require('./users-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCandyBox();
  console.log('\n----- CANDYBOX SEEDED -----\n');
  
  await seedCandies();
  console.log('\n----- CANDIES SEEDED -----\n');


  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedSubscription();
  console.log('\n----- SUBSCRIPTION SEEDED -----\n');

  process.exit(0);
};

seedAll();
