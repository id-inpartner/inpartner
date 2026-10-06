interface Translation {
  readonly en: string
  readonly ko: string
}

const translations: Record<string, Translation> = {
  'Penyusunan Laporan Sektor Riil pada Badan Usaha Jalan Tol (BUJT)': {
    en: 'Real Sector Comprehensive Advisory & Impact Assessment for Toll Road Concessionaires (BUJT)',
    ko: '인도네시아 유료도로공사(BUJT) 실물경제 부문 실사 및 자문 보고서 작성',
  },
  'Penyusunan Kajian Review Feasibility Study (FS) Bandung Rapit Transit (BRT) Bandung Raya':
    {
      en: 'Feasibility Study (FS) Review & Economic Viability Analysis for Greater Bandung Rapid Transit (BRT)',
      ko: '반둥 광역 간선급행버스체계(BRT) 사업 타당성 조사(FS) 검토 및 경제성 분석',
    },
  'Penyusunan Kajian Penyertaan Modal pada Jalan Tol Getaci': {
    en: 'Capital Injection Feasibility & Financial Assessment for Gedebage–Tasikmalaya–Cilacap (Getaci) Toll Road',
    ko: '게타치(Getaci) 고속도로 지분 투자 및 출자 타당성 평가 자문',
  },
  'Penyusunan Investment Teaser Kazuhiro': {
    en: 'Strategic Investment Teaser & Capital Sourcing Formulation for Project Kazuhiro',
    ko: '카즈히로(Kazuhiro) 프로젝트 투자 유치 티저(Teaser) 및 재무 구조 설계',
  },
  'Penyusunan Kebijakan dan SOP Environmental, Social and Governance (ESG)': {
    en: 'Corporate ESG Policy Framework & Standard Operating Procedures (SOP) Development',
    ko: '기업 ESG 정책 프레임워크 수립 및 표준운영절차(SOP) 구축 자문',
  },
  'Jasa Konsultansi Penyusunan Investment Teaser dan Perhitungan Valuasi': {
    en: 'Corporate Valuation Modeling & Investment Teaser Preparation for Private Equity Placement',
    ko: '기업 가치평가(Valuation) 모델링 및 사모펀드 투자 유치 티저 작성',
  },
  'Jasa Konsultansi Penyusunan Pitch Deck dan business plan untuk pengembangan bisnis Falga Group':
    {
      en: 'Corporate Business Plan & Investor Pitch Deck Formulation for Falga Group Expansion',
      ko: '팔가(Falga) 그룹 사업 확장용 비즈니스 플랜 수립 및 투자자 피치덱 제작',
    },
  'Kajian Penyediaan Infrastruktur Tempat Pengolahan dan Pemrosesan Akhir Sampah (TPPAS) Regional Lulut Nambo':
    {
      en: 'Regional Waste Management & Processing Infrastructure (TPPAS Lulut Nambo) Feasibility Review',
      ko: '룰룻 남보(Lulut Nambo) 지역 폐기물 종합 처리 인프라 타당성 검토',
    },
  'Jasa Konsultasi Keuangan Project Pembuatan Jalur Pipa Gas': {
    en: 'Project Financial Modeling & Capital Advisory for Industrial Natural Gas Pipeline Development',
    ko: '산업용 천연가스 배관망 건설 프로젝트 재무 자문 및 타당성 분석',
  },
  'Jasa Pembuatan Website': {
    en: 'Corporate Digital Architecture & Enterprise Web Platform Engineering',
    ko: '기업 디지털 플랫폼 구축 및 엔터프라이즈 웹 아키텍처 엔지니어링',
  },
  'Financial Advisor Penerbitan Saham seri B Bank Bengkulu': {
    en: 'Financial Advisory for Series B Share Issuance of Bank Bengkulu',
    ko: '방크 벵쿨루(Bank Bengkulu) B시리즈 주식 발행 재무 자문',
  },
  'Financial Advisor Assessment Strategic Partner Bank Bengkulu': {
    en: 'Strategic Partner Assessment & Capital Strengthening Advisory for Bank Bengkulu',
    ko: '방크 벵쿨루 전략적 파트너십 평가 및 자본 확충 자문',
  },
  'Penyusunan Corporate Plan PT Usaha Gedung Mandiri': {
    en: 'Corporate Strategic Plan Formulation for PT Usaha Gedung Mandiri',
    ko: 'PT Usaha Gedung Mandiri 기업 중장기 전략 계획 수립',
  },
  'IPO preparation & implementation': {
    en: 'IPO Preparation & Implementation Advisory',
    ko: 'IPO(기업공개) 준비 및 상장 실행 자문',
  },
  'ESG & GRESB': {
    en: 'ESG & GRESB Framework Assessment',
    ko: 'ESG & GRESB 프레임워크 평가 및 자문',
  },
  'Penyusunan Kebijakan Environmental, Social and Governance (ESG) level Fund':
    {
      en: 'Fund-Level Environmental, Social, and Governance (ESG) Policy Formulation',
      ko: '펀드 레벨 환경·사회·지배구조(ESG) 정책 및 프레임워크 수립',
    },
  'Penyusunan Kebijakan Perusahaan pada Special Purpose Company (SPC)': {
    en: 'Corporate Governance Policy Formulation for Special Purpose Company (SPC)',
    ko: '특수목적법in(SPC) 기업 지배구조 및 정책 수립',
  },
  'Jasa Konsultan Training & Job Matching for ICT Bridges to the Future Project (BTF)':
    {
      en: 'Executive Consultancy, Training & Job Matching for ICT Bridges to the Future (BTF)',
      ko: 'ICT 브릿지 투 더 퓨처(BTF) 프로젝트 임원 자문 및 직무 매칭',
    },
  'E-learning module for Digital Marketing & Web Programming': {
    en: 'Executive E-Learning Architecture for Digital Marketing & Web Engineering',
    ko: '디지털 마케팅 및 웹 엔지니어링 임원 e-러닝 아키텍처 구축',
  },
  'Jasa Konsultan dan Technical Assistance Gresb Assessment, Serta Benchmarking ESG Provider Lainnya untuk Reksadana Penyertaan Terbatas (RDPT) Infrastruktur Tirta Banyubiru Mandiri':
    {
      en: 'Technical Advisory for GRESB Assessment & ESG Benchmarking for RDPT Infrastruktur Tirta Banyubiru Mandiri',
      ko: 'RDPT 인프라 티르타 바뉴비루 만디리를 위한 GRESB 평가 기술 자문 및 타 ESG 평가사 벤치마킹',
    },
  'Jasa Konsultan dan Technical Assistance Gresb Assessment, Serta Benchmarking ESG Provider Lainnya untuk Reksadana Penyertaan Terbatas (RDPT) Mandiri Infrastruktur Ekuitas':
    {
      en: 'Technical Advisory for GRESB Assessment & ESG Benchmarking for RDPT Mandiri Infrastruktur Ekuitas',
      ko: 'RDPT 만디리 인프라스트럭처 에쿼티를 위한 GRESB 평가 기술 자문 및 글로벌 ESG 벤치마킹',
    },
  'Penyusunan Investment Teaser Algae': {
    en: 'Strategic Investment Teaser Formulation for Microalgae Biotechnology Project',
    ko: '미세조류(Algae) 바이오테크 프로젝트 투자 유치 티저(Teaser) 작성',
  },
  'Penyusunan Laporan Sektor Riil pada sektor energi (PLTU)': {
    en: 'Real Sector Comprehensive Economic Advisory Report for Coal-Fired Power Plant (PLTU)',
    ko: '석탄화력발전소(PLTU) 에너지 부문 실물경제 실사 및 자문 보고서 작성',
  },
  'Penyusunan Kajian DIRE Syariah dengan Underlying Investasi Gedung Perkantoran':
    {
      en: 'Sharia Real Estate Investment Trust (DIRE Syariah) Study with Office Tower Underlying Asset',
      ko: '오피스 빌딩 기초자산 기반 샤리아 부동산투자신탁(DIRE Syariah) 타당성 분석',
    },
  'Penyusunan Kajian KIK - EBAS (USD) dengan underlying investasi Power Plant Rekind Daya Mamuju (RDM)':
    {
      en: 'USD-Denominated Asset-Backed Securities (KIK-EBAS) Feasibility Study for Rekind Daya Mamuju Power Plant',
      ko: '레킨드 다야 마무주(RDM) 발전소 기반 USD 자산유동화증권(KIK-EBAS) 발행 타당성 연구',
    },
  'Penyusunan Kajian Pengukuran Risiko Portofolio Sukuk Korporasi Berbasis VAR':
    {
      en: 'Value-at-Risk (VaR) Based Portfolio Risk Measurement Study for Corporate Sukuk',
      ko: 'VaR(Value at Risk) 기반 기업 수쿠크(Sukuk) 포트폴리오 리스크 측정 모델링',
    },
  'Pengembangan Penyaluran Kredit PK kepada target UKM binaan Kimia Farma': {
    en: 'Partnership Program (PK) Credit Disbursement Expansion Framework for Kimia Farma MSMEs',
    ko: '키미아 파르마(Kimia Farma) 육성 중소기업 대상 상생 파트너십 대출 프로그램 고도화',
  },
  'Financial Advisor & Reviewer Financial Projection Divestasi Atas Kepemilikan PT Jasa Sarana di PT Jasa Medivest':
    {
      en: "Financial Advisory & Projection Review for PT Jasa Sarana's Equity Divestment in PT Jasa Medivest",
      ko: 'PT Jasa Sarana의 PT Jasa Medivest 지분 매각(Divestment) 재무 자문 및 재무 전망 검토',
    },
  'Penyusunan Rencana Bisnis, Kajian Proyeksi Keuangan & Kerangka Pemantauan Internal (Business Plan, Financial Projection Review & Internal Monitoring Framework)':
    {
      en: 'Corporate Business Plan, Financial Projection Review & Internal Monitoring Framework Formulation',
      ko: '기업 중장기 비즈니스 플랜, 재무 전망 검토 및 내부 성과 모니터링 프레임워크 구축',
    },
  'Jasa Konsultan Review dan laporan sektor riil, sebagai bentuk pemantauan atas investasi pada Waskita Karya Toll Road':
    {
      en: 'Real Sector Investment Monitoring & Economic Review Report for Waskita Toll Road Concessions',
      ko: '와스키타 톨로드(Waskita Toll Road) 투자 모니터링 및 실물경제 부문 실사 보고서 작성',
    },
  'Jasa Konsultan Review dan laporan sektor riil, sebagai bentuk pemantauan atas investasi pada 5 ruas jalan tol Trans Jawa':
    {
      en: 'Real Sector Investment Review & Monitoring Report for 5 Trans-Java Toll Road Sections',
      ko: '트랜스 자바(Trans Java) 5개 고속도로 구간 투자 모니터링 및 실물경제 영향 평가 보고서',
    },
  'Konsultan Bisnis dan Keuangan (Financial & Business Advisor) Dalam Rangka Penawaran Publik (IPO)':
    {
      en: 'Comprehensive Financial & Business Advisory for Initial Public Offering (IPO)',
      ko: '기업공개(IPO) 상장 준비를 위한 종합 비즈니스 및 재무 자문',
    },
  'Redesain Kebijakan dan Proses Kredit-Pembiayaan Bank Sumut': {
    en: 'Credit & Financing Policy & Workflow Redesign for Bank Sumut',
    ko: '방크 수무트(Bank Sumut) 여신 및 대출 심사 프로세스 전면 개편 자문',
  },
  'Jasa Konsultansi Assessment Strategic Partner Dalam Rangka Penguatan Permodalan Bank PT Bank Pembangunan Daerah Bengkulu':
    {
      en: 'Strategic Partner Assessment & Capital Strengthening Advisory for Bank Bengkulu',
      ko: '방크 벵쿨루(Bank Bengkulu) 자본 확충 및 전략적 파트너 유치 평가 자문',
    },
  'Jasa Konsultansi Peningkatan Governance atau Tata Kelola Dalam Pengelolaan dana kelolaan yayasan IFGF (Gereja)':
    {
      en: 'Governance Enhancement Advisory for IFGF Foundation Managed Funds',
      ko: 'IFGF 재단 기금 운용 거버넌스 및 투명성 강화 자문',
    },
  'Jasa Konsultansi Penyusunan Pitch Deck dan Kerjasama Operasional dengan TSJS untuk Solo Safari Zoo':
    {
      en: 'Investor Pitch Deck & Operational Partnership Formulation with TSJS for Solo Safari Zoo',
      ko: '솔로 사파리 동물원(Solo Safari Zoo) TSJS 운영 협력 및 투자 유치 피치덱 수립',
    },
  'Jasa Konsultasi Speed Deck': {
    en: 'Executive Speed Pitch Deck & Strategic Investor Presentation Advisory',
    ko: '투자 유치용 핵심 스피드 덱(Speed Deck) 및 전략적 IR 자료 제작 자문',
  },
  'Background Channel Check & Business Due Diligence Objective to acquire securities and asset management company in Indonesia':
    {
      en: 'Commercial Due Diligence & Channel Check for Acquisition of Securities and Asset Management Firms',
      ko: '인도네시아 증권사 및 자산운용사 인수를 위한 비즈니스 정밀 실사 및 채널 체크',
    },
  'Jasa Pembuatan Company Profile & Website': {
    en: 'Corporate Identity, Digital Company Profile & Enterprise Website Development',
    ko: '기업 브랜딩, 디지털 회사 소개서 및 엔터프라이즈 웹사이트 구축',
  },
  'Jasa Pengembangan Creative Content Investment Education': {
    en: 'Creative Content Architecture & Educational Modules for Investment Programs',
    ko: '투자 교육용 크리에이티브 콘텐츠 및 디지털 학습 모듈 개발',
  },
  'Jasa Konsultant Penyusunan Investment Teaser dalam rangka Equity Story Growth IPO':
    {
      en: 'Equity Story & Strategic Investment Teaser Preparation for Growth IPO',
      ko: '성장형 IPO 주식 스토리(Equity Story) 설계 및 투자 유치 티저(Teaser) 작성',
    },
}

export function translateProjectTitle(
  originalTitle: string,
  locale: string = 'en'
): string {
  if (!originalTitle) return ''
  const trimmed = originalTitle.trim()
  const match = translations[trimmed]
  if (!match) {
    // Attempt relaxed match if exact match not found
    const lowerTrimmed = trimmed.toLowerCase()
    for (const key of Object.keys(translations)) {
      if (key.toLowerCase() === lowerTrimmed) {
        const found = translations[key]
        if (locale === 'ko') {
          return found.ko || found.en || originalTitle
        }
        return found.en || originalTitle
      }
    }
    return originalTitle
  }
  if (locale === 'ko') {
    return match.ko || match.en || originalTitle
  }
  return match.en || originalTitle
}
