const logout = async () => {// called when the logout button is clicked
	const response = await fetch('/api/users/logout', {// This fetches the logout route from localhost:3001/api/users/logout
		method: 'POST',// This uses the POST method
		headers: { 'Content-Type': 'application/json' },// This sets the content type to JSON 
	});
	if (response.ok) {// If the response is ok
		document.location.replace('/');// This redirects the user to the homepage at localhost:3001/
	} else {
		alert('Failed to log out.');
	}
};

document.querySelector('#logout').addEventListener('click', logout);// This adds an event listener to the logout button that calls the logout function when the button is clicked
