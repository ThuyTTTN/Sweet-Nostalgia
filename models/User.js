const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

//create our user model
class User extends Model {
  //  the method that will hash the password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
}
}

//define table columns and configuration
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      dataType: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      dataType: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.pasword = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamp: false,
    freezeTableName: true,
    underscore: true,
    modelName: "user",
  }
);

module.exports = User;
