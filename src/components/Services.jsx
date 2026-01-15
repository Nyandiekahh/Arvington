import React from 'react';
import { Lightbulb, LineChart, FileText, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Lightbulb size={28} />,
      title: 'Strategic Advisory',
      description: 'High-level strategic guidance for organizations navigating socio-economic, agricultural, and sustainability challenges with data-driven insights.',
    },
    {
      icon: <LineChart size={28} />,
      title: 'Technoeconomic Analysis',
      description: 'Comprehensive analysis integrating economic viability, technology efficacy, and systemic impact assessment for informed decision-making.',
    },
    {
      icon: <FileText size={28} />,
      title: 'Policy Formulation',
      description: 'Evidence-based policy development and advisory services where quantitative insights drive strategic recommendations and implementation.',
    },
    {
      icon: <Users size={28} />,
      title: 'Systems Thinking Consulting',
      description: 'Expert guidance at the intersection of economic policy, systems change, and sustainable development for transformative impact.',
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: '6rem 2rem',
        backgroundColor: '#ffffff',
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
            Our Services
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#6a6a6a',
              maxWidth: '750px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            We offer specialized advisory services that combine strategic insight, rigorous analysis, 
            and practical implementation support tailored to your organization's needs.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                border: '1px solid #e5e5e5',
                backgroundColor: '#fafafa',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fafafa';
                e.currentTarget.style.borderColor = '#e5e5e5';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  padding: '1rem',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  marginBottom: '1.5rem',
                  color: '#1a1a1a',
                  border: '1px solid #e5e5e5',
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '1rem',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#6a6a6a',
                  lineHeight: '1.7',
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;