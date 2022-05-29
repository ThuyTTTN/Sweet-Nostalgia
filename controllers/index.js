// Modules to require:
const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');

// The path to the home-routes.js example: www.example.com/
router.use('/', homeRoutes);
// The path to the api-routes.js example: www.example.com/api/
router.use('/api', apiRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;