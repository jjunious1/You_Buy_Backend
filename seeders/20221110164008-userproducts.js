'use strict'
const { User, Products } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await User.findAll({ raw: true })
    const products = await Products.findAll({ raw: true })
    const list = products.map((a) => ({
      productId: a.id,
      userId: users[Math.floor(Math.random() * users.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('userproducts', list)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('userproducts')
  }
}
