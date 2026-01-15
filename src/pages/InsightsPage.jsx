import React, { useState } from 'react';
import QuoteSection from '../components/QuoteSection';
import { BookOpen, TrendingUp, Globe, Heart, Lightbulb, ArrowRight, Clock, User } from 'lucide-react';

const InsightsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Health Policy', 'Energy & Climate', 'Economic Development', 'Strategy', 'Data & Analytics'];

  const articles = [
    {
      title: 'The Future of Universal Health Coverage in Africa',
      category: 'Health Policy',
      author: 'Seth Kipsang Mutuba',
      date: 'January 10, 2026',
      readTime: '12 min read',
      excerpt: 'Exploring innovative financing mechanisms and policy frameworks that can accelerate progress toward universal health coverage across the African continent.',
      content: `Universal Health Coverage (UHC) remains one of Africa's most ambitious yet critical health goals. As we navigate the complexities of health system financing, service delivery, and equity, evidence-based policy solutions are more important than ever.

**Key Challenges:**
- Limited fiscal space for health investments
- Fragmented health financing systems
- Inequitable access to quality services
- Weak primary healthcare infrastructure

**Promising Approaches:**
1. **Risk Pooling and Insurance Schemes**: Countries like Rwanda have demonstrated that well-designed community-based health insurance can significantly improve coverage and financial protection.

2. **Results-Based Financing**: Linking funding to performance outcomes has shown promise in improving service quality and efficiency.

3. **Digital Health Integration**: Leveraging technology for patient records, supply chain management, and telemedicine can reduce costs and improve access.

**Policy Recommendations:**
- Increase domestic resource mobilization for health
- Strengthen primary healthcare as the foundation of UHC
- Invest in health workforce development
- Implement progressive financing mechanisms that protect the poor

The path to UHC requires political commitment, innovative financing, and sustained investment in health systems. Evidence-based policymaking will be critical to navigating this journey successfully.`,
      icon: <Heart size={24} />,
    },
    {
      title: 'Technoeconomic Analysis: A Guide for Energy Project Evaluation',
      category: 'Energy & Climate',
      author: 'Seth Kipsang Mutuba',
      date: 'December 28, 2025',
      readTime: '15 min read',
      excerpt: 'A comprehensive guide to conducting technoeconomic analysis for renewable energy projects, with practical examples and best practices.',
      content: `Technoeconomic analysis (TEA) is essential for evaluating the viability of energy projects. This guide provides a framework for conducting rigorous analysis that informs investment decisions.

**What is Technoeconomic Analysis?**
TEA combines technical performance evaluation with economic and financial assessment to determine project feasibility and attractiveness.

**Key Components:**

**1. Technical Analysis**
- Technology selection and specification
- Resource assessment (solar, wind, hydro, etc.)
- System design and configuration
- Performance modeling and simulation
- Operational parameters

**2. Cost Analysis**
- Capital expenditure (CAPEX): equipment, installation, infrastructure
- Operational expenditure (OPEX): maintenance, labor, fuel
- Replacement and lifecycle costs
- Decommissioning costs

**3. Financial Analysis**
- Revenue projections
- Cash flow modeling
- Net Present Value (NPV)
- Internal Rate of Return (IRR)
- Payback period
- Levelized Cost of Energy (LCOE)

**4. Risk Assessment**
- Sensitivity analysis
- Scenario planning
- Risk mitigation strategies

**Best Practices:**
- Use conservative assumptions for costs and performance
- Conduct sensitivity analysis on key variables
- Include all relevant costs and benefits
- Consider externalities and co-benefits
- Validate assumptions with market data

**Case Example: Solar Mini-Grid**
For a 50kW solar mini-grid serving 200 households:
- CAPEX: $150,000 ($3/W)
- OPEX: $7,500/year
- Revenue: $18,000/year (tariff-based)
- NPV (10% discount): $42,000
- IRR: 15.2%
- LCOE: $0.22/kWh

This analysis informed a successful $25M investment across 15 sites, providing electricity to 50,000 people.`,
      icon: <TrendingUp size={24} />,
    },
    {
      title: 'Building Data-Driven Organizations: From Strategy to Implementation',
      category: 'Data & Analytics',
      author: 'Seth Kipsang Mutuba',
      date: 'December 15, 2025',
      readTime: '10 min read',
      excerpt: 'Practical insights on how organizations can build data capabilities, develop analytics systems, and foster data-driven decision-making cultures.',
      content: `In an era of information abundance, the ability to harness data for strategic decision-making is a competitive advantage. This article explores how organizations can build robust data capabilities.

**The Data-Driven Maturity Curve:**

**Level 1: Data Collection**
- Basic data capture systems
- Manual reporting
- Limited analysis

**Level 2: Data Management**
- Centralized data storage
- Standard reporting processes
- Basic analytics

**Level 3: Data Analysis**
- Advanced analytics capabilities
- Predictive modeling
- Interactive dashboards

**Level 4: Data-Driven Culture**
- Analytics embedded in decision-making
- Real-time insights
- Continuous optimization

**Building Blocks of Data-Driven Organizations:**

**1. Data Strategy**
- Define clear objectives and use cases
- Identify priority data sources
- Establish governance frameworks
- Set quality standards

**2. Infrastructure & Tools**
- Data collection and storage systems
- Analytics platforms and tools
- Visualization and reporting solutions
- Security and privacy measures

**3. Skills & Capacity**
- Data literacy training for all staff
- Technical skills development
- Analytics team building
- Change management

**4. Culture & Process**
- Leadership commitment to data-driven decision-making
- Integration into planning and M&E cycles
- Evidence-based performance management
- Learning and adaptation mechanisms

**Common Pitfalls to Avoid:**
- Technology-first approaches without clear use cases
- Underinvestment in data quality and cleaning
- Lack of user-centered design for dashboards
- Insufficient training and capacity building
- No clear ownership and accountability

**Success Story:**
A regional health authority implemented a comprehensive data strategy, resulting in:
- 25% improvement in resource allocation efficiency
- Real-time performance monitoring across 200+ facilities
- Data-driven budgeting and planning
- Enhanced accountability and transparency

The journey to becoming data-driven requires commitment, investment, and sustained effort—but the payoffs in terms of improved decision-making and organizational performance are substantial.`,
      icon: <TrendingUp size={24} />,
    },
    {
      title: 'Strategic Planning Best Practices for Development Organizations',
      category: 'Strategy',
      author: 'Seth Kipsang Mutuba',
      date: 'November 30, 2025',
      readTime: '14 min read',
      excerpt: 'A comprehensive framework for developing strategic plans that drive impact, with lessons from successful development organizations across Africa.',
      content: `Strategic planning is more than a compliance exercise—it's an opportunity to clarify vision, align stakeholders, and chart a path toward meaningful impact.

**The Strategic Planning Process:**

**Phase 1: Preparation & Assessment (Weeks 1-4)**
- Establish planning team and governance
- Review past performance and lessons learned
- Conduct environmental scanning (PESTLE analysis)
- Engage stakeholders for input
- Assess organizational capacity

**Phase 2: Strategic Framework Development (Weeks 5-8)**
- Refine/articulate vision, mission, values
- Identify strategic priorities and goals
- Develop theory of change
- Set measurable objectives and targets
- Define strategic initiatives

**Phase 3: Implementation Planning (Weeks 9-12)**
- Develop detailed action plans
- Resource allocation and budgeting
- Define roles and responsibilities
- Establish monitoring and evaluation framework
- Identify risks and mitigation strategies

**Phase 4: Validation & Approval (Weeks 13-16)**
- Stakeholder review and validation
- Board/leadership approval
- Communication and launch planning

**Critical Success Factors:**

**1. Inclusive Process**
- Engage diverse stakeholders (staff, board, beneficiaries, partners)
- Create space for honest dialogue
- Build ownership and buy-in

**2. Evidence-Based**
- Ground analysis in data and research
- Learn from past performance
- Benchmark against peers
- Consider external trends and evidence

**3. Focused & Realistic**
- Limit strategic priorities (3-5 is optimal)
- Ensure alignment between ambition and resources
- Build on organizational strengths
- Be honest about constraints

**4. Action-Oriented**
- Translate strategy into concrete actions
- Assign clear accountability
- Set realistic timelines
- Establish monitoring mechanisms

**5. Adaptive**
- Build in review and learning cycles
- Allow flexibility to respond to changes
- Embrace continuous improvement

**Common Pitfalls:**
- Strategic plans that sit on shelves
- Overly ambitious goals without resources
- Lack of stakeholder buy-in
- Weak M&E frameworks
- Insufficient implementation planning

**Impact Example:**
We supported a network of 25 NGOs through strategic planning capacity building:
- 100% developed robust 5-year strategic plans
- 80% secured increased funding aligned to strategies
- Network-wide M&E system established
- Enhanced collaboration and learning

Effective strategic planning requires rigor, participation, and commitment to implementation—but when done well, it can transform organizational effectiveness and impact.`,
      icon: <Lightbulb size={24} />,
    },
    {
      title: 'Climate Finance in Africa: Opportunities and Challenges',
      category: 'Energy & Climate',
      author: 'Seth Kipsang Mutuba',
      date: 'November 15, 2025',
      readTime: '11 min read',
      excerpt: 'Analyzing the landscape of climate finance in Africa, barriers to access, and strategies for unlocking investment in climate action.',
      content: `Africa faces a climate finance paradox: enormous need but limited access to the billions in global climate finance. Understanding this landscape is critical for countries and organizations seeking to fund climate action.

**The Climate Finance Landscape:**

**Global Commitments:**
- $100 billion/year pledge from developed countries
- Growing private sector interest in green investments
- Multilateral climate funds (GCF, GEF, CIF)
- Bilateral climate finance arrangements

**African Reality:**
- Africa receives <5% of global climate finance
- Adaptation finance severely underfunded
- High transaction costs for small projects
- Limited access to international finance

**Key Barriers:**

**1. Project Preparation**
- Weak project pipelines
- Insufficient feasibility studies
- Lack of bankable proposals
- Limited technical capacity

**2. Risk Perceptions**
- Perceived political and regulatory risk
- Currency and credit risk
- Limited track record in some sectors
- Weak enabling environments

**3. Institutional Capacity**
- Limited accreditation to climate funds
- Weak fiduciary systems
- Insufficient monitoring and reporting
- Low absorption capacity

**Strategies for Success:**

**1. Build Project Pipelines**
- Invest in feasibility studies and TEA
- Develop standardized project templates
- Create project preparation facilities
- Bundle small projects for scale

**2. De-Risk Investments**
- Policy and regulatory reforms
- Guarantees and concessional finance
- Blended finance structures
- Insurance and risk mitigation tools

**3. Strengthen Institutions**
- Build accreditation capacity
- Enhance fiduciary systems
- Invest in M&E and reporting
- Develop local expertise

**4. Leverage Innovation**
- Digital climate finance platforms
- Results-based climate finance
- Carbon markets and credits
- Green bonds and sukuk

**Success Stories:**
- Kenya's geothermal expansion (GCF + private)
- Morocco's renewable energy program
- Ethiopia's REDD+ forest finance
- Rwanda's green growth strategy

**Looking Ahead:**
Unlocking climate finance requires systemic efforts: better projects, stronger institutions, innovative finance, and enabling policy environments. With the right approach, Africa can access the resources needed for ambitious climate action.`,
      icon: <Globe size={24} />,
    },
    {
      title: 'Monitoring & Evaluation: Turning Data Into Learning and Impact',
      category: 'Data & Analytics',
      author: 'Seth Kipsang Mutuba',
      date: 'October 28, 2025',
      readTime: '13 min read',
      excerpt: 'Best practices for designing and implementing M&E systems that drive learning, accountability, and improved outcomes.',
      content: `Monitoring and Evaluation (M&E) is often seen as a compliance burden, but when done well, it's a powerful tool for learning and improving impact.

**Fundamentals of Effective M&E:**

**1. Theory of Change**
Start with a clear logic:
- Inputs → Activities → Outputs → Outcomes → Impact
- Define assumptions and external factors
- Identify indicators at each level
- Map causal pathways

**2. Indicator Selection**
Good indicators are SMART:
- Specific: clearly defined
- Measurable: can be quantified or verified
- Achievable: within your control/influence
- Relevant: aligned to objectives
- Time-bound: specific timeframe

**Types of Indicators:**
- **Inputs**: resources invested (budget, staff)
- **Outputs**: direct products (trainings delivered, policies developed)
- **Outcomes**: changes in behavior/conditions (capacity improved, policy adopted)
- **Impact**: long-term effects (health improved, poverty reduced)

**3. Data Collection Methods**

**Quantitative:**
- Surveys and questionnaires
- Administrative data and records
- Performance metrics and KPIs
- Statistical analysis

**Qualitative:**
- Interviews and focus groups
- Case studies and stories
- Observation and ethnography
- Document review

**Mixed Methods:**
- Combine quant and qual for depth and breadth
- Triangulate findings for validation
- Rich understanding of context and change

**4. M&E System Design**

**Components:**
- Indicator framework and definitions
- Data collection tools and protocols
- Data management systems
- Analysis and reporting processes
- Learning and adaptation mechanisms
- Roles and responsibilities

**Best Practices:**
- Keep it simple—focus on priority indicators
- Build on existing systems (don't create parallel)
- Ensure data quality through validation
- Make data accessible and user-friendly
- Create regular review and learning cycles
- Use findings to inform decisions

**5. From Monitoring to Learning**

**Create Learning Cultures:**
- Regular data review meetings
- Space for reflection and dialogue
- Non-punitive approach to "failure"
- Adaptation based on evidence
- Documentation and knowledge sharing

**Adaptive Management:**
1. Monitor implementation and context
2. Reflect on what's working/not working
3. Decide on adaptations
4. Implement changes
5. Continue monitoring

**Common Pitfalls:**
- Too many indicators (focus on vital few)
- Poor data quality and verification
- Data not used for decision-making
- M&E seen as separate from programming
- Insufficient resources allocated
- Overly complex systems

**Impact Example:**
A network M&E system we designed:
- 15 core indicators across 25 organizations
- Standardized tools and online platform
- Quarterly data review and learning sessions
- Annual aggregated reporting
- 40% improvement in program effectiveness

M&E is most powerful when it shifts from compliance to learning—when data becomes a tool for continuous improvement and greater impact.`,
      icon: <BookOpen size={24} />,
    },
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: '8rem 2rem 6rem',
          backgroundColor: '#1a1a1a',
          color: 'white',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              marginBottom: '1.5rem',
              letterSpacing: '-2px',
            }}
          >
            Insights & Knowledge
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#e5e5e5',
            }}
          >
            Thought leadership, practical guides, and industry insights to help you navigate complex policy and strategy challenges.
          </p>
        </div>
      </section>

      <QuoteSection
        quote="Knowledge is power, but applied knowledge is transformation. We share what we learn so others can benefit from our experience."
        author="Arvington Limited"
        role="Our Commitment to Learning"
      />

      {/* Category Filter */}
      <section style={{ padding: '3rem 2rem 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: selectedCategory === category ? '#1a1a1a' : 'white',
                  color: selectedCategory === category ? 'white' : '#4a4a4a',
                  border: '1px solid #e5e5e5',
                  borderRadius: '25px',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = '#fafafa';
                    e.currentTarget.style.borderColor = '#1a1a1a';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = '#e5e5e5';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: '0 2rem 6rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '3rem',
            }}
          >
            {filteredArticles.map((article, index) => (
              <article
                key={index}
                style={{
                  backgroundColor: '#fafafa',
                  borderRadius: '12px',
                  border: '1px solid #e5e5e5',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '0.5rem 1rem',
                      backgroundColor: 'white',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      color: '#4a4a4a',
                      marginBottom: '1.5rem',
                      border: '1px solid #e5e5e5',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {article.category}
                  </div>
                  
                  <h2
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      marginBottom: '1rem',
                      lineHeight: '1.4',
                    }}
                  >
                    {article.title}
                  </h2>
                  
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#6a6a6a',
                      lineHeight: '1.7',
                      marginBottom: '1.5rem',
                      flex: 1,
                    }}
                  >
                    {article.excerpt}
                  </p>
                  
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      fontSize: '0.9rem',
                      color: '#888',
                      marginBottom: '1.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid #e5e5e5',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <User size={16} />
                      <span>{article.author}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={16} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#1a1a1a',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                    }}
                  >
                    Read Full Article <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#fafafa' }}>
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '12px',
            border: '1px solid #e5e5e5',
          }}
        >
          <BookOpen size={48} style={{ color: '#1a1a1a', marginBottom: '1.5rem' }} />
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '1rem',
              letterSpacing: '-0.5px',
            }}
          >
            Stay Informed
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#6a6a6a',
              lineHeight: '1.7',
              marginBottom: '2rem',
            }}
          >
            Subscribe to receive our latest insights, research findings, and thought leadership directly in your inbox.
          </p>
          <form
            style={{
              display: 'flex',
              gap: '1rem',
              maxWidth: '500px',
              margin: '0 auto',
            }}
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing! We\'ll keep you updated with our latest insights.');
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              style={{
                flex: 1,
                padding: '1rem',
                fontSize: '1rem',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#1a1a1a',
                color: 'white',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#333';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a1a';
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
