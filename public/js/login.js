const loginFormHandler = async (event) => {// This is the login form handler
	event.preventDefault();// This prevents the default behavior of the form
	const email = document.querySelector("#email-login").value.trim();// This gets the email from the login form
	const password = document.querySelector("#password-login").value.trim();// This gets the password from the login form
	if (email && password) {// If the email and password are not empty
		const response = await fetch('/api/users/login', {
			// This fetches the login route
			method: 'POST', // This uses the POST method
			body: JSON.stringify({ email, password }), // This converts the email and password to a JSON string
			headers: { 'Content-Type': 'application/json' }, // This sets the content type to JSON
		});
		if (response.ok) {
			// If the response is ok
			document.location.replace('/api/food'); // This redirects the user to the homepage
		} else {
			alert("Failed to log in.");
		}
	}
};

const signupFormHandler = async (event) => {// This is the signup form handler
	event.preventDefault();// This prevents the default behavior of the form
	const username = document.querySelector("#userName-signup").value.trim();// This gets the username from the signup form
	const email = document.querySelector("#email-signup").value.trim();// This gets the email from the signup form
	const password = document.querySelector("#password-signup").value.trim();// This gets the password from the signup form
	if (username && email && password) {// If the username, email, and password are not empty
		const response = await fetch('/api/users', {
			// This fetches the users route
			method: 'POST', // This uses the POST method
			body: JSON.stringify({ username, email, password }), // This converts the username, email, and password to a JSON string
			headers: { 'Content-Type': 'application/json' }, // This sets the content type to JSON
		});
		if (response.ok) {
			// If the response is ok
			document.location.replace('/api/food'); // This redirects the user to the homepage
		} else {
			alert("Failed to sign up.");
		}
	}
};

document.querySelector("#login").addEventListener("click", loginFormHandler);// This adds an event listener to the login form that calls the loginFormHandler function when the form is submitted
document.querySelector("#signUp").addEventListener("click", signupFormHandler);// This adds an event listener to the signup form that calls the signupFormHandler function when the form is submitted
