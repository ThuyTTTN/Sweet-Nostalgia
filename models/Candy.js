const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create candy model
class Candy extends Model {}

//define table columns

Candy.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_decade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamp: false,
    freezeTableName: true,
    underscore: true,
    modelName: "candy",
  }
);

model.exports = Candy;
