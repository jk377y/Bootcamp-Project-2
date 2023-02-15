const User = require('./User');// import the User model
const Food = require('./Food');// import the Food model
const Category = require('./Category');// import the Category model

Category.hasMany(Food, {// This sets up the relationship between the Category and Food models
	foreignKey: 'categoryId',// This tells the Food model that the categoryId column references the id column in the Category model
	onDelete: 'CASCADE',// This tells the database to delete the food if the category is deleted
});

Food.belongsTo(Category, {// This sets up the relationship between the Food and Category models
	foreignKey: 'categoryId',// This tells the Food model that the categoryId column references the id column in the Category model
});

module.exports = { User, Food, Category };// export the User, Food, and Category models
