const router = require('express').Router();
const { Food, Category } = require('../../models');

router.get('/', async (req, res) => {
	try {
		const dbFoodData = await Food.findAll({
			include: [
				{
					model: Category,
					attributes: ['name'],
				},
			],
		});
		const foods = dbFoodData.map((food) => food.get({ plain: true }));
		req.session.save(() => {
			if (req.session.countVisit) {
				req.session.countVisit++;
			} else {
				req.session.countVisit = 1;
			}
			res.render('allFood', {
				foods, 
				countVisit: req.session.countVisit,
				loggedIn: req.session.loggedIn,
			});
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// GET one food
router.get('/:id', async (req, res) => {
	try {
		const dbFoodData = await Food.findByPk(req.params.id, {
			include: [
				{
					model: Category,
					attributes: ['name'],
				},
			],
		});
		const food = dbFoodData.get({ plain: true });
		res.render('single', food);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
