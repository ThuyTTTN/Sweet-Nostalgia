// Modules required
const User = require("../models/User");

// variable to hold all the user data
const userData = [
  {
    first_name: "Willie",
    last_name: "Wonka",
    email: "Willie@example.com",
    password: "password123",
    address: "1445 West Norwood Avenue",
    city: "Itasca",
    state: "Illinois",
    zipCode: "60143",
   
  },
  {
    first_name: "Jolly",
    last_name: "Blanchers",
    email: "Jolly@example.com",
    password: "password123",
    address: "123 Ranchers Road",
    city: "Orlando",
    state: "Florida",
    zipCode: "32836",
 

  },
   {
    first_name: "Pixy",
    last_name: "Dust",
    email: "Pixy@example.com",
    password: "password123",
    address: "456 Stix Road",
    city: "Orlando",
    state: "Florida",
    zipCode: "32801",

  },
  {
    first_name: "Mister",
    last_name: "Goodbar",
    email: "Mister@example.com",
    password: "password123",
    address: "789 Chocolate Road",
    city: "Orlando",
    state: "Florida",
    zipCode: "32828",
  
  },
  {
    first_name: "Hans",
    last_name: "Haribo",
    email: "Hans@example.com",
    password: "password123",
    address: "1234 Gummy Road",
    city: "Orlando",
    state: "Florida",
    zipCode: "32803",
    
  },
  {
    first_name: "Gob",
    last_name: "Stopper",
    email: "Gob@example.com",
    password: "password123",
    address: "1234 Globbers Road",
    city: "Orlando",
    state: "Florida",
    zipCode: "32806",
    
  },

];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
