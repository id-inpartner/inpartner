'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        id: 1,
        title: 'IPO preparation & implementation',
        image: '/storage/project/bank-sumut.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 1,
        promotedWeight: 100,
      },
      {
        id: 2,
        title: 'E-learning module for Digital Marketing & Web Programming',
        image: '/storage/project/YPII.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 11,
        promotedWeight: 99,
      },
      {
        id: 3,
        title: 'ESG & GRESB',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 12,
        promotedWeight: 98,
      },
      {
        id: 4,
        title: 'Project Title',
        image: '/storage/project/Berdikari.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 2,
      },
      {
        id: 5,
        title: 'Project Title',
        image: '/storage/project/BI.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 2,
      },
      {
        id: 6,
        title: 'Project Title',
        image: '/storage/project/BKPM.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 2,
      },
      {
        id: 7,
        title:
          'Penyusunan Kajian DIRE Syariah dengan Underlying Investasi Gedung Perkantoran',
        image: '/storage/project/BPKH.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 3,
      },
      {
        id: 8,
        title:
          'Penyusunan Rencana Bisnis, Kajian Proyeksi Keuangan & Kerangka Pemantauan Internal (Business Plan, Financial Projection Review & Internal Monitoring Framework)',
        image: '/storage/project/Bumiyasa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 3,
      },
      {
        id: 9,
        title:
          'Financial Advisor & Reviewer Financial Projection Divestasi Atas Kepemilikan PT Jasa Sarana di PT Jasa Medivest',
        image: '/storage/project/Jasa sarana.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 3,
      },
      {
        id: 10,
        title: 'Project Title',
        image: '/storage/project/Jasamarga Pandaan.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 4,
      },
      {
        id: 11,
        title: 'Project Title',
        image: '/storage/project/Jasamarga.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 4,
      },
      {
        id: 12,
        title: 'Project Title',
        image: '/storage/project/Jawa Timur.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 4,
      },
      {
        id: 13,
        title: 'Project Title',
        image: '/storage/project/JNK.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 5,
      },
      {
        id: 14,
        title: 'Project Title',
        image: '/storage/project/JSN.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 5,
      },
      {
        id: 15,
        title: 'Penyusunan Investment Teaser Kazuhiro',
        image: '/storage/project/Kazuhiro.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 5,
      },
      {
        id: 16,
        title: 'Project Title',
        image: '/storage/project/Kemenkopumkm.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 6,
      },
      {
        id: 17,
        title: 'Project Title',
        image: '/storage/project/Kemenpora.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 6,
      },
      {
        id: 18,
        title:
          'Pengembangan Penyaluran Kredit PK kepada target UKM binaan Kimia Farma',
        image: '/storage/project/KImia Farma.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 6,
      },
      {
        id: 19,
        title: 'Project Title',
        image: '/storage/project/LMJ.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 7,
      },
      {
        id: 20,
        title: 'Project Title',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 7,
      },
      {
        id: 21,
        title: 'Penyusunan Investment Teaser Algae',
        image: '/storage/project/MoBiol.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 7,
      },
      {
        id: 22,
        title: 'Project Title',
        image: '/storage/project/TMJ.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 8,
      },
      {
        id: 23,
        title: 'Project Title',
        image: '/storage/project/Trans Optima Luhur.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 8,
      },
      {
        id: 24,
        title: 'Penyusunan Corporate Plan PT Usaha Gedung Mandiri',
        image: '/storage/project/UG Mandiri.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 8,
      },
      {
        id: 25,
        title:
          'Jasa Konsultan Training & Job Matching for ICT Bridges to the Future Project (BTF)',
        image: '/storage/project/YPII.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 9,
      },
      {
        id: 26,
        title: 'Project Title',
        image: '/storage/project/Adiyasa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 9,
      },
      {
        id: 27,
        title: 'Financial Advisor Penerbitan Saham seri B Bank Bengkulu',
        image: '/storage/project/Bank Bengkulu.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 9,
      },
      {
        id: 28,
        title: 'Project Title',
        image: '/storage/project/Batan.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 10,
      },
      {
        id: 29,
        title: 'Project Title',
        image: '/storage/project/csu.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 10,
      },
      {
        id: 30,
        title:
          'Penyusunan Laporan Sektor Riil pada Badan Usaha Jalan Tol (BUJT)',
        image: '/storage/project/danareksa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 10,
      },
      {
        id: 31,
        title:
          'Jasa Konsultansi Penyusunan Pitch Deck dan business plan untuk pengembangan bisnis Falga Group',
        image: '/storage/project/falga.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 11,
      },
      {
        id: 32,
        title: 'Project Title',
        image: '/storage/project/giz.gif',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 11,
      },
      {
        id: 33,
        title: 'Jasa Pembuatan Company Profile & Website',
        image: '/storage/project/menn.webp',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 11,
      },
      {
        id: 34,
        title: 'Project Title',
        image: '/storage/project/raiz.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 12,
      },
      {
        id: 35,
        title: 'Project Title',
        image: '/storage/project/Jawa Timur.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 12,
      },
      {
        id: 36,
        title: 'Project Title',
        image: '/storage/project/Bumiyasa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 12,
      },
      {
        id: 37,
        title: 'Project Title',
        image: '/storage/project/Kazuhiro.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 13,
      },
      {
        id: 38,
        title: 'Project Title',
        image: '/storage/project/JSN.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 13,
      },
      {
        id: 39,
        title: 'Project Title',
        image: '/storage/project/LMJ.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 13,
      },
      {
        id: 40,
        title: 'Project Title',
        image: '/storage/project/Kemenpora.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 14,
      },
      {
        id: 41,
        title: 'Project Title',
        image: '/storage/project/MoBiol.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 14,
      },
      {
        id: 42,
        title: 'Project Title',
        image: '/storage/project/UG Mandiri.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 14,
      },
      {
        id: 43,
        title:
          'Penyusunan Kebijakan Perusahaan pada Special Purpose Company (SPC)',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 12,
      },
      {
        id: 44,
        title:
          'Jasa Konsultan dan Technical Assistance Gresb Assessment, Serta Benchmarking ESG Provider Lainnya untuk Reksadana Penyertaan Terbatas (RDPT) Infrastruktur Tirta Banyubiru Mandiri',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 12,
      },
      {
        id: 45,
        title:
          'Jasa Konsultan dan Technical Assistance Gresb Assessment, Serta Benchmarking ESG Provider Lainnya untuk Reksadana Penyertaan Terbatas (RDPT) Mandiri Infrastruktur Ekuitas',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 12,
      },
      {
        id: 46,
        title: 'Penyusunan Laporan Sektor Riil pada sektor energi (PLTU)',
        image: '/storage/project/danareksa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 10,
      },
      {
        id: 47,
        title:
          'Penyusunan Kajian KIK - EBAS (USD) dengan underlying investasi Power Plant Rekind Daya Mamuju (RDM)',
        image: '/storage/project/BPKH.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 3,
      },
      {
        id: 48,
        title:
          'Penyusunan Kajian Pengukuran Risiko Portofolio Sukuk Korporasi Berbasis VAR',
        image: '/storage/project/BPKH.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 3,
      },
      {
        id: 49,
        title: 'Penyusunan Kajian Penyertaan Modal pada Jalan Tol Getaci',
        image: '/storage/project/Jasa sarana.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 3,
      },
      {
        id: 50,
        title:
          'Penyusunan Kajian Review Feasibility Study (FS) Bandung Rapit Transit (BRT) Bandung Raya',
        image: '/storage/project/Jasa sarana.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 3,
      },
      {
        id: 51,
        title: 'Financial Advisor Assessment Strategic Partner Bank Bengkulu',
        image: '/storage/project/Bank Bengkulu.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 9,
      },
      {
        id: 52,
        title:
          'Penyusunan Kebijakan dan SOP Environmental, Social and Governance (ESG)',
        image: '/storage/project/Bumiyasa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 3,
      },
      {
        id: 53,
        title:
          'Jasa Konsultan Review dan laporan sektor riil, sebagai bentuk pemantauan atas investasi pada Waskita Karya Toll Road',
        image: '/storage/project/danareksa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 10,
      },
      {
        id: 54,
        title:
          'Jasa Konsultansi Assessment Strategic Partner Dalam Rangka Penguatan Permodalan Bank PT Bank Pembangunan Daerah Bengkulu',
        image: '/storage/project/Bank Bengkulu.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 9,
      },
      {
        id: 55,
        title:
          'Penyusunan Kebijakan Environmental, Social and Governance (ESG) level Fund',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 12,
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {})
  },
}
