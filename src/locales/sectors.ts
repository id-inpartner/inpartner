export interface SectorTranslation {
  readonly en: string
  readonly ko: string
}

export interface SectorContentDetail {
  readonly title: { readonly en: string; readonly ko: string }
  readonly description: { readonly en: string; readonly ko: string }
  readonly metaTitle?: { readonly en: string; readonly ko: string }
  readonly metaDescription?: { readonly en: string; readonly ko: string }
}

export const sectorMap: Record<string, SectorTranslation> = {
  'restructuring-pre-ipo-ipo-and-right-issue': {
    en: 'Restructuring, Pre-IPO, IPO, and Right Issue',
    ko: '기업 구조조정, 프리IPO, IPO 및 유상증자',
  },
  'alternative-investment': {
    en: 'Alternative Investment',
    ko: '대체 투자 (사모펀드 & 벤처캐피탈)',
  },
  'financial-services': {
    en: 'Financial Services',
    ko: '금융 서비스 및 자산 관리',
  },
  'health-and-pharmaceutical': {
    en: 'Health and Pharmaceutical',
    ko: '보건 의료 및 제약 바이오',
  },
  biotechnology: {
    en: 'Biotechnology',
    ko: '생명공학 및 바이오테크',
  },
  'renewable-energy': {
    en: 'Renewable Energy',
    ko: '신재생에너지 및 클린테크',
  },
  'waste-solution': {
    en: 'Waste Solution',
    ko: '폐기물 처리 및 환경 솔루션',
  },
  'waste-management': {
    en: 'Waste Management',
    ko: '폐기물 처리 및 환경 솔루션',
  },
  'property-investment-and-development': {
    en: 'Property Investment and Development',
    ko: '부동산 투자 및 개발',
  },
  property: {
    en: 'Property Investment and Development',
    ko: '부동산 투자 및 개발',
  },
  'electric-vehicle': {
    en: 'Electric Vehicle',
    ko: '전기차 (EV) 및 이차전지',
  },
  infrastructure: {
    en: 'Infrastructure',
    ko: '인프라 및 사회간접자본',
  },
  'information-technology': {
    en: 'Information Technology',
    ko: '정보기술 (IT) 및 디지털 솔루션',
  },
  'environmental-social-and-governance': {
    en: 'Environmental, Social, and Governance',
    ko: 'ESG (환경·사회·지배구조) 경영',
  },
  environmental: {
    en: 'Environmental, Social, and Governance',
    ko: 'ESG (환경·사회·지배구조) 경영',
  },
  cleantech: {
    en: 'Cleantech',
    ko: '신재생에너지 및 클린테크',
  },
  'food-and-beverange': {
    en: 'Food and Beverage',
    ko: '식음료 (F&B) 및 농식품 산업',
  },
  'food-and-beverage': {
    en: 'Food and Beverage',
    ko: '식음료 (F&B) 및 농식품 산업',
  },
  'industrial-gas': {
    en: 'Industrial Gas',
    ko: '산업용 가스 및 화학',
  },
  'education-training': {
    en: 'Education & Training',
    ko: '교육 및 기업 역량 개발',
  },
  'education-and-training': {
    en: 'Education & Training',
    ko: '교육 및 기업 역량 개발',
  },
}

