// Modules
const router = require('express').Router();
const { User, Candy } = require('../models');
const withAuth = require('../utils/auth');

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
    // }).then(dbUserData => { // this is anticipated promise
    //     const user = dbUserData[0];
    //     const candy = user.Candy;
    //     const userData = user.get({ plain: true });
    //     console.log(userData);
    //     console.log(candy);
    //     res.render('dashboard', {
    //         user: userData,
    //         candy: candy
    //     });
    }).catch (err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        } 
    // }).then(dbUserData => { 
    //     const user = dbUserData.get({ plain: true });
    //     res.render('edit-user', {
    //         user: user
    //     })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;

