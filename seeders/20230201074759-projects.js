'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        title: 'IPO preparation & implementation',
        image: '/storage/project/bank-sumut.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 1,
        promotedWeight: 100,
      },
      {
        title: 'E-learning module for Digital Marketing & Web Programming',
        image: '/storage/project/YPII.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 11,
        promotedWeight: 99,
      },
      {
        title: 'ESG & GRESB',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 12,
        promotedWeight: 98,
      },
      {
        title:
          'Penyusunan Kebijakan Environmental, Social and Governance (ESG) level Fund',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 12,
      },
      {
        title:
          'Penyusunan Kebijakan Perusahaan pada Special Purpose Company (SPC)',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Jasa Konsultan dan Technical Assistance Gresb Assessment, Serta Benchmarking ESG Provider Lainnya untuk Reksadana Penyertaan Terbatas (RDPT) Infrastruktur Tirta Banyubiru Mandiri',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Jasa Konsultan dan Technical Assistance Gresb Assessment, Serta Benchmarking ESG Provider Lainnya untuk Reksadana Penyertaan Terbatas (RDPT) Mandiri Infrastruktur Ekuitas',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Jasa Konsultan dan Technical Assistance Gresb Assessment, Serta Benchmarking ESG Provider Lainnya untuk Reksadana Penyertaan Terbatas (RDPT) Mandiri Infrastruktur Ekuitas',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Penyusunan Laporan Sektor Riil pada Badan Usaha Jalan Tol (BUJT)',
        image: '/storage/project/LMJ.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 10,
      },
      {
        title: 'Penyusunan Investment Teaser Algae',
        image: '/storage/project/MoBiol.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 2,
      },
      {
        title: 'Jasa Pembuatan Website',
        image: '/storage/project/csu.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 11,
      },
      {
        title: 'Financial Advisor',
        image: '/storage/project/csu.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Penyusunan Laporan Sektor Riil pada Badan Usaha Jalan Tol (BUJT)',
        image: '/storage/project/danareksa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title: 'Penyusunan Laporan Sektor Riil pada sektor energi (PLTU)',
        image: '/storage/project/danareksa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title: 'Penyusunan Investment Teaser Kazuhiro',
        image: '/storage/project/Kazuhiro.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 2,
      },
      {
        title:
          'Penyusunan Kajian DIRE Syariah dengan Underlying Investasi Gedung Perkantoran',
        image: '/storage/project/BPKH.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 2,
      },
      {
        title:
          'Penyusunan Kajian KIK - EBAS (USD) dengan underlying investasi Power Plant Rekind Daya Mamuju (RDM)',
        image: '/storage/project/BPKH.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 2,
      },
      {
        title:
          'Penyusunan Kajian Pengukuran Risiko Portofolio Sukuk Korporasi Berbasis VAR',
        image: '/storage/project/BPKH.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 2,
      },
      {
        title:
          'Pengembangan Penyaluran Kredit PK kepada target UKM binaan Kimia Farma',
        image: '/storage/project/KImia Farma.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Financial Advisor & Reviewer Financial Projection Divestasi Atas Kepemilikan PT Jasa Sarana di PT Jasa Medivest',
        image: '/storage/project/Jasa sarana.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title: 'Penyusunan Kajian Penyertaan Modal pada Jalan Tol Getaci',
        image: '/storage/project/Jasa sarana.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 2,
      },
      {
        title:
          'Penyusunan Kajian Review Feasibility Study (FS) Bandung Rapit Transit (BRT) Bandung Raya',
        image: '/storage/project/Jasa sarana.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 10,
      },
      {
        title: 'Financial Advisor Penerbitan Saham seri B Bank Bengkulu',
        image: '/storage/project/Bank Bengkulu.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title: 'Financial Advisor Assessment Strategic Partner Bank Bengkulu',
        image: '/storage/project/Bank Bengkulu.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Penyusunan Rencana Bisnis, Kajian Proyeksi Keuangan & Kerangka Pemantauan Internal (Business Plan, Financial Projection Review & Internal Monitoring Framework)',
        image: '/storage/project/Bumiyasa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 6,
      },
      {
        title:
          'Penyusunan Kebijakan dan SOP Environmental, Social and Governance (ESG)',
        image: '/storage/project/Bumiyasa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 12,
      },
      {
        title: 'Penyusunan Corporate Plan PT Usaha Gedung Mandiri',
        image: '/storage/project/UG Mandiri.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 1,
      },
      {
        title:
          'Jasa Konsultan Training & Job Matching for ICT Bridges to the Future Project (BTF)',
        image: '/storage/project/YPII.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 2,
        sectorId: 11,
      },
      {
        title:
          'Jasa Konsultan Review dan laporan sektor riil, sebagai bentuk pemantauan atas investasi pada Waskita Karya Toll Road',
        image: '/storage/project/danareksa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Jasa Konsultan Review dan laporan sektor riil, sebagai bentuk pemantauan atas investasi pada 5 ruas jalan tol Trans Jawa',
        image: '/storage/project/Mandiri investasi.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Konsultan Bisnis dan Keuangan (Financial & Business Advisor) Dalam Rangka Penawaran Publik (IPO)',
        image: '/storage/project/bank-sumut.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 1,
      },
      {
        title: 'Redesain Kebijakan dan Proses Kredit-Pembiayaan Bank Sumut',
        image: '/storage/project/bank-sumut.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Jasa Konsultansi Assessment Strategic Partner Dalam Rangka Penguatan Permodalan Bank PT Bank Pembangunan Daerah Bengkulu',
        image: '/storage/project/Bank Bengkulu.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Jasa Konsultansi Peningkatan Governance atau Tata Kelola Dalam Pengelolaan dana kelolaan yayasan IFGF (Gereja)',
        image: '/storage/project/IFGF.jpg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Jasa Konsultansi Penyusunan Investment Teaser dan Perhitungan Valuasi',
        image: '/storage/project/raiz.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 2,
      },
      {
        title:
          'Jasa Konsultansi Penyusunan Pitch Deck dan Kerjasama Operasional dengan TSJS untuk Solo Safari Zoo',
        image: '/storage/project/tamansafarisolo.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 10,
      },
      {
        title:
          'Jasa Konsultansi Penyusunan Pitch Deck dan business plan untuk pengembangan bisnis Falga Group',
        image: '/storage/project/falga.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 11,
      },
      {
        title: 'Jasa Pembuatan Website',
        image: '/storage/project/falga.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 11,
      },
      {
        title: 'Jasa Konsultasi Speed Deck',
        image: '/storage/project/falga.svg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 8,
      },
      {
        title:
          'Background Channel Check & Business Due Diligence Objective to acquire securities and asset management company in Indonesia',
        image: '/storage/project/hanhwa.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 2,
      },
      {
        title: 'IPO',
        image: '/storage/project/menn.webp',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 1,
      },
      {
        title: 'Jasa Pembuatan Company Profile & Website',
        image: '/storage/project/menn.webp',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 11,
      },
      {
        title: 'Jasa Konsultasi Keuangan Project Pembuatan Jalur Pipa Gas',
        image: '/storage/project/pae.jpeg',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 14,
      },
      {
        title: 'Jasa Pengembangan Creative Content Investment Education',
        image: '/storage/project/btpn.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 1,
        sectorId: 3,
      },
      {
        title:
          'Jasa Konsultant Penyusunan Investment Teaser dalam rangka Equity Story Growth IPO',
        image: '/storage/project/united-bike.png',
        startAt: new Date(2020, 12),
        endAt: new Date(2021, 4),
        categoryId: 3,
        sectorId: 2,
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await Promise.all([
        queryInterface.bulkDelete('Projects', null, { transaction }),
        queryInterface.sequelize.query(
          'ALTER TABLE Projects AUTO_INCREMENT = 1',
          { transaction }
        ),
      ])
      await transaction.commit()
    } catch (e) {
      await transaction.rollback()
      throw e
    }
  },
}
