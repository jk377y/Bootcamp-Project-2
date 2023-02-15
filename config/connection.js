const Sequelize = require('sequelize');// import the Sequelize constructor from the library

require('dotenv').config();// import the dotenv package

// create connection to our db
const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)// if JAWSDB_URL is defined, use it
	: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {// otherwise, use the local database
			host: 'localhost',
			dialect: 'mysql',
			port: 3306,
	  });

module.exports = sequelize;// export the connection to be used in other files