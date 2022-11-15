'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'ownerId'
      })
      Products.hasMany(models.Comment, { foreignKey: 'productId' })
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.STRING,
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Products',
      tableName: 'products'
    }
  )
  return Products
}
