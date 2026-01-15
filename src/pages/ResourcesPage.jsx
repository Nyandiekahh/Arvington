import React from 'react';
import { Download, FileText, BookOpen, Video, TrendingUp, Users } from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
    {
      category: 'Guides & Toolkits',
      icon: <BookOpen size={32} />,
      items: [
        {
          title: 'Strategic Planning Toolkit for NGOs',
          description: 'A comprehensive guide with templates, tools, and examples for developing robust strategic plans.',
          type: 'PDF Guide',
          pages: '45 pages',
        },
        {
          title: 'Monitoring & Evaluation Framework Template',
          description: 'Ready-to-use M&E framework template with indicator definitions and data collection tools.',
          type: 'Excel Template',
          pages: 'Multiple sheets',
        },
        {
          title: 'Policy Analysis Step-by-Step Guide',
          description: 'Practical guide to conducting rigorous policy analysis and developing evidence-based recommendations.',
          type: 'PDF Guide',
          pages: '32 pages',
        },
      ],
    },
    {
      category: 'Research & Whitepapers',
      icon: <FileText size={32} />,
      items: [
        {
          title: 'The State of Universal Health Coverage in East Africa',
          description: 'Comprehensive analysis of UHC progress, challenges, and opportunities across East African countries.',
          type: 'Research Paper',
          pages: '68 pages',
        },
        {
          title: 'Renewable Energy Investment in Sub-Saharan Africa',
          description: 'Market analysis and investment opportunities in solar, wind, and hydro across the region.',
          type: 'Market Report',
          pages: '52 pages',
        },
        {
          title: 'Climate Finance Mechanisms: A Practical Guide',
          description: 'Overview of climate finance sources, access requirements, and application strategies.',
          type: 'Whitepaper',
          pages: '28 pages',
        },
      ],
    },
    {
      category: 'Case Studies',
      icon: <TrendingUp size={32} />,
      items: [
        {
          title: 'National Health Strategy Development: Kenya Case Study',
          description: 'Detailed case study on our approach to developing a comprehensive national health strategy.',
          type: 'Case Study',
          pages: '18 pages',
        },
        {
          title: 'Solar Mini-Grid Investment Analysis',
          description: 'Technoeconomic analysis methodology and results for rural electrification projects.',
          type: 'Case Study',
          pages: '24 pages',
        },
        {
          title: 'Capacity Building for Strategic Planning: Multi-Organization Program',
          description: 'Lessons learned from a comprehensive capacity building initiative across 25 NGOs.',
          type: 'Case Study',
          pages: '20 pages',
        },
      ],
    },
    {
      category: 'Webinars & Presentations',
      icon: <Video size={32} />,
      items: [
        {
          title: 'Introduction to Technoeconomic Analysis',
          description: 'Webinar recording covering fundamentals of TEA with practical examples.',
          type: 'Video Recording',
          pages: '60 minutes',
        },
        {
          title: 'Data-Driven Decision Making in Development',
          description: 'Presentation on building analytics capabilities and fostering data cultures.',
          type: 'Slide Deck',
          pages: '45 slides',
        },
        {
          title: 'Strategic Planning Masterclass',
          description: 'Three-part webinar series on developing and implementing strategic plans.',
          type: 'Video Series',
          pages: '3 x 90 minutes',
        },
      ],
    },
  ];

  const teachingResources = [
    {
      title: 'Principles of Effective Strategy',
      icon: <Users size={24} />,
      lessons: [
        'Start with a clear vision and purpose',
        'Ground your strategy in evidence and analysis',
        'Focus on vital few priorities, not everything',
        'Ensure alignment between ambition and resources',
        'Build in learning and adaptation mechanisms',
        'Implementation is where strategy succeeds or fails',
      ],
    },
    {
      title: 'Data Analysis Best Practices',
      icon: <TrendingUp size={24} />,
      lessons: [
        'Always start with clear questions and objectives',
        'Invest time in data cleaning and validation',
        'Use appropriate methods for your data and questions',
        'Visualize effectively—charts should tell a story',
        'Triangulate findings from multiple sources',
        'Make insights actionable and accessible',
      ],
    },
    {
      title: 'Policy Development Fundamentals',
      icon: <BookOpen size={24} />,
      lessons: [
        'Understand the problem before proposing solutions',
        'Engage stakeholders throughout the process',
        'Consider multiple policy options and trade-offs',
        'Ground recommendations in evidence',
        'Assess feasibility—political, technical, financial',
        'Plan for implementation from the start',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
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
            Resources & Learning
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#e5e5e5',
            }}
          >
            Free tools, guides, and knowledge resources to support your strategic planning, policy development, and data analysis work.
          </p>
        </div>
      </section>

      {/* Teaching Principles */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '3rem',
              letterSpacing: '-1px',
              textAlign: 'center',
            }}
          >
            Core Principles We Teach
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
            }}
          >
            {teachingResources.map((resource, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#fafafa',
                  padding: '2.5rem',
                  borderRadius: '12px',
                  border: '1px solid #e5e5e5',
                }}
              >
                <div
                  style={{
                    color: '#1a1a1a',
                    marginBottom: '1.5rem',
                  }}
                >
                  {resource.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '1.5rem',
                  }}
                >
                  {resource.title}
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {resource.lessons.map((lesson, idx) => (
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
                      <span
                        style={{
                          display: 'inline-block',
                          width: '6px',
                          height: '6px',
                          backgroundColor: '#1a1a1a',
                          borderRadius: '50%',
                          marginTop: '0.5rem',
                          flexShrink: 0,
                        }}
                      />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      {resources.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          style={{
            padding: '6rem 2rem',
            backgroundColor: categoryIndex % 2 === 0 ? '#fafafa' : '#ffffff',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ color: '#1a1a1a' }}>{category.icon}</div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  letterSpacing: '-0.5px',
                }}
              >
                {category.category}
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2.5rem',
              }}
            >
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  style={{
                    backgroundColor: categoryIndex % 2 === 0 ? '#ffffff' : '#fafafa',
                    padding: '2.5rem',
                    borderRadius: '12px',
                    border: '1px solid #e5e5e5',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
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
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <span
                      style={{
                        padding: '0.4rem 0.9rem',
                        backgroundColor: '#1a1a1a',
                        color: 'white',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                      }}
                    >
                      {item.type}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>
                      {item.pages}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      marginBottom: '1rem',
                      lineHeight: '1.4',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#6a6a6a',
                      lineHeight: '1.7',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {item.description}
                  </p>
                  <button
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.875rem 1.5rem',
                      backgroundColor: '#1a1a1a',
                      color: 'white',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
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
                    onClick={() => alert('Resource download will be available soon. Please contact us for early access.')}
                  >
                    <Download size={18} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Request Custom Resource */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#1a1a1a', color: 'white' }}>
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
              marginBottom: '1.5rem',
              letterSpacing: '-1px',
            }}
          >
            Need Something Specific?
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#e5e5e5',
              lineHeight: '1.7',
              marginBottom: '2.5rem',
            }}
          >
            Can't find what you're looking for? We can develop custom resources, tools, and training materials tailored to your organization's needs.
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '1.25rem 2.5rem',
              backgroundColor: 'white',
              color: '#1a1a1a',
              borderRadius: '8px',
              fontSize: '1.05rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Request Custom Resource
          </a>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
