'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Products, { foreignKey: 'productId' })
    }
  }
  Comment.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments'
    }
  )
  return Comment
}
