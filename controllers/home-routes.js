const router = require('express').Router();// import the Router() method from the express package

router.get('/', async (req, res) => {// This is the GET route for localhost:3001/
	try {
		res.render('homepage', {// This renders the homepage.handlebars template
			loggedIn: req.session.loggedIn,// This passes the loggedIn property to the template
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Login route
router.get('/login', (req, res) => {// This is the GET route for localhost:3001/login
	if (req.session.loggedIn) {// If the user is logged in
		res.redirect('/');// This redirects the user to the homepage
		return;
	}
	res.render('login');// This renders the login.handlebars template
});

module.exports = router;// export the router
