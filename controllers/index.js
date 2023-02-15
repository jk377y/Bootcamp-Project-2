const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
// const foodRoutes = require('./api/food-routes');
// const userRoutes = require('./api/user-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/api/food', foodRoutes);
// router.use('/api/users', userRoutes);

module.exports = router;