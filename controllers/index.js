const router = require('express').Router();
const apiRoutes = require('./api/index.js');
const homeRoutes = require('./homepage.js');
const dashboardRoutes = require('./dashboard.js');

router.use('/',homeRoutes);
router.use('/dashboard',dashboardRoutes);
router.use('/api',apiRoutes);

module.exports = router;