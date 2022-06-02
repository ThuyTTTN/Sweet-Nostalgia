const router = require('express').Router();


//  GET subscription page
router.get('/', (req, res) => { // anyone can access this page
    //  home.handlebars file
    // {loggedIn: req.session.loggedIn} might need this
    res.render('subscription', );
});

// POST subscription page (subscription form Create new subscription)


// PUT dashboard page (subscription form Update subscription for logged in user)

// DELETE dashboard page (subscription form Delete subscription for logged in user)


module.exports = router;