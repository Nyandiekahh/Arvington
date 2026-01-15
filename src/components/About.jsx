import React from 'react';
import { Target, Globe, BarChart3 } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Our Mission',
      description: 'To provide strategic advisory services that drive sustainable development and informed decision-making through rigorous analysis and evidence-based insights.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Our Approach',
      description: 'We combine global best practices with local context, delivering solutions that are both innovative and practically implementable across diverse sectors.',
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Our Impact',
      description: 'Data-driven policy recommendations and technoeconomic strategies that create measurable value for governments, organizations, and communities.',
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '6rem 2rem',
        backgroundColor: '#fafafa',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '1rem',
              letterSpacing: '-1px',
            }}
          >
            About Arvington Limited
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#6a6a6a',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.8',
            }}
          >
            Based in Nairobi, Kenya, Arvington Limited is a privately held advisory and strategy services firm 
            specializing in strategic planning, economic analysis, and evidence-based policy development. 
            We serve as trusted advisors on complex development and economic challenges facing organizations 
            across Africa and beyond.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {values.map((value, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '12px',
                border: '1px solid #e5e5e5',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  color: '#1a1a1a',
                  marginBottom: '1.5rem',
                }}
              >
                {value.icon}
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '1rem',
                }}
              >
                {value.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#6a6a6a',
                  lineHeight: '1.7',
                }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;