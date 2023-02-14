'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        id: 1,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 1,
      },
      {
        id: 2,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 1,
      },
      {
        id: 3,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 1,
      },
      {
        id: 4,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 2,
      },
      {
        id: 5,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 2,
      },
      {
        id: 6,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 2,
      },
      {
        id: 7,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 3,
      },
      {
        id: 8,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 3,
      },
      {
        id: 9,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 3,
      },
      {
        id: 10,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 4,
      },
      {
        id: 11,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 4,
      },
      {
        id: 12,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 4,
      },
      {
        id: 13,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 5,
      },
      {
        id: 14,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 5,
      },
      {
        id: 15,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 5,
      },
      {
        id: 16,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 6,
      },
      {
        id: 17,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 6,
      },
      {
        id: 18,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 6,
      },
      {
        id: 19,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 7,
      },
      {
        id: 20,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 7,
      },
      {
        id: 21,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 7,
      },
      {
        id: 22,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 8,
      },
      {
        id: 23,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 8,
      },
      {
        id: 24,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 8,
      },
      {
        id: 25,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 9,
      },
      {
        id: 26,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 9,
      },
      {
        id: 27,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 9,
      },
      {
        id: 28,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 10,
      },
      {
        id: 29,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 10,
      },
      {
        id: 30,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 10,
      },
      {
        id: 31,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 11,
      },
      {
        id: 32,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 11,
      },
      {
        id: 33,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 11,
      },
      {
        id: 34,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 12,
      },
      {
        id: 35,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 12,
      },
      {
        id: 36,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 12,
      },
      {
        id: 37,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 13,
      },
      {
        id: 38,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 13,
      },
      {
        id: 39,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 13,
      },
      {
        id: 40,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 14,
      },
      {
        id: 41,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 14,
      },
      {
        id: 42,
        title: 'Project Title',
        image: '/storage/sector/project.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 14,
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {})
  },
}
