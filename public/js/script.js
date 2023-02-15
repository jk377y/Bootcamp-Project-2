// custom js for the navigation buttons on the food page
const prevFoodButton = document.getElementById("prevFood");// get the prev button element
const nextFoodButton = document.getElementById("nextFood");// get the next button element
const backToListButton = document.getElementById("backToList");// get the back to list button element
const currentFoodId = parseInt(window.location.pathname.split("/")[3]);// get the current food id from the url
const maxFoodId = 15;// set the max food id to the total number of foods in the database
const minFoodId = 1;// set the min food id to 1 because the food ids start at 1 for the purposes of a later function

function navigateToPrevFood() {
	// navigate to the previous food function
	let previousFoodId = currentFoodId - 1; // set the previous food id
	if (previousFoodId < minFoodId) {
		// if the previous food id is less than the min food id
		previousFoodId = maxFoodId; // set the previous food id to the max food id so it loops back to the last food
	}
	location.href = `/api/food/${previousFoodId}`; // navigate to the previous food using the previous food id in the url
}

function navigateToNextFood() {
	// navigate to the next food function
	let nextFoodId = currentFoodId + 1; // set the next food id
	if (nextFoodId > maxFoodId) {
		// if the next food id is greater than the max food id
		nextFoodId = minFoodId; // set the next food id to the min food id so it loops back to the first food
	}
	location.href = `/api/food/${nextFoodId}`; // navigate to the next food using the next food id in the url
}

function navigateToFoodList() {
	// navigate to the food list function
	location.href = `/api/food`; // navigate to the food list using the food root url
}

prevFoodButton.addEventListener("click", navigateToPrevFood);// add event listeners to the prevFood button
nextFoodButton.addEventListener("click", navigateToNextFood);// add event listeners to the nextFood button
backToListButton.addEventListener("click", navigateToFoodList);// add event listeners to the backToList button