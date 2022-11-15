'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('comments', [
      {
        name: 'Bob Smith',
        description: 'Old and not worth it.',
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Steven Jackson',
        description: 'Best headphones I ever purchased!',
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Daniel Jones',
        description: 'Do not even attempt to purchase this broken computer.',
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments')
  }
}