export const sectorContentMap: Record<string, SectorContentDetail> = {
  'restructuring-pre-ipo-ipo-and-right-issue': {
    title: {
      en: 'Restructuring, Pre-IPO, IPO, and Right Issue',
      ko: '기업 구조조정, 프리IPO, IPO 및 유상증자',
    },
    metaTitle: {
      en: 'Inpartner managing a company for an IPO in Indonesia',
      ko: '인도네시아 IPO 상장 및 기업 구조조정 자문 | 인파트너',
    },
    metaDescription: {
      en: 'Preparing a company for an IPO in Indonesia can be a complex and challenging process. With our skilled and experienced advisory team, the journey to going public is smoother and more successful.',
      ko: '인도네시아 증권거래소(IDX) 기업공개(IPO), 프리IPO 투자 유치, 지배구조 개편 및 유상증자를 위한 인파트너의 전문 재무 전략 자문을 확인하십시오.',
    },
    description: {
      en: `<p>Preparing a company for an IPO can be a complex and challenging process, but with the help of our skilled and experienced advisory team, the journey to going public can be smoother and more successful. Inpartner provides expert guidance and support in financial reporting, regulatory compliance, investor relations, and strategic positioning to maximize corporate valuation.</p>
<ol>
  <li><b>Pre-IPO:</b> Transforming private enterprises into public-ready entities through organizational restructuring, enhanced transparency, financial reporting standards, and strategic growth positioning to attract institutional investors.</li>
  <li><b>IPO:</b> Precise valuation modeling, regulatory documentation handling, underwriting coordination, roadshows, and execution for successful stock exchange listing.</li>
  <li><b>Right Issue:</b> Strategic advisory for secondary offerings and rights issues, ensuring post-listing capital expansion and shareholder value preservation.</li>
</ol>`,
      ko: `<p>인도네시아 증권거래소(IDX) 상장을 위한 IPO(기업공개) 준비는 복잡하고 까다로운 규제 및 재무 절차를 수반합니다. 인파트너는 풍부한 실무 경험과 전문성을 갖춘 자문 팀을 통해 성공적이고 원활한 상장 여정을 지원합니다. 재무 보고, 규제 준수, 투자자 관계(IR), 포괄적 기업 전략 수립을 통해 기업 가치(Valuation)를 극대화하고 성공적인 공모를 견인합니다.</p>
<ol>
  <li><b>프리 IPO (Pre-IPO):</b> 비상장 기업을 상장 기준에 부합하는 구조로 전환합니다. 지배구조 개선, 회계 투명성 확보, 내부 통제 구축 및 유력 기관 투자자 유치를 위한 성장 전략을 수립합니다.</li>
  <li><b>IPO (기업공개):</b> 정밀한 기업 가치평가(Valuation) 모델링, 적정 공모가 산정, 공시 및 인허가 서류 작성, 주간사 협업 및 거래소 상장 승인 절차를 전담합니다.</li>
  <li><b>유상증자 (Right Issue):</b> 상장 후 지속적인 사업 확장과 자본 조달을 위한 유상증자 구조 설계, 시장 변동성 대응 및 주주 가치 보존 전략을 자문합니다.</li>
</ol>`,
    },
  },
  'alternative-investment': {
    title: {
      en: 'Alternative Investment',
      ko: '대체 투자 (사모펀드 & 벤처캐피탈)',
    },
    metaTitle: {
      en: 'Inpartner Alternative Investment Advisory',
      ko: '인도네시아 대체 투자 및 사모펀드 자문 | 인파트너',
    },
    metaDescription: {
      en: 'Alternative investments are gaining popularity in Indonesia as investors look for new opportunities to diversify portfolios and achieve higher returns.',
      ko: '사모펀드, 벤처캐피탈, 상업용 부동산 및 원자재 등 인도네시아 대체투자 시장 진출을 위한 인파트너의 전문 실사 및 포트폴리오 자문.',
    },
    description: {
      en: `<p>Alternative investments are gaining popularity in Indonesia as investors seek new opportunities to diversify their portfolios and potentially achieve higher risk-adjusted returns. Common types of alternative investments in Indonesia include:</p>
<ol>
  <li><b>Private Equity:</b> Growth capital and buyout investments targeting small and medium-sized enterprises (SMEs) across diverse economic sectors, providing expansion capital and exit opportunities through IPO or secondary sales.</li>
  <li><b>Real Estate:</b> Direct ownership of commercial properties, real estate investment trusts (REITs), and large-scale development projects generating passive income, capital appreciation, and inflation hedging.</li>
  <li><b>Hedge Funds & Structured Products:</b> Tailored asset management funds investing in Indonesian equities, fixed-income securities, and special situations.</li>
  <li><b>Commodities:</b> Direct and structured exposure to Indonesia's vital natural resource value chains, including coal, nickel, palm oil, and rubber.</li>
  <li><b>Venture Capital:</b> Early-stage to late-stage venture capital investments backing Southeast Asia's rapidly expanding fintech, e-commerce, and healthcare technology ecosystems.</li>
</ol>
<p>Partnering with Inpartner provides deep due diligence, specialized local regulatory navigation, and unmatched market intelligence to uncover premier investment opportunities.</p>`,
      ko: `<p>포트폴리오 다변화와 높은 위험조정수익률을 추구하는 글로벌 및 국내 투자자들의 수요에 힘입어 인도네시아 대체투자 시장은 빠르게 성장하고 있습니다. 인도네시아 시장의 주요 대체투자 분야는 다음과 같습니다:</p>
<ol>
  <li><b>사모펀드 (Private Equity):</b> 인도네시아 핵심 산업군의 유망 중견·중소기업에 대한 성장 자본 공급, 경영권 인수(Buyout) 및 지분 매각/IPO를 통한 가치 실현.</li>
  <li><b>부동산 개발 및 자산 운용 (Real Estate):</b> 상업용 부동산 직접 투자, 부동산투자신탁(REITs), 대형 복합 개발 프로젝트 투자 및 안정적 배당 수익 창출.</li>
  <li><b>헤지펀드 및 구조화 금융:</b> 인도네시아 주식, 채권, 메자닌 및 특수 상황 펀드를 통한 맞춤형 수익 구조 설계.</li>
  <li><b>원자재 및 에너지 (Commodities):</b> 니켈, 팜유, 석탄, 고무 등 인도네시아 풍부한 천연자원 밸류체인 및 선물 연계 투자 기회 발굴.</li>
  <li><b>벤처캐피탈 (Venture Capital):</b> 핀테크, 전자상거래, 헬스케어 등 인도네시아의 고성장 스타트업 및 디지털 생태계에 대한 초기·후기 벤처 투자.</li>
</ol>
<p>인파트너는 심층 실사(Due Diligence), 현지 시장 분석 및 규제 환경에 대한 독보적인 전문성을 바탕으로 최적의 대체투자 기회를 발굴하고 성공적인 투자 집행을 지원합니다.</p>`,
    },
  },
  'financial-services': {
    title: {
      en: 'Financial Services',
      ko: '금융 서비스 및 자산 관리',
    },
    metaTitle: {
      en: 'Inpartner Financial Services & Capital Advisory',
      ko: '금융 서비스 및 기업 금융 자문 | 인파트너',
    },
    metaDescription: {
      en: 'As a partner managing company, Inpartner provides a range of financial services to help clients manage capital, investments, and financial risk.',
      ko: '인도네시아 자본 조달, M&A, 자산 운용, 리스크 관리 및 기업 금융을 아우르는 인파트너의 전문 금융 서비스.',
    },
    description: {
      en: `<p>As a leading partner advisory firm, Inpartner delivers a comprehensive suite of financial services to help clients manage capital, allocate investments, and mitigate risk:</p>
<ol>
  <li><b>Investment Management:</b> Developing strategic investment allocation plans, selecting sound assets, and systematically monitoring portfolio performance.</li>
  <li><b>Corporate Finance:</b> Capital raising, structuring mergers and acquisitions (M&A), and engineering scalable financial strategies for corporate expansion.</li>
  <li><b>Wealth Management:</b> Helping institutional and high-net-worth clients preserve wealth, plan estates, and structure multi-generational family offices.</li>
  <li><b>Risk Management:</b> Identifying financial vulnerabilities, evaluating insurance coverage, and creating resilient contingency hedging plans.</li>
  <li><b>Advisory Services:</b> Delivering authoritative market intelligence, financial forecasting, and senior advisory on complex fiscal matters.</li>
</ol>
<p>Inpartner's seasoned team of financial professionals collaborates closely with clients to formulate customized strategies that consistently achieve long-term financial goals.</p>`,
      ko: `<p>인파트너는 기업, 금융기관 및 자산운용사를 대상으로 자본 조달, 포트폴리오 최적화 및 재무 리스크 관리를 위한 종합 금융 자문 솔루션을 제공합니다:</p>
<ol>
  <li><b>투자 및 자산 관리 (Investment Management):</b> 맞춤형 자산 배분 전략 수립, 우량 투자처 선별 및 포트폴리오 성과 분석 모니터링.</li>
  <li><b>기업 금융 (Corporate Finance):</b> 자본 조달(지분 및 부채 파이낸싱), 인수합병(M&A), 사업 확장을 위한 재무 구조 최적화.</li>
  <li><b>자산 관리 및 패밀리 오피스 (Wealth Management):</b> 고액 자산가를 위한 자산 보전, 세무 및 승계 계획, 글로벌 분산 투자 전략.</li>
  <li><b>리스크 관리 (Risk Management):</b> 재무적·시장 위험 요소 분석, 유동성 리스크 헤징 및 비상 대응 전략 수립.</li>
  <li><b>금융 전략 자문 (Advisory Services):</b> 시장 분석, 정밀 재무 예측 모델링 및 주요 투자 의사결정에 대한 전문 자문.</li>
</ol>
<p>인파트너의 전문 금융 인력은 고객사의 고유한 재무적 목표를 정밀하게 파악하여 최적화된 맞춤형 솔루션을 설계하고 실행합니다.</p>`,
    },
  },
  'health-and-pharmaceutical': {
    title: {
      en: 'Health and Pharmaceutical',
      ko: '보건 의료 및 제약 바이오',
    },
    metaTitle: {
      en: 'Inpartner Health & Pharmaceutical Advisory',
      ko: '보건 의료 및 제약 바이오 컨설팅 | 인파트너',
    },
    metaDescription: {
      en: 'Inpartner helps health and pharmaceutical companies navigate the complex regulatory environment, supply chain, and expansion in Indonesia.',
      ko: '인도네시아 제약·바이오 시장 진출, BPOM 인허가 규제 준수, 의료 공급망 및 투자 유치 자문.',
    },
    description: {
      en: `<p>Indonesia's healthcare and pharmaceutical sectors are experiencing rapid expansion driven by national health coverage and rising demand. Inpartner provides specialized end-to-end consulting for healthcare enterprises:</p>
<ol>
  <li><b>Business Development:</b> Identifying high-growth commercial opportunities, conducting market viability research, and structuring domestic joint ventures.</li>
  <li><b>Financial Management:</b> Optimizing operating cash flows, financial budgeting, and preparing investor-grade financial documentation.</li>
  <li><b>Regulatory Compliance:</b> Navigating Indonesian BPOM regulations, pharmaceutical licenses, medical device permits (IPAK), and Halal compliance.</li>
  <li><b>Supply Chain Management:</b> Optimizing logistics, cold-chain distribution, and procurement networks across the archipelago.</li>
  <li><b>Partnership & Collaboration:</b> Structuring strategic alliances, distributor partnerships, and cross-border pharmaceutical licensing agreements.</li>
</ol>
<p>Our experienced sector team works closely with healthcare stakeholders to navigate industry complexities and accelerate measurable impact.</p>`,
      ko: `<p>인도네시아 보건 의료 및 제약 산업은 인구 증가와 전 국민 건강보험 확대에 힘입어 전례 없는 성장세를 보이고 있습니다. 인파트너는 제약사, 의료기기 제조사 및 헬스케어 기업의 현지 진출과 성장을 전방위로 지원합니다:</p>
<ol>
  <li><b>사업 개발 및 시장 진출 (Business Development):</b> 인도네시아 의료 시장 조사, 현지 파트너사 발굴, 합작법인(JV) 설립 및 비즈니스 모델 구축.</li>
  <li><b>재무 관리 및 투자 유치 (Financial Management):</b> 병원 및 생산 시설 설비 투자 자금 조달, 사모펀드 투자 유치 및 재무 건전성 강화.</li>
  <li><b>인허가 및 규제 준수 (Regulatory Compliance):</b> 식약청(BPOM) 등록, 의료기기 유통 허가(IPAK), 제약 할랄 인증 취득 및 현지 규제 대응.</li>
  <li><b>공급망 및 유통 최적화 (Supply Chain Management):</b> 콜드체인 물류 네트워크 구축, 원자재 조달 및 전인도네시아 유통망 효율화.</li>
  <li><b>글로벌 파트너십 (Partnership & Collaboration):</b> 해외 유수 헬스케어 기업과 인도네시아 현지 기업 간 기술 제휴 및 공동 사업 추진.</li>
</ol>
<p>인파트너의 전문 컨설팅 팀은 헬스케어 및 제약 기업의 특수한 요구사항을 충족하는 실질적인 현지화 솔루션을 제공합니다.</p>`,
    },
  },
  biotechnology: {
    title: {
      en: 'Biotechnology',
      ko: '생명공학 및 바이오테크',
    },
    metaTitle: {
      en: 'Inpartner Biotechnology Industry Advisory',
      ko: '생명공학 및 바이오테크 산업 자문 | 인파트너',
    },
    metaDescription: {
      en: 'We work closely with biotechnology clients to provide the strategic, IP, and regulatory support they need to succeed in Southeast Asia.',
      ko: '인도네시아 바이오테크 기술 상용화, 특허 라이선싱, R&D 투자 유치 및 인허가 전략 자문.',
    },
    description: {
      en: `<p>Inpartner collaborates with biotechnology innovators, research institutions, and agritech ventures to bring breakthrough scientific developments to market across Southeast Asia:</p>
<ol>
  <li><b>Business Development:</b> Feasibility modeling, commercialization roadmaps, and strategic positioning for novel biotechnologies.</li>
  <li><b>Financial Management:</b> Capital allocation strategies, cash flow planning, and investor syndicate coordination.</li>
  <li><b>Regulatory Compliance:</b> Biosafety protocols, clinical trial authorizations, and compliance with Indonesian health and environmental authorities.</li>
  <li><b>Intellectual Property (IP):</b> Patent landscape analysis, IP filing strategies, and cross-border licensing agreement negotiations.</li>
  <li><b>Strategic Alliances:</b> Forging partnerships between research labs, pharmaceutical producers, and agricultural corporations.</li>
</ol>
<p>Whether clients are commercializing novel therapeutics, advanced diagnostics, or sustainable agribiotech solutions, Inpartner delivers the specialized advisory required for commercial success.</p>`,
      ko: `<p>인파트너는 바이오테크 혁신 기업, 연구기관 및 농생명 기업이 첨단 기술을 인도네시아 및 동남아 시장에서 상용화할 수 있도록 지원합니다:</p>
<ol>
  <li><b>기술 상용화 및 사업 개발 (Business Development):</b> 연구개발 성과의 상용화 로드맵 수립 및 시장 타겟팅 전략 개발.</li>
  <li><b>연구 자금 조달 (Financial Management):</b> 벤처캐피탈 투자 유치, 정부 R&D 펀딩 연계 및 단계별 자금 조달 구조화.</li>
  <li><b>규제 승인 및 인허가 (Regulatory Compliance):</b> 바이오 안전성 평가 준수, 임상 시험 승인 및 현지 보건 당국 인허가 대응.</li>
  <li><b>지식재산권(IP) 보호 및 라이선싱:</b> 특허 출원 전략, 기술 이전 계약 및 글로벌 라이선싱 협상 자문.</li>
  <li><b>전략적 파트너십 (Strategic Alliances):</b> 바이오 스타트업과 대형 제약사·농식품 대기업 간 공동 연구 및 사업화 제휴.</li>
</ol>
<p>신약 개발, 분자 진단, 바이오 농업 등 다양한 생명공학 분야에서 인파트너는 고객사가 기술적 우위를 상업적 성공으로 전환하도록 돕습니다.</p>`,
    },
  },
  'renewable-energy': {
    title: {
      en: 'Renewable Energy',
      ko: '신재생에너지 및 클린테크',
    },
    metaTitle: {
      en: 'Inpartner Renewable Energy & Clean Technology',
      ko: '신재생에너지 및 클린테크 프로젝트 자문 | 인파트너',
    },
    metaDescription: {
      en: 'Committed to advancing green living and clean energy transition, Inpartner provides renewable energy feasibility, PPA advisory, and capital structuring.',
      ko: '인도네시아 태양광, 수력, 지열 신재생에너지 개발, PLN 전력구매계약(PPA) 협상 및 프로젝트 파이낸싱(PF) 자문.',
    },
    description: {
      en: `<p>Committed to advancing a sustainable, net-zero future, Inpartner actively coordinates with clean energy developers, industrial consumers, and green funds to accelerate clean energy adoption in Indonesia:</p>
<ol>
  <li><b>Project Development:</b> Comprehensive feasibility studies, environmental impact reviews, and site permitting for solar PV, hydro, geothermal, biomass, and wind projects.</li>
  <li><b>PPA & Regulatory Navigation:</b> Advisory on PLN Power Purchase Agreements (PPA), feed-in tariffs, and Ministry of Energy and Mineral Resources (ESDM) regulations.</li>
  <li><b>Clean Mobility & Storage:</b> In collaboration with clean transport ventures, we advise on electric vehicle charging integration and battery energy storage systems (BESS).</li>
  <li><b>Project Finance & Capital Sourcing:</b> Structuring green bonds, multilateral development bank co-financing, and institutional equity syndication.</li>
</ol>`,
      ko: `<p>인도네시아의 탄소중립(Net-Zero) 전환과 녹색 경제 실현을 위해, 인파트너는 신재생에너지 개발사 및 글로벌 친환경 투자자에게 프로젝트 기획부터 금융 조달까지 전 단계 자문을 제공합니다:</p>
<ol>
  <li><b>친환경 발전 프로젝트 개발:</b> 태양광(PV), 수력, 지열, 바이오매스 및 풍력 발전 프로젝트 타당성 조사(FS) 및 사업 인허가.</li>
  <li><b>전력구매계약(PPA) 및 규제 자문:</b> 인도네시아 국영전력공사(PLN) 전력구매계약 협상, 발전 단가 분석 및 에너지부(ESDM) 규제 준수.</li>
  <li><b>전기차(EV) 및 그리드 연계:</b> 신재생에너지와 연계된 전기차 충전 인프라 및 에너지 저장 시스템(ESS) 구축 지원.</li>
  <li><b>프로젝트 파이낸싱(PF) 및 녹색 금융:</b> 그린본드 발행 지원, 다자간개발은행(MDB) 차관 연계 및 사모 그린 펀드 투자 구조화.</li>
</ol>`,
    },
  },
  'waste-solution': {
    title: {
      en: 'Waste Solution',
      ko: '폐기물 처리 및 환경 솔루션',
    },
    metaTitle: {
      en: 'Inpartner Waste Management & Circular Economy',
      ko: '폐기물 처리 및 환경 인프라 솔루션 | 인파트너',
    },
    metaDescription: {
      en: 'Inpartner provides comprehensive services to manage, process, and reduce waste for businesses, municipalities, and industrial zones in Indonesia.',
      ko: '인도네시아 폐기물 에너지화(WtE), 산업 리사이클링 플랜트 및 친환경 인프라 투자 자문.',
    },
    description: {
      en: `<p>Inpartner delivers strategic advisory and project management to help corporations, communities, and governments reduce waste, divert material from landfills, and transition to circular models:</p>
<ol>
  <li><b>Waste-to-Energy (WtE):</b> Technical and financial feasibility modeling for regional municipal waste treatment and refuse-derived fuel (RDF) facilities.</li>
  <li><b>Industrial Recycling Infrastructure:</b> Engineering advisory and business plans for paper, plastics, and metals recovery plants.</li>
  <li><b>Composting & Organic Processing:</b> Turning commercial agricultural and food waste into nutrient-dense organic compost.</li>
  <li><b>Corporate Waste Audits:</b> Quantifying operational waste streams to identify cost-saving minimization and diversion opportunities.</li>
  <li><b>Sustainability & ESG Consulting:</b> Developing compliance strategies aligned with Indonesian zero-waste circular mandates.</li>
  <li><b>Hazardous Waste Management:</b> Proper containment, transport, and certified disposal of B3 hazardous industrial and medical waste.</li>
</ol>`,
      ko: `<p>인파트너는 지방정부, 산업단지 및 환경 엔지니어링 기업과 협력하여 인도네시아 전역에 지속 가능한 순환 경제 및 폐기물 처리 인프라 구축을 지원합니다:</p>
<ol>
  <li><b>폐기물 에너지화 (Waste-to-Energy, WtE & RDF):</b> 도시 고형 폐기물 기반 고형연료(RDF) 및 발전 시설의 사업 타당성 조사, 기술 실사 및 투자 유치.</li>
  <li><b>산업 폐기물 및 자원 재활용:</b> 플라스틱 순환 경제, 첨단 선별 시스템 및 리사이클링 플랜트 개발 자문.</li>
  <li><b>유기성 폐기물 퇴비화:</b> 음식물 및 농업 유기성 부산물의 퇴비화 및 자원화 시스템 설계.</li>
  <li><b>폐기물 진단 (Waste Audit):</b> 기업 사업장의 배출 폐기물 정밀 분석 및 감축 로드맵 수립.</li>
  <li><b>지속가능성 및 ESG 자문:</b> 인도네시아 정부의 폐기물 감축 규제 대응 및 탄소 감축 인증 지원.</li>
  <li><b>유해 폐기물(B3) 처리:</b> 의료 및 산업 유해 폐기물 안전 처리 규정 준수 및 특수 처리 시설 인허가.</li>
</ol>`,
    },
  },
  'property-investment-and-development': {
    title: {
      en: 'Property Investment and Development',
      ko: '부동산 투자 및 개발',
    },
    metaTitle: {
      en: 'Inpartner Property Investment & Development',
      ko: '부동산 투자 및 개발 프로젝트 자문 | 인파트너',
    },
    metaDescription: {
      en: 'Inpartner provides property investment planning, feasibility studies, development management, and real estate transactions across Indonesia.',
      ko: '인도네시아 부동산 개발 타당성 조사, 상업용 부동산 투자 실사 및 FDI 합작 투자 자문.',
    },
    description: {
      en: `<p>Inpartner provides institutional-grade property investment and development advisory to help clients achieve strong financial yields and enduring real estate assets across Indonesia:</p>
<ol>
  <li><b>Investment Planning:</b> Formulating real estate investment plans aligned with client risk tolerance and long-term portfolio growth objectives.</li>
  <li><b>Investment Management:</b> Active portfolio monitoring, strategic asset allocation, and real estate yield optimization.</li>
  <li><b>Development Feasibility:</b> Highest-and-best-use (HBU) evaluations, zoning reviews, market demand studies, and architectural viability analysis.</li>
  <li><b>Project Management:</b> Managing capital expenditure budgets, construction timelines, and contractor teams from inception to commissioning.</li>
  <li><b>Due Diligence:</b> Rigorous financial modeling, title verification (HGB/SHM), and regulatory compliance checks for commercial land and properties.</li>
  <li><b>Property & Asset Optimization:</b> Operational repositioning, tenant leasing strategy, and long-term facility monetization.</li>
</ol>`,
      ko: `<p>인파트너는 인도네시아 상업용, 주거용 및 산업용 부동산 전반에 걸쳐 기관 투자자 수준의 종합 부동산 개발 및 투자 자문을 제공합니다:</p>
<ol>
  <li><b>부동산 투자 전략 및 포트폴리오 설계:</b> 시장 사이클 분석, 우량 자산 선별 및 위험 관리 기반의 투자 포트폴리오 구축.</li>
  <li><b>투자 자산 관리:</b> 수익형 부동산 포트폴리오 운영 전략, 자산 가치 평가 및 리스크 관리.</li>
  <li><b>사업 타당성 조사 (FS) 및 개발 자문:</b> 최고최선의 이용(HBU) 분석, 용도지역 규제 검토 및 마스터플랜 경제성 검증.</li>
  <li><b>프로젝트 개발 관리 (PM):</b> 개발 일정, 예산 집행, 건설 인허가 및 시공사 관리 감독.</li>
  <li><b>정밀 실사 (Due Diligence):</b> 토지 권리관계(HGB 등) 확인, 건축 인허가(PBG/SLF) 점검 및 임대 수익성 정밀 검증.</li>
  <li><b>자산 가치 제고 (Asset Repositioning):</b> 기존 부동산 리모델링, 운영 효율화 및 자산 매각(Exit) 전략 수립.</li>
</ol>`,
    },
  },
  'electric-vehicle': {
    title: {
      en: 'Electric Vehicle',
      ko: '전기차 (EV) 및 이차전지',
    },
    metaTitle: {
      en: 'Inpartner Electric Vehicle Industry Advisory',
      ko: '전기차(EV) 및 배터리 산업 자문 | 인파트너',
    },
    metaDescription: {
      en: 'Inpartner advises leaders in the electric vehicle ecosystem on market entry, manufacturing incentives, supply chains, and charging infrastructure in Indonesia.',
      ko: '인도네시아 전기차(EV) 시장 진출, 배터리 공급망, TKDN 인증 및 생산 공장 설립 자문.',
    },
    description: {
      en: `<p>Electric vehicles (EVs) are reshaping global mobility, and Indonesia is rapidly emerging as Southeast Asia's manufacturing and mineral supply powerhouse. Key advantages of electric mobility include:</p>
<ol>
  <li><b>Zero Tailpipe Emissions:</b> Drastically reducing localized air pollution and supporting national carbon abatement targets.</li>
  <li><b>Lower Operational Costs:</b> Electric drivetrains have fewer moving components and significantly lower lifecycle maintenance compared to internal combustion engines.</li>
  <li><b>Government Policy Incentives:</b> Indonesia offers aggressive fiscal incentives, including import duty exemptions, luxury sales tax holidays, and local content subsidies.</li>
  <li><b>Superior Performance & Efficiency:</b> Instant torque delivery and regenerative braking capture energy to deliver smoother, high-efficiency transport.</li>
  <li><b>Grid & Renewable Synergy:</b> Leveraging clean energy grids to create a genuinely decarbonized transport ecosystem.</li>
</ol>
<p>Inpartner guides automotive manufacturers, battery suppliers, and fleet operators through investment structuring, factory setup feasibility, and charging network rollouts.</p>`,
      ko: `<p>인도네시아가 풍부한 니켈 매장량을 바탕으로 글로벌 전기차(EV) 및 배터리 공급망 허브로 도약함에 따라, 인파트너는 국내외 모빌리티 기업의 성공적인 시장 안착을 지원합니다:</p>
<ol>
  <li><b>배터리 원자재 및 다운스트림 밸류체인:</b> 니켈 제련·가공 연계, 배터리 셀 제조 파트너십 및 원자재 공급망 확보 전략.</li>
  <li><b>완성차 및 부품 공장 설립:</b> 현지 공장 설립 타당성 조사, 국산화율(TKDN) 규정 충족 및 정부 세제 혜택(Tax Holiday) 자문.</li>
  <li><b>전기차 충전 인프라 (SPKLU):</b> 충전소 네트워크 구축 사업 모델 설계, 상용 플릿(버스크·배송차량) 전동화 전환 프로젝트 지원.</li>
  <li><b>전략적 투자 및 합작투자(JV):</b> 글로벌 자동차·배터리 기업과 인도네시아 국영기업(IBC 등) 간의 전략적 합작 구조화.</li>
  <li><b>친환경 운송 전환 로드맵:</b> 기업 및 지자체 친환경 모빌리티 도입 계획 수립 및 총소유비용(TCO) 절감 분석.</li>
</ol>`,
    },
  },
  infrastructure: {
    title: {
      en: 'Infrastructure',
      ko: '인프라 및 사회간접자본',
    },
    metaTitle: {
      en: 'Inpartner Infrastructure Projects & Transaction Advisory',
      ko: '인프라 및 사회간접자본 프로젝트 자문 | 인파트너',
    },
    metaDescription: {
      en: 'Inpartner provides investment planning, project feasibility studies, and PPP structuring for major infrastructure projects in Indonesia.',
      ko: '인도네시아 고속도로, BRT 대중교통, 항만 및 민관협력사업(KPBU) 타당성 조사와 재무 자문.',
    },
    description: {
      en: `<p>Infrastructure plays a critical role in supporting sustained economic expansion and elevating quality of life across Indonesian regions.</p>
<p>Inpartner provides a comprehensive suite of transaction advisory services to developers, concessionaires, and financiers in the infrastructure sector, including:</p>
<ol>
  <li><b>Toll Roads & Highways:</b> Concessionaire performance reviews (BUJT), traffic revenue forecasting, and Trans-Java corridor evaluations.</li>
  <li><b>Mass Transit Systems:</b> Feasibility analysis, ridership modeling, and financing structures for Bus Rapid Transit (BRT) and light rail.</li>
  <li><b>Water & Environmental Infrastructure:</b> Regional drinking water supply systems (SPAM) and municipal treatment facilities.</li>
  <li><b>Public-Private Partnerships (PPP/KPBU):</b> Structuring viable commercial agreements, government guarantee instruments, and syndication.</li>
</ol>
<p>Our deep sector expertise ensures clients navigate regulatory frameworks and deliver bankable infrastructure megaprojects.</p>`,
      ko: `<p>인프라는 국가 경제 성장의 핵심 근간입니다. 인파트너는 인도네시아 전역의 대형 인프라 프로젝트를 대상으로 민관협력사업(KPBU/PPP) 구조화, 정밀 재무 모델링 및 실물경제 영향 평가 자문을 제공합니다:</p>
<ol>
  <li><b>유료도로 및 고속도로:</b> 유료도로 운영사(BUJT) 실사, 교통량 및 수익 모델링, 트랜스 자바 고속도로 투자 모니터링.</li>
  <li><b>대중교통 시스템:</b> 광역 간선급행버스체계(BRT) 사업 타당성 조사 및 도시 교통 인프라 경제성 분석.</li>
  <li><b>상하수도 및 공공 유틸리티:</b> 광역 상수도 공급 시스템(SPAM) 구축 사업 타당성 분석 및 금융 조달 구조화.</li>
  <li><b>민관협력사업 (KPBU / PPP):</b> 민관협력사업 구조 설계, 정부 보증(IIGF) 연계 및 금융 조달(Financial Close) 지원.</li>
</ol>
<p>인파트너의 전문 자문 역량은 복잡한 인프라 규제 환경을 원활히 해결하고 성공적인 프로젝트 완수를 보장합니다.</p>`,
    },
  },
  'information-technology': {
    title: {
      en: 'Information Technology',
      ko: '정보기술 (IT) 및 디지털 솔루션',
    },
    metaTitle: {
      en: 'Inpartner Information Technology & Digital Solutions',
      ko: '정보기술(IT) 및 디지털 전환 자문 | 인파트너',
    },
    metaDescription: {
      en: 'Inpartner delivers enterprise software engineering, cloud infrastructure, cybersecurity governance, and digital transformation in Indonesia.',
      ko: '인도네시아 기업 디지털 전환(DX), 엔터프라이즈 웹 플랫폼 및 IT 인프라 컨설팅.',
    },
    description: {
      en: `<p>We provide a comprehensive range of IT advisory and engineering services to organizations across diverse industries. Our seasoned technology professionals deliver solutions to complex architectural challenges, optimizing digital infrastructure for maximum efficiency and robust security:</p>
<ol>
  <li><b>Enterprise Software Development:</b> Custom web applications, API integrations, and scalable business automation software.</li>
  <li><b>Cloud Architecture & Migration:</b> Resilient multi-cloud deployments, containerization, and cost optimization.</li>
  <li><b>Network Infrastructure & Operations:</b> High-availability corporate network design, monitoring, and uptime management.</li>
  <li><b>Cybersecurity & Compliance:</b> Vulnerability assessments, data protection protocols, and regulatory compliance.</li>
  <li><b>Digital Transformation Roadmaps:</b> Modernizing legacy workflows with scalable technology stacks.</li>
</ol>`,
      ko: `<p>인파트너는 기업, 금융기관 및 공공기관의 디지털 전환(DX)을 성공적으로 이끌기 위해 기술 전략 컨설팅과 첨단 엔지니어링 아키텍처 솔루션을 제공합니다:</p>
<ol>
  <li><b>엔터프라이즈 소프트웨어 개발:</b> 맞춤형 비즈니스 웹 플랫폼 구축, 대규모 API 연동 및 업무 자동화 소프트웨어 개발.</li>
  <li><b>클라우드 아키텍처 및 마이그레이션:</b> 안정적인 클라우드 전환, 컨테이너화 및 클라우드 인프라 비용 최적화.</li>
  <li><b>네트워크 인프라 설계 및 운영:</b> 고가용성 기업 네트워크 아키텍처 구축 및 24/7 모니터링 체계 설계.</li>
  <li><b>사이버 보안 및 개인정보보호:</b> 보안 취약점 진단, 암호화 체계 구축 및 정보보호 규정 준수 자문.</li>
  <li><b>디지털 전환 (DX) 로드맵:</b> 기존 레거시 시스템 현대화 및 최신 디지털 기술 도입 종합 자문.</li>
</ol>`,
    },
  },
  'environmental-social-and-governance': {
    title: {
      en: 'Environmental, Social, and Governance',
      ko: 'ESG (환경·사회·지배구조) 경영',
    },
    metaTitle: {
      en: 'Inpartner Corporate ESG Strategy & Sustainable Governance',
      ko: '기업 ESG 경영 및 지속가능성 자문 | 인파트너',
    },
    metaDescription: {
      en: 'Inpartner integrates environmental, social, and governance (ESG) factors into corporate strategy, reporting, and sustainable investments in Indonesia.',
      ko: '인도네시아 OJK 기준 지속가능보고서, GRESB 평가, 펀드 ESG 정책 및 기업 거버넌스 자문.',
    },
    description: {
      en: `<p>Inpartner takes a comprehensive approach to ESG considerations, recognizing that environmental, social, and governance factors are vital to the long-term sustainability and valuation of modern enterprises:</p>
<ol>
  <li><b>Environmental (E):</b> Reducing operational carbon footprints, minimizing industrial waste, implementing energy audits, and adopting sustainable circular materials.</li>
  <li><b>Social (S):</b> Cultivating inclusive workforce diversity, fair labor practices, continuous executive development, and high-impact corporate social responsibility (CSR) programs.</li>
  <li><b>Governance (G):</b> Upholding rigorous board accountability, transparent stakeholder reporting, ethical risk frameworks, and strict anti-corruption standards.</li>
  <li><b>ESG Benchmarking & Reporting:</b> Guiding companies through OJK POJK 51 sustainability disclosures, GRI reporting, and GRESB real estate assessments.</li>
</ol>
<p>By prioritizing ESG frameworks, Inpartner helps clients build resilient organizations that unlock premier access to international green capital.</p>`,
      ko: `<p>인파트너는 글로벌 지속가능경영 표준을 기업의 핵심 운영체계에 통합하여, 고객사가 높은 기업 가치를 인정받고 책임투자 자본을 유치할 수 있도록 지원합니다:</p>
<ol>
  <li><b>환경 (Environmental):</b> 전사 온실가스 배출량 진단, 에너지 효율 개선, 친환경 원자재 도입 및 폐기물 감축 로드맵 수립.</li>
  <li><b>사회 (Social):</b> 다양성과 포용성을 갖춘 조직 문화 조성, 임직원 직무 역량 강화 프로그램 및 지역사회 상생 CSR 추진.</li>
  <li><b>지배구조 (Governance):</b> 이사회 투명성 강화, 윤리 경영 및 내부 통제 시스템 구축, 이해관계자 소통 채널 정립.</li>
  <li><b>ESG 평가 및 보고서 발간:</b> 인도네시아 OJK 규정(POJK 51) 준수 지속가능보고서, 글로벌 GRI 가이드라인 및 GRESB 평가 대응.</li>
</ol>
<p>체계적인 ESG 경영 체계를 구축함으로써, 인파트너는 고객사가 지속 가능한 미래를 선도하고 글로벌 녹색 자본을 유치할 수 있도록 뒷받침합니다.</p>`,
    },
  },
  'food-and-beverange': {
    title: {
      en: 'Food and Beverage',
      ko: '식음료 (F&B) 및 농식품 산업',
    },
    metaTitle: {
      en: 'Inpartner Food and Beverage Industry Advisory',
      ko: '식음료(F&B) 및 농식품 산업 자문 | 인파트너',
    },
    metaDescription: {
      en: 'Inpartner supports food and beverage (F&B) enterprises in Indonesia through market expansion, regulatory licensing (BPOM/Halal), and growth capital advisory.',
      ko: '인도네시아 F&B 프랜차이즈 확장, BPOM 식품 허가, 할랄 인증 및 식품 기업 투자 유치 자문.',
    },
    description: {
      en: `<p>Indonesia's massive domestic consumer market and growing urban population present immense growth opportunities in food production, restaurant franchising, and agrifood distribution.</p>
<p>Inpartner supports F&B businesses in scaling operations and meeting modern consumer demands through:</p>
<ol>
  <li><b>Market Expansion & Franchising:</b> Strategic retail network planning, multi-outlet unit economics modeling, and franchisee partner selection.</li>
  <li><b>Regulatory Licensing & Halal Compliance:</b> BPOM food registration, hygienic production facility standards, and mandatory BPJPH Halal certification.</li>
  <li><b>Supply Chain & Cold Chain Logistics:</b> Direct farm sourcing partnerships, temperature-controlled distribution, and spoilage reduction.</li>
  <li><b>Growth Capital & Investment Sourcing:</b> Valuation modeling, investor teasers, and private equity placement for scaling culinary concepts.</li>
</ol>`,
      ko: `<p>인도네시아의 거대한 내수 소비 시장은 식품 제조, 외식 프랜차이즈 및 농식품 밸류체인 분야에서 무한한 성장 기회를 제공합니다.</p>
<p>인파트너는 F&B 기업의 지속 가능한 확장과 품질 혁신을 위해 다음과 같은 전문 자문 서비스를 제공합니다:</p>
<ol>
  <li><b>시장 확장 및 프랜차이즈 전략:</b> 매장 네트워크 확장 모델 수립, 유망 브랜드 M&A 및 전국 식음료 유통망 구축.</li>
  <li><b>식약청(BPOM) 및 할랄(Halal) 인증:</b> 식품 안전 규정 준수, BPOM 품목 등록 및 BPJPH 공식 할랄 인증 획득 자문.</li>
  <li><b>농식품 밸류체인 및 콜드체인 물류:</b> 산지 직송 조달 체계 구축, 냉장·냉동 물류 최적화 및 유통 손실률 최소화.</li>
  <li><b>투자 유치 및 기업 가치평가:</b> 외식·식품 브랜드를 위한 투자 티저(Teaser) 작성, 사모펀드 유치 및 기업가치 극대화.</li>
</ol>`,
    },
  },
  'industrial-gas': {
    title: {
      en: 'Industrial Gas',
      ko: '산업용 가스 및 화학',
    },
    metaTitle: {
      en: 'Inpartner Industrial Gas Sector Advisory',
      ko: '산업용 가스 및 화학 산업 자문 | 인파트너',
    },
    metaDescription: {
      en: 'Inpartner provides investment planning, project feasibility studies, and pipeline infrastructure advisory for industrial gas producers in Indonesia.',
      ko: '인도네시아 산업용 가스 배관망 프로젝트 타당성 분석, 의료용 가스 인허가 및 M&A 자문.',
    },
    description: {
      en: `<p>Industrial gases form the foundational backbone for advanced manufacturing, metallurgy, medical healthcare, and energy generation across Indonesia.</p>
<p>Inpartner delivers specialized investment, engineering feasibility, and strategic development services for gas producers and distributors:</p>
<ol>
  <li><b>Pipeline Infrastructure & Project Finance:</b> Feasibility analysis and capital structuring for natural gas pipelines and on-site air separation units (ASUs).</li>
  <li><b>Medical & Specialty Gas Compliance:</b> Assisting healthcare oxygen and specialty gas suppliers with certification and safety compliance.</li>
  <li><b>Market Entry & Acquisition Advisory:</b> Competitor intelligence, market demand forecasting, and target company due diligence.</li>
  <li><b>Decarbonization & Hydrogen Transition:</b> Evaluating green hydrogen opportunities, carbon capture readiness, and clean industrial energy transitions.</li>
</ol>`,
      ko: `<p>산업용 가스는 제조업, 제철, 의료 및 에너지 생산에 필수적인 핵심 기반 소재입니다.</p>
<p>인파트너는 산업용 가스 생산 및 유통 기업을 위해 고도화된 재무 및 전략 자문을 제공합니다:</p>
<ol>
  <li><b>배관망 인프라 및 프로젝트 파이낸싱:</b> 산업용 천연가스 배관망 건설 타당성 분석, 공기분리장치(ASU) 플랜트 투자 구조화.</li>
  <li><b>의료용 및 특수 가스 규제 준수:</b> 의료용 산소 및 고순도 특수 가스 생산 시설 인허가, 산업 안전 표준 규격 준수 자문.</li>
  <li><b>시장 진출 및 M&A 실사:</b> 산업용 가스 제조사 인수합병 타당성 검토, 경쟁 구도 분석 및 정밀 기업 가치평가.</li>
  <li><b>탈탄소화 및 수소 에너지 전환:</b> 그린 수소 경제 타당성 검토, 탄소 포집(CCUS) 연계 및 청정 산업 에너지 전환 전략.</li>
</ol>`,
    },
  },
  'education-training': {
    title: {
      en: 'Education & Training',
      ko: '교육 및 기업 역량 개발',
    },
    metaTitle: {
      en: 'Inpartner Education & Executive Training Programs',
      ko: '교육 및 기업 역량 개발 프로그램 | 인파트너',
    },
    metaDescription: {
      en: 'Comprehensive executive education, vocational training, and leadership development programs by Inpartner in Indonesia.',
      ko: '인파트너의 최고경영자 과정, 맞춤형 직무 교육 및 기업 역량 강화 프로그램 안내.',
    },
    description: {
      en: `<p>Inpartner delivers executive development programs, corporate vocational curricula, and organizational capacity building designed to empower institutional leadership and enhance productivity across key industrial sectors in Indonesia.</p>`,
      ko: `<p>인파트너는 인도네시아 현지 기업 및 다국적 기업의 리더십 역량을 강화하고 조직 생산성을 극대화하기 위한 최고경영자 과정, 맞춤형 임직원 직무 교육 및 전문 역량 강화 프로그램을 제공합니다.</p>`,
    },
  },
}

