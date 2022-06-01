// Modules to require
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const candyRoutes = require('./candy-routes.js');
// *****THUY added this
const productRoutes = require('./product-routes.js');

// add to the routes url --> added after api/
router.use('/users', userRoutes);
router.use('/candy', candyRoutes);
// *****THUY added this
router.use('/products', productRoutes);

module.exports = router;