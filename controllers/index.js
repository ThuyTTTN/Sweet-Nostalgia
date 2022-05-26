// Modules to require:
const router = require('express').Router();
const homeRoutes = require('./home-routes');

// The path to the home-routes.js example: www.example.com/
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;