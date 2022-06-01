// modules required for routing
const router = require('express').Router();
// const { User, Candy } = require('../models');


// GET signup page
router.get('/signup', (req, res) => {   // we are checking if the user is logged in
    if (req.session.loggedIn) { 
    // if the user is logged in redirect them to the dashboard
      res.redirect('/');
      return;
    }
    // render the signup.handlebars file if the user is not logged in
    res.render('signup');
  });

// GET login page
router.get('/login', (req, res) => {  // we are checking if the user is logged in
    if (req.session.loggedIn) {
    // if the user is logged in redirect them to the dashboard
      res.redirect('/');
      return;
    }
    // render the login.handlebars file if the user is not logged in
    res.render('login');
  });

//  GET home page
router.get('/', (req, res) => { // anyone can access this page
    //  home.handlebars file
    res.render('homepage', {loggedIn: req.session.loggedIn});
});

module.exports = router;