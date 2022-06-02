const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Subscription extends Model {}

Subscription.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    candybox_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'candybox',
        key: 'id'
      }
    },
    users_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'subscription',
  }
);

module.exports = Subscription;