export const getSectorTitle = (
  slug: string | undefined,
  defaultTitle: string,
  locale: string = 'en'
): string => {
  if (!slug) return defaultTitle
  const cleanSlug = slug.toLowerCase().trim()
  const found = sectorMap[cleanSlug]
  if (found) {
    return locale === 'ko' ? found.ko : found.en || defaultTitle
  }
  return defaultTitle
}

export const getSectorTitleByName = (
  name: string | undefined,
  locale: string = 'en'
): string => {
  if (!name) return ''
  if (locale !== 'ko') return name
  const lower = name.toLowerCase().trim()
  for (const key of Object.keys(sectorMap)) {
    const item = sectorMap[key]
    if (
      key === lower ||
      item.en.toLowerCase() === lower ||
      lower.includes(key.replace(/-/g, ' ')) ||
      item.en.toLowerCase().includes(lower)
    ) {
      return item.ko
    }
  }
  return name
}

export const getCategoryTitle = (
  name: string | undefined,
  locale: string = 'en'
): string => {
  if (!name) return ''
  if (locale !== 'ko') return name
  const lower = name.toLowerCase()
  if (lower.includes('business')) return '경영 및 비즈니스 컨설팅'
  if (lower.includes('investment')) return '투자 자문 및 금융'
  if (lower.includes('capacity')) return '기업 역량 강화 프로그램'
  return name
}

