'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Bob Smith',
        email: 'bobsmith1@yahoo.com',
        passwordDigest:
          '$2b$10$JGTZsvsQsRdTGiCW4Bkbi.ws03g78R6IRsm5Esf8R6xtrcBLcqjIO'
      },
      {
        name: 'Steven Jackson',
        email: 'stevenj97@yahoo.com',
        passwordDigest:
          '$2b$10$EWIPlrqAFZNVkXEl/tlkT.5ATuRiI6VmSrzjOurEKix.XCRw1WXde'
      },
      {
        name: 'Daniel Jones',
        email: 'djonesman@yahoo.com',
        passwordDigest:
          '$2b$10$upNdxV6umIjWLCWpQNafhe4VVaLILepqsGxDEOcOizQottIzGTFDe'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users')
  }
}
