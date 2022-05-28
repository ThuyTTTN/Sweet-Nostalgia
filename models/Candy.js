// Modules to require
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create candy model
class Candy extends Model {}

//define table columns
Candy.init({
  // defines id column
  id: {
    // defines type of data in the column
    type: DataTypes.INTEGER,
    // does not allow value to be empty
    allowNull: false,
    // makes it the primary key
    primaryKey: true,
    // auto increments the id by 1
    autoIncrement: true,
  },
  // defines the category_decade column
  category_decade: {
    // defines type of data in the column
    type: DataTypes.STRING,
    // does not allow value to be empty
    allowNull: false,
  }
}, {
  // adding our database connection to our model... this is ES6 shorthand for sequelize: sequelize 
  sequelize,
  //  the purpose of timestamp is to automatically add the columns "created_at" and "updated_at" to the table
  timestamp: false,
  // the purpose of the freezeTableName is to freeze the table name to the name of the model
  freezeTableName: true,
  // the purpose of the underscored is to make the table name lowercase and use underscores instead of camelCase
  underscore: true,
  // the purpose of the modelName is to change the name of the table to the name of the model
  modelName: "candy",
});

module.exports = Candy;