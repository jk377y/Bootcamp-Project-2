const { Model, DataTypes } = require('sequelize');// import the Model and DataTypes objects from the sequelize package
const sequelize = require('../config/connection');// import the sequelize connection from the config folder

class Category extends Model { }// create the Category model by extending the Model class from sequelize package

Category.init(// initialize the Category model by calling the init() method on the Category class
	{
		id: {// define the id column with the following properties
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {// define the name column with the following properties
			type: DataTypes.STRING,
			allowNull: false,
		}
	},
	{// define the configuration options for the Category model
		sequelize,
		freezeTableName: true,
		underscored: false,
		modelName: 'category',
	}
);

module.exports = Category;// export the Category model to be used in other parts of the application
