'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Basketball',
        description: 'Rare basketball from 2008 NBA game',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H-TFoY7P33CJgDqn_AwbpgHaFj%26pid%3DApi&f=1&ipt=0724b8cd80be0223bb8201e51ceb918d2bf7e1fef82c72bedf545e1698e44385&ipo=images',
        price: '299.99',
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Headphones',
        description: 'New headphones, still in box',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hocoaccessories.com%2Fwp-content%2Fuploads%2F2020%2F12%2Fhoco-w29-outstanding-wireless-headphones-buttons.jpg&f=1&nofb=1&ipt=888c1bd3619b0099cab4d26bcfbe878155bcf5061af2842638de094685d570fc&ipo=images',
        price: '55.00',
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vintage Computer',
        description: 'Cool computer from the 90s',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Jnho3RXStHll9hhSUJXGnwHaHa%26pid%3DApi&f=1&ipt=a776070d3a9c372412f1708d2ecdc1551ff100a367ed963865dab0b61e354cc0&ipo=images',
        price: '100.00',
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products')
  }
}
