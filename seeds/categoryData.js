const { Category } = require('../models');// import the Category model

const categoryData = [// create an array of objects to seed the categories table
  {
    name: 'Desserts',
  },
  {
    name: 'Entrees',
  },
  {
    name: 'Side Dishes',
  },
  {
    name: 'Snacks',
  },
];

const seedCategory = async () => {// create a function to seed the categories table
  try {
    await Category.bulkCreate(categoryData);// use the bulkCreate() method to insert the seed data into the categories table
    console.log('Seed data for categories table inserted successfully.');// log a success message to the console
  } catch (error) {
    console.error('Error seeding data for categories table:', error);// log an error message to the console
  }
};

module.exports = seedCategory;// export the seedCategory function to be used in other parts of the application
