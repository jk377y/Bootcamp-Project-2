const { Food } = require('../models');// import the Food model

const foodData = [// create an array of objects to seed the foods table
{
    name: 'Baked Salmon',
    calories: 500,
    protein: 30,
    fat: 20,
    carbs: 10,
    categoryId: 2,
    image: '001.jpg',
  },
  {
    name: 'Beef and Broccoli',
    calories: 700,
    protein: 35,
    fat: 25,
    carbs: 50,
    categoryId: 2,
    image: '002.jpg',
  },
  {
    name: 'Chocolate Cake',
    calories: 600,
    protein: 10,
    fat: 25,
    carbs: 90,
    categoryId: 1,
    image: '003.jpg',
  },
  {
    name: 'Fruit Salad',
    calories: 200,
    protein: 5,
    fat: 5,
    carbs: 40,
    categoryId: 4,
    image: '004.jpg',
  },
  {
    name: 'Grilled Chicken',
    calories: 500,
    protein: 35,
    fat: 10,
    carbs: 40,
    categoryId: 2,
    image: '005.jpg',
  },
  {
    name: 'Mashed Potatoes',
    calories: 500,
    protein: 15,
    fat: 20,
    carbs: 70,
    categoryId: 3,
    image: '006.jpg',
  },
  {
    name: 'Peanut Butter and Jelly Sandwich',
    calories: 600,
    protein: 20,
    fat: 30,
    carbs: 80,
    categoryId: 4,
    image: '007.jpg',
  },
  {
    name: 'Pancakes and Syrup',
    calories: 600,
    protein: 15,
    fat: 20,
    carbs: 100,
    categoryId: 1,
    image: '008.jpg',
  },
  {
    name: 'Popcorn',
    calories: 300,
    protein: 10,
    fat: 10,
    carbs: 40,
    categoryId: 4,
    image: '009.jpg',
  },
  {
    name: 'Roasted Potatoes',
    calories: 400,
    protein: 10,
    fat: 20,
    carbs: 50,
    categoryId: 3,
    image: '010.jpg',
  },
  {
    name: 'Spaghetti Bolognese',
    calories: 800,
    protein: 25,
    fat: 10,
    carbs: 150,
    categoryId: 2,
    image: '011.jpg',
  },
  {
    name: 'Steak and Eggs',
    calories: 800,
    protein: 40,
    fat: 40,
    carbs: 20,
    categoryId: 2,
    image: '012.jpg',
  },
  {
    name: 'Stir-Fried Vegetables',
    calories: 400,
    protein: 20,
    fat: 20,
    carbs: 50,
    categoryId: 3,
    image: '013.jpg',
  },
  {
    name: 'Trail Mix',
    calories: 300,
    protein: 15,
    fat: 15,
    carbs: 40,
    categoryId: 4,
    image: '014.jpg',
  },
  {
    name: 'Tuna Salad',
    calories: 500,
    protein: 35,
    fat: 20,
    carbs: 20,
    categoryId: 2,
    image: '015.jpg',
  },
];

async function seedFood() {// create a function to seed the foods table
	try {
		await Food.bulkCreate(foodData);// use the bulkCreate() method to insert the seed data into the foods table
		console.log('Seed data for foods table inserted successfully.');// log a success message to the console
	} catch (error) {
		console.error('Error seeding data for foods table:', error);// log an error message to the console
	}
}

module.exports = seedFood;// export the seedFoods function to be used in other parts of the application