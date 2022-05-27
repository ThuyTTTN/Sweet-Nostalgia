// Modules
const router = require('express').Router();
const { User, Candy } = require('../models');
// const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

//  GET /dashboard - to show user's subscription and information
router.get('/', (req, res) => {
    User.findAll({
        // we are using the user id to find the user's subscription
        where: {
            user_id: req.session.user_id
        },
        //  the attributes we want to return 
        attributes: ['id', 'first_name', 'last_name', 'email', 'password', 'address', 'city', 'country', 'zip_code'],
         /* my CoPilot suggested a 'subscription_id' column.. we may need this to reference the decade idk... */
         include: [{
            // the model is the table we want to include
             model: Candy,
                attributes: ['id', 'category_decade']
                /* CoPilot suggested for candy a 'price', 'decade_id' column maybe we need */
         }]
    })

})