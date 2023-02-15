const router = require('express').Router();// import the Router() method from the express package
const foodRoutes = require('./food-routes');// import the food-routes.js file
const userRoutes = require('./user-routes');// import the user-routes.js file

router.use('/food', foodRoutes);// This adds the /food prefix to the foodRoutes
router.use('/users', userRoutes);// This adds the /users prefix to the userRoutes

module.exports = router;// export the router