export interface LocalizedSectorContent {
  title: string
  description: string
  metaTitle: string
  metaDescription: string
}

export const getSectorContent = (
  slug: string | undefined,
  defaultData: {
    title?: string
    description?: string
    metaTitle?: string
    metaDescription?: string
  },
  locale: string = 'en'
): LocalizedSectorContent => {
  const isKo = locale === 'ko'
  const fallbackTitle = defaultData.title || ''
  const fallbackDesc = defaultData.description || ''
  const fallbackMetaTitle = defaultData.metaTitle || fallbackTitle
  const fallbackMetaDesc = defaultData.metaDescription || ''

  if (!slug) {
    return {
      title: fallbackTitle,
      description: fallbackDesc,
      metaTitle: fallbackMetaTitle,
      metaDescription: fallbackMetaDesc,
    }
  }

  const cleanSlug = slug.toLowerCase().trim()
  const found = sectorContentMap[cleanSlug]

  if (!found) {
    const mappedTitle = sectorMap[cleanSlug]
    const title = mappedTitle
      ? isKo
        ? mappedTitle.ko
        : mappedTitle.en
      : fallbackTitle

    return {
      title,
      description: fallbackDesc,
      metaTitle: fallbackMetaTitle,
      metaDescription: fallbackMetaDesc,
    }
  }

  const title = isKo ? found.title.ko : found.title.en || fallbackTitle
  const description = isKo
    ? found.description.ko
    : found.description.en || fallbackDesc
  const metaTitle = found.metaTitle
    ? isKo
      ? found.metaTitle.ko
      : found.metaTitle.en
    : fallbackMetaTitle
  const metaDescription = found.metaDescription
    ? isKo
      ? found.metaDescription.ko
      : found.metaDescription.en
    : fallbackMetaDesc

  return {
    title,
    description,
    metaTitle,
    metaDescription,
  }
}
