const router = require('express').Router();
const apiRoutes = require('./api/index.js');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard.js');
const loginRoutes = require('./login-signup-routes.js');
const contactRoutes = require('./contact.js');

router.use('/',homeRoutes);
router.use('/dashboard',dashboardRoutes);
router.use('/api',apiRoutes);
router.use('/login-signup',loginRoutes);
router.use('/contact',contactRoutes);

module.exports = router;