// *****Created Product Model

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create candy_category model
class Product extends Model {}

//define table columns
Product.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // user_id: {
  //   type: DataTypes.INTEGER,
  //   foreignKey: true,
  //   references: {
  //     model: "user",
  //     key: "id", 
  //   },
  // },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'product',
}
);

module.exports = Product;
