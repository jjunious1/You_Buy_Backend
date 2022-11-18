'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('comments', 'productId', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'products',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('comments', 'productId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'products',
        key: 'id'
      }
    })
  }
}
