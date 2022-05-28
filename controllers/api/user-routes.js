// file connects to api/index.js
const router = require('express').Router();
const { User, Candy } = require('../../models');
const withAuth = require('../../utils/auth');

// GET /api/users
router.get('/', (req, res) => {
    // access the User model and find all users
    User.findAll({
            // exclude the password from the response
            attributes: {
                exclude: ['password']
            },
            // include the candy that the user subscribed to
            include: [{
                // the model is the table we want to include
                model: Candy,
                // the atribbutes are the columns we want to return for the user that subscribed to the candy
                attributes: ['id', 'category_decade']
            }]
        })
        // send the response back to the client
        .then(dbUserData => res.json(dbUserData))
        // catch any errors
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    // access the User model to find a single user
    User.findOne({
            // exclude the password from the response
            attributes: {
                exclude: ['password']
            },
            // find the user by id
            where: {
                id: req.params.id
            },
            // include the candy that the user subscribed to
            include: [{
                // the model is the table we want to include
                model: Candy,
                //   the atribbutes are the columns we want to return for the user that subscribed to the candy
                attributes: ['id', 'category_decade']
            }]
        })
        // send the response back to the client
        .then(dbUserData => {
            // if there is no user with the id  we send a 404 status
            if (!dbUserData) {
                res.status(404).json({
                    message: 'No user found with this id'
                });
                return;
            }
            // if there is a user with the id we send the user back to the client
            res.json(dbUserData);
        })
        // catch any errors
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    // access the User model to create a new user
    User.create({
            // the first_name is the name of the user
            first_name: req.body.first_name,
            // the last_name is the last name of the user
            last_name: req.body.last_name,
            // the email is the email of the user
            email: req.body.email,
            // the password is the password of the user
            password: req.body.password,
            // the address is the address the user lives in
            address: req.body.address,
            // the city is the city the user lives in
            city: req.body.city,
            // the state is the state the user lives in
            state: req.body.state,
            // the zip is the zip code of the user
            zipCode: req.body.zipCode
        })
        // send the response back to the client
        .then(dbUserData => {
            // save the session before sending the response
            req.session.save(() => {
                // set the session user_id to the user id of the user we just created
                req.session.user_id = dbUserData.id;
                // set teh session email to the email of the user we just created
                req.session.user_email = dbUserData.email;
                // the purpose of session.loggedIn is to check if the user is logged in or not
                req.session.loggedIn = true;
                // send the user back to the client
                res.json(dbUserData);
            });
        })
        // catch any errors
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



// LOGIN USER /api/users/login HERE...
router.post('/login', (req, res) => {
    // access the User model to find a single user
    User.findOne({
            // find the user by email
            where: {
                //  the email is the email we are trying to log in with
                email: req.body.email
            }
        })
        // send the response back to the client
        .then(dbLoginData => {
            // if there is no user with the email or password we send a 404 status
            if (!dbLoginData || !dbLoginData.password) {
                res.status(404).json({ message: 'Login Failed' });
                return;
            }
            // this variable is to check if the password is correct
            const correctPass = User.checkPassword(req.body.password);
            // if the password is incorrect we send a 404 status
            if (!correctPass) {
                res.status(400).json({ message: 'Invalid Password' });
                return;
            }
            // set up session if the password is correct
            req.session.save(() => {
                // set the session  email to the user email of the user who is logging in
                req.session.email = User.email,
                // the purpose of session.loggedIn is to check if the user is logged in or not
                res.session.loggedIn = true;
                // send the respsone with the user data
                res.json({ User, message: 'You are now logged in!'  })
            });
            // catch any errors
        }).catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});




// LOGOUT USER /api/users/logout HERE...
router.post('/logout', (req, res) => {
    // if the user is logged in they have the ability to logout
    if (req.session.loggedIn) {
        // destroy the session
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        // if the user is not logged in they cannot logout and will receive an error (the logout button will not show)
        res.status(404).end();
    }
});




// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    // access the User model to delete a user
    User.destroy({
        // find the user by id
            where: {
                // the id is the id of the user we are trying to delete
                id: req.params.id
            }
        })
        // send the response back to the client
        .then(dbUserData => {
            // if there is no user with the id we send a 404 status
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            // if there is a user with the id we send the user back to the client
            res.json(dbUserData);
        })
        // catch any errors
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;