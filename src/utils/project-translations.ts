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
    ko: '특수목적법인(SPC) 기업 지배구조 및 정책 수립',
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
}

export function translateProjectTitle(
  originalTitle: string,
  locale: string = 'en'
): string {
  if (!originalTitle) return ''
  const trimmed = originalTitle.trim()
  const match = translations[trimmed]
  if (!match) {
    return originalTitle
  }
  if (locale === 'ko') {
    return match.ko || match.en || originalTitle
  }
  return match.en || originalTitle
}
