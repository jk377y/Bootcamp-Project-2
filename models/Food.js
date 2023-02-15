const { Model, DataTypes } = require('sequelize');// import the Model and DataTypes objects from the sequelize package
const sequelize = require('../config/connection');// import the sequelize connection from the config folder

class Food extends Model { }// create the Food model by extending the Model class from sequelize package

Food.init(// initialize the Food model by calling the init() method on the Food class
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
		},
		calories: {// define the calories column with the following properties
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		protein: {// define the protein column with the following properties
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		fat: {// define the fat column with the following properties
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		carbs: {// define the carbs column with the following properties
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		image: {// define the image column with the following properties
			type: DataTypes.STRING,
			allowNull: false,
		},
		categoryId: {// define the categoryId column with the following properties
			type: DataTypes.INTEGER,
			references: {// This sets up the relationship between the Food and Category models
			  model: 'category',// This tells the Food model that the categoryId column references the Category model
			  key: 'id',// This tells the Food model that the categoryId column references the id column in the Category model
			},
		},
	},
	{
		sequelize,// This tells the Food model that it uses the sequelize connection
		freezeTableName: true,
		underscored: false,
		modelName: 'food',
	}
);

module.exports = Food;// export the Food model