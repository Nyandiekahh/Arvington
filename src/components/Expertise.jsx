import React from 'react';
import { Sprout, Building2, Briefcase, Layers } from 'lucide-react';

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: <Sprout size={24} />,
      title: 'Agriculture & Food Systems',
      items: [
        'Technoeconomic optimization in sustainable food systems',
        'Biological control and agricultural innovation',
        'Agroecology and food security strategies',
      ],
    },
    {
      icon: <Building2 size={24} />,
      title: 'Government & Public Sector',
      items: [
        'Policy formulation and advisory',
        'Economic development strategies',
        'Public sector transformation',
      ],
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Development Partners & NGOs',
      items: [
        'Program strategy and design',
        'Impact assessment and evaluation',
        'Development economics consulting',
      ],
    },
    {
      icon: <Layers size={24} />,
      title: 'Private Sector Advisory',
      items: [
        'Strategic planning support',
        'Market analysis and feasibility studies',
        'Sustainability integration',
      ],
    },
  ];

  return (
    <section
      id="expertise"
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
            Areas of Expertise
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
            Our multidisciplinary expertise spans critical sectors and client segments, 
            enabling us to deliver comprehensive solutions to complex challenges.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #e5e5e5',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    padding: '0.75rem',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    border: '1px solid #e5e5e5',
                  }}
                >
                  {area.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                  }}
                >
                  {area.title}
                </h3>
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {area.items.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '0.95rem',
                      color: '#6a6a6a',
                      paddingLeft: '1.5rem',
                      position: 'relative',
                      lineHeight: '1.6',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: '0',
                        color: '#1a1a1a',
                        fontWeight: '600',
                      }}
                    >
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;