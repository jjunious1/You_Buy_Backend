'use strict'
const { Model } = require('sequelize')
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
  UserProducts.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id'
        }
      },
      wishList: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'UserProducts',
      tableName: 'userproducts'
    }
  )
  return UserProducts
}
