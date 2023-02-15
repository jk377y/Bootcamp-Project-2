const User = require('./User');
const Food = require('./Food');
const Category = require('./Category');

Category.hasMany(Food, {
	foreignKey: 'categoryId',
	onDelete: 'CASCADE',
});

Food.belongsTo(Category, {
	foreignKey: 'categoryId',
});

module.exports = { User, Food, Category };
