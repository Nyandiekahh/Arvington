import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import QuoteSection from '../components/QuoteSection';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const serviceDetails = [
    {
      id: 'strategic-advisory',
      title: 'Strategic Advisory & Planning',
      description: 'Comprehensive strategic guidance to navigate complex challenges and achieve organizational objectives.',
      fullDescription: 'Our strategic advisory services help organizations define clear visions, set ambitious yet achievable goals, and develop actionable roadmaps for success. We work across sectors to deliver strategies that are both visionary and grounded in practical implementation.',
      offerings: [
        'Organizational strategy development',
        'Strategic planning and roadmap design',
        'Business model innovation',
        'Market entry and expansion strategies',
        'Change management and transformation',
        'Performance improvement frameworks',
      ],
      approach: [
        'Stakeholder engagement and needs assessment',
        'Environmental scanning and trend analysis',
        'Strategic options development and evaluation',
        'Implementation planning and capacity building',
        'Monitoring and evaluation framework design',
      ],
      caseStudy: {
        title: 'National Health Strategy Development',
        client: 'Ministry of Health, East African Country',
        challenge: 'Outdated health strategy not aligned with current priorities and limited stakeholder buy-in.',
        solution: 'Led comprehensive consultative process, analyzed health system data, and co-created 5-year strategic plan.',
        impact: '30% improvement in service delivery indicators, $50M in mobilized funding, enhanced inter-agency coordination.',
      },
    },
    {
      id: 'policy-research',
      title: 'Policy Research & Analysis',
      description: 'Evidence-based policy research and analysis to inform decision-making and drive systemic change.',
      fullDescription: 'We conduct rigorous policy research that bridges the gap between theory and practice. Our analysis combines quantitative and qualitative methods to deliver insights that inform effective, equitable policy solutions.',
      offerings: [
        'Policy landscape analysis',
        'Regulatory impact assessments',
        'Policy design and formulation',
        'Evidence synthesis and literature reviews',
        'Stakeholder analysis and consultation',
        'Policy monitoring and evaluation',
      ],
      approach: [
        'Problem definition and policy scoping',
        'Data collection and analysis (mixed methods)',
        'Comparative policy analysis',
        'Policy option development and costing',
        'Stakeholder validation and refinement',
      ],
      caseStudy: {
        title: 'Renewable Energy Policy Framework',
        client: 'National Energy Regulatory Authority',
        challenge: 'Need for comprehensive policy framework to accelerate renewable energy adoption.',
        solution: 'Conducted technoeconomic analysis, stakeholder consultations, and comparative policy research.',
        impact: 'Adoption of feed-in tariff policy, 200MW new renewable capacity, 15% reduction in energy costs.',
      },
    },
    {
      id: 'technoeconomic-analysis',
      title: 'Technoeconomic Analysis',
      description: 'Sophisticated analysis combining technical feasibility with economic viability for informed investment decisions.',
      fullDescription: 'Our technoeconomic analysis provides decision-makers with comprehensive assessments of technology options, investment opportunities, and infrastructure projects. We evaluate both technical performance and economic returns to guide strategic investments.',
      offerings: [
        'Feasibility studies and investment analysis',
        'Cost-benefit analysis (CBA)',
        'Levelized cost of energy (LCOE) analysis',
        'Technology assessment and comparison',
        'Risk analysis and sensitivity testing',
        'Financial modeling and projections',
      ],
      approach: [
        'Technical specification and performance analysis',
        'Capital and operational cost estimation',
        'Revenue and benefit quantification',
        'Financial and economic modeling',
        'Risk assessment and scenario planning',
      ],
      caseStudy: {
        title: 'Solar Mini-Grid Investment Analysis',
        client: 'Development Finance Institution',
        challenge: 'Evaluate viability of solar mini-grid investments across rural communities.',
        solution: 'Conducted detailed technoeconomic analysis of 15 proposed sites with varied configurations.',
        impact: '$25M investment approved, 50,000 people gaining electricity access, 18% IRR achieved.',
      },
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Insights',
      description: 'Advanced data analytics to extract actionable insights from complex datasets and inform strategic decisions.',
      fullDescription: 'We transform raw data into strategic intelligence. Using advanced analytical techniques and visualization tools, we help organizations understand trends, identify opportunities, and make evidence-based decisions.',
      offerings: [
        'Data strategy and governance',
        'Statistical analysis and modeling',
        'Predictive analytics',
        'Data visualization and dashboards',
        'Geospatial analysis',
        'Monitoring and evaluation systems',
      ],
      approach: [
        'Data needs assessment and scoping',
        'Data collection, cleaning, and validation',
        'Exploratory and advanced analytics',
        'Insight generation and interpretation',
        'Visualization and reporting',
      ],
      caseStudy: {
        title: 'Health System Performance Analytics',
        client: 'Regional Health Authority',
        challenge: 'Limited visibility into health facility performance and resource allocation efficiency.',
        solution: 'Developed comprehensive analytics platform integrating multiple data sources with interactive dashboards.',
        impact: '25% improvement in resource allocation efficiency, real-time performance monitoring, data-driven budgeting.',
      },
    },
    {
      id: 'capacity-building',
      title: 'Capacity Building & Training',
      description: 'Empowering teams with skills, knowledge, and tools to sustain impact beyond our engagement.',
      fullDescription: 'Sustainable change requires capable teams. We design and deliver customized capacity building programs that equip organizations with the skills and systems needed for long-term success.',
      offerings: [
        'Strategic planning workshops',
        'Policy analysis training',
        'Data analytics and M&E training',
        'Leadership development programs',
        'Change management facilitation',
        'Custom curriculum development',
      ],
      approach: [
        'Training needs assessment',
        'Curriculum and materials design',
        'Interactive workshop delivery',
        'Practical exercises and case studies',
        'Post-training support and mentoring',
      ],
      caseStudy: {
        title: 'Strategic Planning Capacity Program',
        client: 'Network of 25 NGOs',
        challenge: 'Limited strategic planning capacity across member organizations.',
        solution: 'Designed and delivered 6-month capacity building program with workshops, tools, and coaching.',
        impact: '100% of participants developed strategic plans, 80% secured increased funding, network-wide M&E system.',
      },
    },
  ];

  return (
    <div>
      <Services />

      <QuoteSection
        quote="Great strategies are not just visionary—they are actionable, evidence-based, and designed for the context in which they must succeed."
        author="Arvington Limited"
        role="Our Service Philosophy"
        background="#ffffff"
      />

      {/* Detailed Service Sections */}
      {serviceDetails.map((service, index) => (
        <section
          key={service.id}
          style={{
            padding: '6rem 2rem',
            backgroundColor: index % 2 === 0 ? '#fafafa' : '#ffffff',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: '1.5rem',
                letterSpacing: '-1px',
              }}
            >
              {service.title}
            </h2>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#4a4a4a',
                lineHeight: '1.8',
                marginBottom: '3rem',
              }}
            >
              {service.fullDescription}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3rem',
                marginBottom: '4rem',
              }}
            >
              {/* What We Offer */}
              <div
                style={{
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#fafafa',
                  padding: '2.5rem',
                  borderRadius: '12px',
                  border: '1px solid #e5e5e5',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '1.5rem',
                  }}
                >
                  What We Offer
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {service.offerings.map((offering, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '0.75rem',
                        fontSize: '1rem',
                        color: '#4a4a4a',
                        lineHeight: '1.6',
                      }}
                    >
                      <CheckCircle size={20} style={{ color: '#1a1a1a', marginTop: '2px', flexShrink: 0 }} />
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Approach */}
              <div
                style={{
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#fafafa',
                  padding: '2.5rem',
                  borderRadius: '12px',
                  border: '1px solid #e5e5e5',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '1.5rem',
                  }}
                >
                  Our Approach
                </h3>
                <ol
                  style={{
                    listStyle: 'none',
                    counterReset: 'approach',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {service.approach.map((step, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '1rem',
                        fontSize: '1rem',
                        color: '#4a4a4a',
                        lineHeight: '1.6',
                        counterIncrement: 'approach',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '28px',
                          height: '28px',
                          backgroundColor: '#1a1a1a',
                          color: 'white',
                          borderRadius: '50%',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          flexShrink: 0,
                        }}
                      >
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Case Study */}
            <div
              style={{
                backgroundColor: '#1a1a1a',
                padding: '3rem',
                borderRadius: '12px',
                color: 'white',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  marginBottom: '1.5rem',
                }}
              >
                Case Study
              </div>
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  letterSpacing: '-0.5px',
                }}
              >
                {service.caseStudy.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  marginBottom: '2rem',
                  opacity: 0.8,
                }}
              >
                {service.caseStudy.client}
              </p>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Challenge
                  </h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
                    {service.caseStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Our Solution
                  </h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
                    {service.caseStudy.solution}
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Impact
                  </h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
                    {service.caseStudy.impact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#fafafa' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '1.5rem',
              letterSpacing: '-1px',
            }}
          >
            Ready to Explore How We Can Help?
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#6a6a6a',
              lineHeight: '1.7',
              marginBottom: '2.5rem',
            }}
          >
            Let's discuss your specific needs and design a tailored approach to achieve your strategic objectives.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1.25rem 2.5rem',
              backgroundColor: '#1a1a1a',
              color: 'white',
              borderRadius: '8px',
              fontSize: '1.05rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#333';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Schedule a Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
