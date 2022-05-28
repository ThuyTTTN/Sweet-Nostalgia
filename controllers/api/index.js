// file connects to controllers/index.js
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const candyRoutes = require('./candy-routes.js');

// add to the routes url --> added after api/
router.use('/users', userRoutes);
router.use('/candy', candyRoutes);

module.exports = router;