'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        id: 1,
        name: 'Business and Management Consulting',
        title: 'Business and Management Consulting',
      },
      {
        id: 2,
        name: 'Capacity Building',
        title: 'Capacity Building (The Executive Business Program)',
      },
      { id: 3, name: 'Investment', title: 'Investment' },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {})
  },
}
