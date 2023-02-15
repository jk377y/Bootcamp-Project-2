const sequelize = require('../config/connection');// import the sequelize connection from the config folder
const seedFood = require('./foodData');// import the seedFood function from the foodData.js file
const seedCategory = require('./categoryData');// import the seedCategory function from the categoryData.js file

const seedAll = async () => {// Define an asynchronous function to seed the database
  try {
      await sequelize.sync({ force: true });// Synchronize the database, dropping any existing tables and recreating them
      console.log('\n ===== DATABASE SYNCED =====\n');// Log a message to the console

      await seedCategory();// Seed the database with the "seedCategory" array
      console.log('\n ===== CATEGORY SEEDED =====\n');// Log a message to the console

      await seedFood();// Seed the database with the "seedFood" array
      console.log('\n ===== FOOD SEEDED =====\n');// Log a message to the console

      process.exit(0);// Exit the process
  } catch (error) {
      console.error(error);
      process.exit(1);
      }
};
seedAll();// call the seedAll function to seed the database with data