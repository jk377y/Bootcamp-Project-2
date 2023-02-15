const router = require('express').Router();// import the Router() method from the express package
const { Food, Category } = require('../../models');// import the Food and Category models

router.get('/', async (req, res) => {// This is the GET route for localhost:3001/api/food
	try {
		const dbFoodData = await Food.findAll({// This gets all the food from the database
			include: [
				{
					model: Category,// This includes the category model
					attributes: ['name'],// This only includes the name attribute from the category model
				},
			],
		});
		const foods = dbFoodData.map((food) => food.get({ plain: true }));// This maps over the food data and converts it to a plain object
		req.session.save(() => {// This saves the session
			if (req.session.countVisit) {// If the countVisit property exists
				req.session.countVisit++;// This increments the countVisit property
			} else {
				req.session.countVisit = 1;// This sets the countVisit property to 1
			}
			res.render('allFood', {// This renders the allFood.handlebars template
				foods, // This passes the foods object to the template
				countVisit: req.session.countVisit,// This passes the countVisit property to the template
				loggedIn: req.session.loggedIn,// This passes the loggedIn property to the template
			});
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// GET one food
router.get('/:id', async (req, res) => {// This is the GET route for localhost:3001/api/food/:id
	try {
		const dbFoodData = await Food.findByPk(req.params.id, {// This gets the food with the id that matches the id in the URL
			include: [
				{
					model: Category,// This includes the category model
					attributes: ['name'],// This only includes the name attribute from the category model
				},
			],
		});
		const food = dbFoodData.get({ plain: true });// This converts the food data to a plain object
		res.render('single', food);// This renders the single.handlebars template and passes the food object to the template
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;// export the router
