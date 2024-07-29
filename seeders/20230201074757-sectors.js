'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sectors', [
      {
        id: 1,
        slug: 'restructuring-pre-ipo-ipo-and-right-issue',
        metaTitle: 'Inpartner managing  a company for an IPO in Indonesia',
        metaDescription:
          'Preparing a company for an IPO in Indonesia can be a complex and challenging process, but We have a skilled and experienced, the journey to going public can be smoother and more successful',
        name: 'Restructuring, Pre-IPO, IPO, and Right Issue',
        title: 'Restructuring, Pre-IPO, IPO, and Right Issue',
        description: `
<p>Preparing a company for an IPO can be a complex and challenging process, but with the help of Our skilled and experienced, the journey to going public can be smoother and more successful. Inpartner competent to provide guidance and support in areas such as financial reporting, regulatory compliance, investor relations, and overall strategy, helping to maximize the company's value and position it for a successful IPO.</p>
<ol>
  <li><b>Pre IPO:</b> We transformed private company into a public trading company, our corporate experts bring key changes in organizational structure to work as public company, record keeping, transparency, develop effective growth and business strategy to attract potential investors.</li>
  <li><b>IPO:</b> Our financial experts analyses and work out the company's market valuation, maximizing company credibility and investors confidence, Initial IPO pricing, handling formal paperwork for successful stock market listing.</li>
  <li><b>Right Issue:</b> Our business experts ensure company meet the promises and executing business strategies, helps company management in handling market fluctuations, adverse situations.</li>
<ol>
`.trim(),
        image: '/storage/sector/Home - Restructuring IPO.png',
      },
      {
        id: 2,
        slug: 'alternative-investment',
        metaTitle: 'Inpartner alternative investment',
        metaDescription:
          'Alternative investments are gaining popularity in Indonesia as investors look for new opportunities to diversify their portfolios and potentially achieve higher returns',
        name: 'Alternative Investment',
        title: 'Alternative Investment',
        description: `
<p>Alternative investments are gaining popularity in Indonesia as investors look for new opportunities to diversify their portfolios and potentially achieve higher returns. Some common types of alternative investments in Indonesia include:</p>
<ol>
  <li><b>Private Equity:</b> Private equity investments in Indonesia typically involve investing in small and medium-sized enterprises (SMEs) in various sectors of the economy. These investments can provide capital to support growth and expansion and offer potential returns through the sale of equity or an IPO.</li>
  <li><b>Real Estate:</b> Real estate investments in Indonesia can include direct ownership of property, real estate investment trusts (REITs), and real estate development projects. Real estate investments can provide passive income, capital appreciation, and inflation protection.</li>
  <li><b>Hedge Funds:</b> Hedge funds are not yet widely available in Indonesia due to regulatory restrictions, but some asset managers have launched local hedge funds that invest in Indonesian equities or fixed income securities.</li>
  <li><b>Commodities:</b> Indonesia is a major producer and exporter of commodities, such as coal, palm oil, and rubber. Investors can gain exposure to these commodities through commodity futures contracts or by investing in companies in these industries.</li>
  <li><b>Venture Capital:</b> Venture capital investments in Indonesia are increasing as the country's tech and startup scene continues to grow. Venture capital firms are investing in a wide range of industries, including fintech, e-commerce, and healthcare.</li>
</ol>
<p>Inpartnering with a company in Indonesia for alternative investments would involve careful due diligence and specialized knowledge of the local market and regulatory environment. A skilled and experienced partner managing company can help navigate these complexities and identify the best investment opportunities for their clients.</p>
`.trim(),
        image: '/storage/sector/Home - Alternative Investment.png',
      },
      {
        id: 3,
        slug: 'financial-services',
        metaTitle: 'Inpartner provide a range of financial services',
        metaDescription:
          'As a partner managing company, Inpartner can provide a range of financial services to help clients manage their money, investments, and financial risk',
        name: 'Financial Services',
        title: 'Financial Services',
        description: `
<p>As a partner managing company, Inpartner can provide a range of financial services to help clients manage their money, investments, and financial risk. Here are some of the financial services that Inpartner can offer:</p>
<ol>
  <li><b>Investment Management:</b> Inpartner can provide investment management services to help clients manage their investment portfolios. This includes developing investment strategies, selecting appropriate investments, and monitoring portfolio performance.</li>
  <li><b>Corporate Finance:</b> Inpartner can provide corporate finance services to help businesses raise capital, manage mergers and acquisitions, and develop financial strategies for growth and expansion.</li>
  <li><b>Wealth Management:</b> Inpartner can provide wealth management services to help high-net-worth individuals manage their assets and plan for their financial futures. This includes investment management, financial planning, and estate planning services.</li>
  <li><b>Risk Management:</b> Inpartner can provide risk management services to help clients identify and mitigate financial risk. This includes developing risk management strategies, analyzing insurance options, and developing contingency plans.</li>
  <li><b>Advisory Services:</b> Inpartner can provide advisory services to help clients make informed financial decisions. This includes providing market analysis, financial forecasting, and expert advice on a range of financial issues.</li>
</ol>
<p>Inpartner&apos;s team of experienced financial professionals can work closely with clients to understand their unique financial goals and develop customized solutions to help them achieve those goals.</p>
`.trim(),
        image: '/storage/sector/Home - Financial Service.png',
      },
      {
        id: 4,
        slug: 'health-and-pharmaceutical',
        metaTitle: 'Inpartner Health & Pharmaceutical',
        metaDescription:
          'Inpartner can help health and pharmaceutical companies navigate the complex regulatory environment in Indonesia. This includes ensuring compliance with local regulations, obtaining necessary licenses and permits, and preparing regulatory submissions.',
        name: 'Health and Pharmaceutical',
        title: 'Health and Pharmaceutical',
        description: `
<p>As a partner managing company, Inpartner can provide a range of services to help clients in the health and pharmaceutical sectors. Here are some of the services that Inpartner can offer:</p>
<ol>
  <li><b>Business Development:</b> Inpartner can provide business development services to help health and pharmaceutical companies identify new opportunities for growth and expansion. This includes market research, identifying potential partners and collaborators, and developing business plans.</li>
  <li><b>Financial Management:</b> Inpartner can provide financial management services to help health and pharmaceutical companies manage their finances effectively. This includes developing financial strategies, managing cash flow, and preparing financial reports and budgets.</li>
  <li><b>Regulatory Compliance:</b> Inpartner can help health and pharmaceutical companies navigate the complex regulatory environment in Indonesia. This includes ensuring compliance with local regulations, obtaining necessary licenses and permits, and preparing regulatory submissions.</li>
  <li><b>Supply Chain Management:</b> Inpartner can help health and pharmaceutical companies manage their supply chains, ensuring that they have access to the materials, equipment, and services they need to operate effectively. This includes managing logistics, procurement, and inventory management.</li>
  <li><b>Partnership and Collaboration:</b> Inpartner can help health and pharmaceutical companies identify potential partners and collaborators, negotiate partnerships and collaborations, and manage ongoing relationships.</li>
</ol>
<p>Inpartner&apos;s team of experienced professionals can work closely with health and pharmaceutical clients to understand their unique needs and develop customized solutions to help them achieve their goals.</p>
`.trim(),
        image: '/storage/sector/Home - Health _ Pharm.png',
      },
      {
        id: 5,
        slug: 'biotechnology',
        metaTitle: 'Inpartner Biotechnology',
        metaDescription:
          'We work closely with biotechnology clients provide the expertise and support they need to succeed.',
        name: 'Biotechnology',
        title: 'Biotechnology',
        description: `
<p>We can provide a range of services to help clients in the biotechnology sector. Here are some of the services that Inpartner can offer:</p>
<ol>
  <li></b>Business Development:</b> Inpartner can provide business development services to help biotechnology companies identify new opportunities for growth and expansion. This includes market research, identifying potential partners and collaborators, and developing business plans.</li>
  <li></b>Financial Management:</b> Inpartner can provide financial management services to help biotechnology companies manage their finances effectively. This includes developing financial strategies, managing cash flow, and preparing financial reports and budgets.</li>
  <li></b>Regulatory Compliance:</b> Inpartner can help biotechnology companies navigate the complex regulatory environment in Indonesia. This includes ensuring compliance with local regulations, obtaining necessary licenses and permits, and preparing regulatory submissions.</li>
  <li></b>Intellectual Property:</b> Inpartner can help biotechnology companies protect their intellectual property and develop strategies for licensing and commercialization. This includes patent filing, patent prosecution, and IP licensing.</li>
  <li></b>Partnership and Collaboration:</b> Inpartner can help biotechnology companies identify potential partners and collaborators, negotiate partnerships and collaborations, and manage ongoing relationships.</li>
</ol>
<p>Inpartner&apos;s team of experienced professionals can work closely with biotechnology clients to understand their unique needs and develop customized solutions to help them achieve their goals. Whether clients are developing new drugs, developing new diagnostic tools, or conducting research in other areas of biotechnology, Inpartner can provide the expertise and support they need to succeed.</p>
`.trim(),
        image: '/storage/sector/Home - Biotechnology.png',
      },
      {
        id: 6,
        slug: 'renewable-energy',
        metaTitle: 'Inpartner  Renewable energy',
        metaDescription:
          'commitment to make world green, healthy living environment we cooperate, coordinate with renewable energy industry in marketing and promoting use of renewable energy',
        name: 'Renewable Energy',
        title: 'Renewable Energy',
        description: `
<p>Commitment to make world green, healthy living environment we cooperate, coordinate with renewable energy industry in marketing and promoting use of renewable energy, our experts organize awareness programmes and educate people about fossil fuel hazards and benefit of renewable energy.</p>
<p>Inpartner in collaboration with renewable energy companies provide services in electric vehicles.</p>
<p>We also conduct thorough research for investment opportunities in renewable energy sectors.</p>
`.trim(),
        image: '/storage/sector/Home - Renewable Energy.png',
      },
      {
        id: 7,
        slug: 'waste-solution',
        metaTitle: 'Inpartner Waste Solution',
        metaDescription:
          'provides services to manage and reduce waste for businesses, communities, and governments',
        name: 'Waste Solution',
        title: 'Waste Solution',
        description: `
<p>We  provides services to manage and reduce waste for businesses, communities, and governments. Here are some of the services that a waste solution company may offer:</p>
<ol>
  <li><b>Waste Collection:</b> We provide waste collection services to businesses, communities, and governments. This includes collecting and transporting waste to a disposal or recycling facility.</li>
  <li><b>Waste Disposal:</b> Inpartner operate a landfill or incinerator to dispose of waste that cannot be recycled.</li>
  <li><b>Recycling:</b>  operate a recycling facility to process materials such as paper, plastic, and metal for reuse.</li>
  <li><b>Composting:</b> Composting services to process organic waste such as food and yard waste into nutrient-rich compost.</li>
  <li><b>Waste Audits:</b> We conduct waste audits to help businesses and governments identify opportunities to reduce waste and increase recycling.</li>
  <li><b>Sustainability Consulting:</b> Inpartner provide sustainability consulting services to help businesses and governments develop and implement waste reduction strategies.</li>
  <li><b>Hazardous Waste Management:</b> Inpartner provide specialized services to manage hazardous waste such as medical waste, chemicals, and electronics.</li>
</ol>
<p>By offering these services, We can help businesses and communities reduce the amount of waste they produce, divert waste from landfills, and operate more sustainably. In addition to providing waste management services, a waste solution company may also offer education and outreach programs to help promote waste reduction and recycling.</p>
`.trim(),
        image: '/storage/sector/Home - Waste Solution.png',
      },
      {
        id: 8,
        slug: 'property-investment-and-development',
        metaTitle: 'Inparter Property Investment & Development',
        metaDescription:
          'Inpartner can provide a range of investment and development services to help clients achieve their financial and development goals',
        name: 'Property Investment and Development',
        title: 'Property Investment and Development',
        description: `
<p>Inpartner can provide a range of property investment and development services to help clients achieve their real estate goals. Here are some of the services that Inpartner can offer:</p>
<ol>
  <li><b>Investment Planning:</b> Inpartner can work with clients to develop an investment plan that aligns with their long-term real estate investment goals. This includes assessing risk tolerance, identifying investment opportunities, and developing a diversified real estate investment portfolio.</li>
  <li><b>Investment Management:</b> Inpartner can provide investment management services to help clients manage their real estate investment portfolios. This includes developing investment strategies, managing risk, and monitoring portfolio performance.</li>
  <li><b>Real Estate Development:</b> Inpartner can help clients with real estate development projects, including identifying development opportunities, conducting feasibility studies, and managing the development process.</li>
  <li><b>Project Management:</b> Inpartner can provide project management services to help clients manage the development and implementation of real estate projects. This includes managing project timelines, budgets, and resources, and overseeing project teams.</li>
  <li><b>Due Diligence:</b> Inpartner can conduct due diligence on potential real estate investments and development projects to help clients make informed decisions. This includes analyzing financial statements, assessing market conditions, and evaluating risks and opportunities.</li>
  <li><b>Property Management:</b> Inpartner can provide property management services to help clients manage their real estate investments. This includes overseeing day-to-day property operations, managing tenants, and maintaining the property.</li>
</ol>
<p>Inpartner&apos;s team of experienced professionals can work closely with clients to understand their unique real estate investment and development needs and develop customized solutions to help them achieve their goals. Whether clients are looking to invest in traditional real estate assets or develop innovative real estate projects, Inpartner can provide the expertise and support they need to succeed.</p>
`.trim(),
        image: '/storage/sector/Home - Property Investment.png',
      },
      {
        id: 9,
        slug: 'electric-vehicle',
        metaTitle: 'Inpartner Electric vehicle',
        metaDescription:
          'Inpartner cooperate with electric vehicle  by providing a range of services, including investment planning, project development, and project management.',
        name: 'Electric Vehicle',
        title: 'Electric Vehicle',
        description: `
<p>Electric vehicles (EVs) are vehicles that use electricity as their primary source of power, rather than gasoline or diesel fuel. EVs have become increasingly popular in recent years due to their potential to reduce greenhouse gas emissions and improve air quality. Here are some key facts and benefits of electric vehicles:</p>
<ol>
  <li><b>Reduced Emissions:</b> One of the main benefits of EVs is that they produce fewer emissions than gasoline or diesel-powered vehicles. EVs emit no tailpipe pollutants and produce significantly lower carbon emissions per mile traveled.</li>
  <li><b>Lower Operating Costs:</b> EVs have lower operating costs compared to gasoline or diesel-powered vehicles. This is because electricity is cheaper than gasoline or diesel fuel, and EVs have fewer moving parts and require less maintenance.</li>
  <li><b>Government Incentives:</b> Many governments around the world offer incentives to encourage the adoption of EVs. These incentives can include tax credits, rebates, and subsidies.</li>
  <li><b>Improved Performance:</b> EVs have high torque, which allows for faster acceleration and a smoother driving experience. Additionally, EVs have regenerative braking, which allows them to capture energy that is normally lost during braking.</li>
  <li><b>Better for the Environment:</b> EVs can help to reduce greenhouse gas emissions and improve air quality. This is because they produce no tailpipe pollutants and use electricity from renewable energy sources, which can reduce the carbon footprint of the transportation sector.</li>
</ol>
<p>Inpartner can help clients in the electric vehicle industry by providing a range of services, including investment planning, project development, and project management. Inpartner can work closely with clients to develop customized solutions that meet their unique needs and help them achieve their goals in this rapidly growing industry.</p>
`.trim(),
        image: '/storage/sector/Home - Electric Vehicle.png',
      },
      {
        id: 10,
        slug: 'infrastructure',
        metaTitle: 'Inpartner Infrastucture',
        metaDescription:
          'Inpartner provides a range of services to clients in the infrastructure industry, including investment planning, project development, and project management',
        name: 'Infrastructure',
        title: 'Infrastructure',
        description: `
<p>Infrastructure plays a critical role in supporting economic growth and development, as well as improving quality of life for people in a community.</p>
<p>Inpartner provides a range of services to clients in the infrastructure industry, including investment planning, project development, and project management. Inpartner's expertise in this area can help clients navigate the complex and challenging world of infrastructure and achieve their goals in this critical industry.</p>
`.trim(),
        image: '/storage/sector/Home - Infrastructure.png',
      },
      {
        id: 11,
        slug: 'information-technology',
        metaTitle: 'Inpartner Information technology',
        metaDescription:
          'Inpartner can offer a variety of services, including website development, network infrastructure design and management, software development, cloud computing, and cybersecurity services.',
        name: 'Information Technology',
        title: 'Information Technology',
        description: `
<p>We provide a range of IT services to clients in various industries. We have experienced IT professionals can provide solutions to complex IT problems and help clients to optimize their IT infrastructure for maximum efficiency and security. Inpartner can offer a variety of services, including network infrastructure design and management, software development, Website developing, cloud computing, and cybersecurity services.</p>
`.trim(),
        image: '/storage/sector/Home - Information Technology.png',
      },
      {
        id: 12,
        slug: 'environmental-social-and-governance',
        metaTitle: 'Inpartner ESG',
        metaDescription:
          'We takes a comprehensive approach to ESG considerations, recognizing that environmental, social, and governance factors are critical to the long-term sustainability and success of any organization',
        name: 'Environmental, Social, and Governance',
        title: 'Environmental, Social, and Governance',
        description: `
<p>Inpartner takes a comprehensive approach to ESG considerations, recognizing that environmental, social, and governance factors are critical to the long-term sustainability and success of any organization. Here are some ways that Inpartner prioritizes ESG in its business activities:</p>
<ol>
  <li><b>Environmental:</b> Inpartner is committed to minimizing its environmental impact by promoting sustainable practices across all areas of its business. This includes reducing energy consumption, minimizing waste, and using eco-friendly materials wherever possible.</li>
  <li><b>Social:</b> Inpartner prioritizes social responsibility in its business activities, recognizing the importance of ethical and inclusive practices. Inpartner promotes diversity and inclusion in its workforce, provides training and development opportunities for its employees, and supports community development initiatives.</li>
  <li><b>Governance:</b> Inpartner maintains a strong governance structure that promotes transparency, accountability, and ethical conduct. This includes regular reporting on ESG performance and risk management, as well as active engagement with stakeholders to ensure alignment with their interests.</li>
</ol>
<p>Inpartner recognizes that ESG considerations are critical to building a sustainable and resilient business, and is committed to continuously improving its ESG performance. By prioritizing ESG, Inpartner can create long-term value for its stakeholders while contributing to a more sustainable and equitable world.</p>
`.trim(),
        image: '/storage/sector/Home - Environmental.png',
      },
      {
        id: 13,
        slug: 'food-and-beverange',
        metaTitle: 'Inpartner Food and Baverage',
        metaDescription:
          'Inpartner is committed to supporting the food and beverage (F&B) industry in Indonesia by providing investment and development services to help businesses grow and thrive',
        name: 'Food and Beverange',
        title: 'Food and Beverange',
        description: `
<p>By supporting the F&B industry in Indonesia, Inpartner aims to contribute to the country's economic growth and help to meet the growing demand for high-quality, sustainable food and beverage products.</p>
`.trim(),
        image: '/storage/sector/Home - Food _ Beverage.png',
      },
      {
        id: 14,
        slug: 'industrial-gas',
        metaTitle: 'Inpartner Industrial Gas',
        metaDescription:
          'At Inpartner, we are committed to supporting the industrial gas industry in Indonesia by providing investment and development services to help businesses grow and innovate',
        name: 'Industrial Gas',
        title: 'Industrial Gas',
        description: `
<p>At Inpartner, we are committed to supporting the industrial gas industry in Indonesia by providing investment and development services to help businesses grow and innovate. Whether you are a large-scale gas producer or a small business looking to expand, we have the expertise and resources to help you achieve your goals. Contact us today to learn more about our services and how we can help you succeed.</p>
`.trim(),
        image: '/storage/sector/Home - Industrial Gas.png',
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sectors', null, {})
  },
}
