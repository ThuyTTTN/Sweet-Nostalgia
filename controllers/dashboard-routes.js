// Modules
const router = require('express').Router();
const { Users, Candies, CandyBox, Subscription } = require('../models');
const withAuth = require('../utils/auth');



//  GET home page
router.get('/', withAuth, (req, res) => {
    Users.findAll({
            where: {
                id: req.session.id
            },
            attributes: ['id', 'first_name', 'last_name', 'email', 'address', 'city', 'state', 'zipCode'],
            include: [
                {
                    model: CandyBox,
                    attributes: ['id', 'decade', 'price', 'stock',],
                }
            ], 
        })
        .then(dbUserData => {
            const user = dbUserData.map(users => users.get({ plain: true }));
            res.render('dashboard', { user, loggedIn: true});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//    // ability to logout 
//    router.post('/', (req, res) => {
//     // if the user is logged in they have the ability to logout
//     if (req.session.loggedIn) {
//         res.render('dashboard')
//     } else {
//         // if the user is not logged in they cannot logout and will receive an error (the logout button will not show)
//         res.render('login')
//     }
// });


// //  GET /dashboard - to show user's subscription and information
// router.get('/', withAuth, (req, res) => {
//     User.findAll({
//         // we are using the user id to find the user's subscription
//         where: {
//             id: req.session.id
//         }
//     })
//     // send the response back to the client
//     .then(dbUserData => { // render the dashboard.handlebars file
//         res.render('dashboard', { loggedIn: req.session.loggedIn});
//     })
//     // catch any errors
//     .catch (err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.get('/edit', (req, res) => {
//     res.render('editprofile');
// })

router.get('/edit/', withAuth, (req, res) => {
    // access the candel model to find a single candy
    Users.findOne({
            // find the candy for the user by id
            where: {
                id: req.session.users
            },
            attributes: ['id', 'first_name', 'last_name', 'email', 'address', 'city', 'state', 'zipCode'],
            // include the candy model
            include: [{
                model: CandyBox,
                attributes: ['id', 'decade', 'price', 'stock', ],
            }]
        })
        // send the response back to the client
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            const users = dbUserData.get({ plain: true});
            res.render('editprofile', { users, loggedIn: true });
        })
        // catch any errors
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/password/', withAuth, (req, res) => {
    // access the candel model to find a single candy
    Users.findOne({
            // find the candy for the user by id
            where: {
                id: req.session.users
            },
            attributes: ['id', 'first_name', 'last_name', 'email', 'address', 'city', 'state', 'zipCode'],
            // include the candy model
            include: [{
                model: CandyBox,
                attributes: ['id', 'decade', 'price', 'stock', ],
            }]
        })
        // send the response back to the client
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            const users = dbUserData.get({ plain: true});
            res.render('password', { users, loggedIn: true });
        })
        // catch any errors
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/sub', withAuth, (req, res) => {
    // access the candyBox model to find a subscription
    Users.findAll({
            // find the subscription for the user by id
            where: {
                id: req.session.id
            },
            attributes: ['id', 'first_name', 'last_name', 'email', 'address', 'city', 'state', 'zipCode'],
            // include the subscription model
            include: [{
                model: CandyBox,
                attributes: ['id', 'decade', 'price', 'stock', ],
            }]
    })
    // send the response back to the client
    .then(dbSubscriptionData => {
        if (!dbSubscriptionData) {
            res.status(404).json({ message: 'No subscription found with this id'});
            return;
        }
        const user = dbSubscriptionData.map(user => user.get({ plain: true}));
        res.render('sub', { user, loggedIn: true })
    })
    // catch any errors
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;