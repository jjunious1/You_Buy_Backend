'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserProducts.init({
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    wishlist: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserProducts',
  });
  return UserProducts;
};