const router = require('express').Router();// import the Router() method from the express package
const apiRoutes = require('./api');// import the api-routes.js file
const homeRoutes = require('./home-routes');// import the home-routes.js file
// const foodRoutes = require('./api/food-routes');
// const userRoutes = require('./api/user-routes');

router.use('/', homeRoutes);// This is the GET route for localhost:3001/
router.use('/api', apiRoutes);// This adds the /api prefix to the apiRoutes
// router.use('/api/food', foodRoutes);
// router.use('/api/users', userRoutes);

module.exports = router;// export the router