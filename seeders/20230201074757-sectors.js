'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sectors', [
      {
        id: 1,
        slug: 'restructuring-pre-ipo-ipo-and-right-issue',
        name: 'Restructuring, Pre-IPO, IPO, and Right Issue',
        title: 'Restructuring, Pre-IPO, IPO, and Right Issue',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Restructuring IPO.png',
      },
      {
        id: 2,
        slug: 'alternative-investment',
        name: 'Alternative Investment',
        title: 'Alternative Investment',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Alternative Investment.png',
      },
      {
        id: 3,
        slug: 'financial-services',
        name: 'Financial Services',
        title: 'Financial Services',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Financial Service.png',
      },
      {
        id: 4,
        slug: 'health-and-pharmaceutical',
        name: 'Health and Pharmaceutical',
        title: 'Health and Pharmaceutical',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Health _ Pharm.png',
      },
      {
        id: 5,
        slug: 'biotechnology',
        name: 'Biotechnology',
        title: 'Biotechnology',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Biotechnology.png',
      },
      {
        id: 6,
        slug: 'renewable-energy',
        name: 'Renewable Energy',
        title: 'Renewable Energy',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Renewable Energy.png',
      },
      {
        id: 7,
        slug: 'waste-solution',
        name: 'Waste Solution',
        title: 'Waste Solution',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Waste Solution.png',
      },
      {
        id: 8,
        slug: 'property-investment-and-development',
        name: 'Property Investment and Development',
        title: 'Property Investment and Development',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Property Investment.png',
      },
      {
        id: 9,
        slug: 'electric-vehicle',
        name: 'Electric Vehicle',
        title: 'Electric Vehicle',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Electric Vehicle.png',
      },
      {
        id: 10,
        slug: 'infrastructure',
        name: 'Infrastructure',
        title: 'Infrastructure',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Infrastructure.png',
      },
      {
        id: 11,
        slug: 'information-technology',
        name: 'Information Technology',
        title: 'Information Technology',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Information Technology.png',
      },
      {
        id: 12,
        slug: 'environmental-social-and-governance',
        name: 'Environmental, Social, and Governance',
        title: 'Environmental, Social, and Governance',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Environmental.png',
      },
      {
        id: 13,
        slug: 'food-and-beverange',
        name: 'Food and Beverange',
        title: 'Food and Beverange',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Food _ Beverage.png',
      },
      {
        id: 14,
        slug: 'industrial-gas',
        name: 'Industrial Gas',
        title: 'Industrial Gas',
        description: `Ut nostrud pariatur do aliqua exercitation id duis aliqua deserunt qui cillum dolore sint aliqua. Ut culpa nisi excepteur deserunt cillum dolor ut ullamco. Incididunt cillum voluptate eiusmod et anim tempor laborum quis aliquip consectetur. Aliquip adipisicing ipsum officia minim do ut quis quis est nisi veniam laboris qui non. Dolor aliquip sit reprehenderit reprehenderit eiusmod adipisicing proident officia dolor non occaecat. Qui minim enim nostrud elit exercitation enim ipsum ad.
    Adipisicing consequat deserunt nisi in do ut pariatur consectetur ipsum. Voluptate in ipsum reprehenderit labore id Lorem tempor quis dolor Lorem fugiat tempor ad. Dolore nostrud cupidatat adipisicing sunt duis aliqua.
    Eu reprehenderit cupidatat excepteur tempor est ut magna fugiat. Ad et cillum magna ex qui eu pariatur in. In quis id ipsum sunt dolore veniam nulla id labore labore voluptate cupidatat ut. Ex duis exercitation laborum proident esse anim labore eu aliqua culpa sunt cupidatat reprehenderit. Consectetur pariatur nisi veniam esse ut. Anim irure id consectetur proident Lorem culpa. Ullamco deserunt esse exercitation do in occaecat nisi tempor officia excepteur.`,
        image: '/storage/sector/Home - Industrial Gas.png',
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sectors', null, {})
  },
}
