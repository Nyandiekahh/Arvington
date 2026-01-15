import React from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import QuoteSection from '../components/QuoteSection';
import { Heart, Eye, Target, Award, Users, Globe } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do, from analysis to client service, ensuring quality and rigor in our work.',
    },
    {
      icon: <Heart size={32} />,
      title: 'Integrity',
      description: 'Transparency, honesty, and ethical conduct form the foundation of our relationships with clients and partners.',
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working closely with stakeholders to co-create sustainable solutions.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Impact',
      description: 'Everything we do is oriented toward creating measurable, positive change in communities and organizations.',
    },
    {
      icon: <Target size={32} />,
      title: 'Innovation',
      description: 'We embrace new methodologies and approaches, continuously evolving to meet emerging challenges.',
    },
    {
      icon: <Eye size={32} />,
      title: 'Evidence-Based',
      description: 'Our recommendations are grounded in rigorous data analysis and proven methodologies.',
    },
  ];

  return (
    <div>
      <About />

      <QuoteSection
        quote="Our mission is not just to advise, but to partner in transformation—using evidence, strategy, and innovation to unlock potential across Africa."
        author="Arvington Limited"
        role="Our Commitment"
        background="#ffffff"
      />

      {/* Our Story */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '2rem',
              letterSpacing: '-1px',
              textAlign: 'center',
            }}
          >
            Our Story
          </h2>
          <div
            style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: '12px',
              border: '1px solid #e5e5e5',
            }}
          >
            <p
              style={{
                fontSize: '1.1rem',
                color: '#4a4a4a',
                lineHeight: '1.9',
                marginBottom: '1.5rem',
              }}
            >
              Arvington Limited was founded with a clear vision: to bridge the gap between strategic ambition and practical implementation across Africa. Born from years of experience in policy advisory, technoeconomic analysis, and development consulting, we recognized a critical need for firms that combine deep analytical rigor with contextual understanding.
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#4a4a4a',
                lineHeight: '1.9',
                marginBottom: '1.5rem',
              }}
            >
              What sets us apart is our commitment to evidence-based solutions that work in real-world contexts. We don't just deliver reports—we partner with organizations to implement strategies that create lasting change. From government ministries to development agencies, NGOs to private sector firms, we've built a reputation for excellence, integrity, and measurable impact.
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#4a4a4a',
                lineHeight: '1.9',
              }}
            >
              Today, Arvington Limited stands at the forefront of strategic advisory in Africa, leveraging data, insights, and innovation to tackle some of the continent's most pressing challenges in health, energy, climate, education, and economic development.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
            }}
          >
            <div
              style={{
                backgroundColor: '#1a1a1a',
                padding: '3rem',
                borderRadius: '12px',
                color: 'white',
              }}
            >
              <Eye size={48} style={{ marginBottom: '1.5rem', opacity: 0.9 }} />
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.5px',
                }}
              >
                Our Vision
              </h3>
              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#e5e5e5',
                }}
              >
                To be Africa's most trusted partner for strategic innovation and evidence-based policy solutions, driving sustainable development and transformative impact across sectors and borders.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#fafafa',
                padding: '3rem',
                borderRadius: '12px',
                border: '1px solid #e5e5e5',
              }}
            >
              <Target size={48} style={{ marginBottom: '1.5rem', color: '#1a1a1a' }} />
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.5px',
                  color: '#1a1a1a',
                }}
              >
                Our Mission
              </h3>
              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#4a4a4a',
                }}
              >
                To empower organizations with strategic insights, data-driven analysis, and practical solutions that translate vision into measurable outcomes, fostering prosperity and resilience across African communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection
        quote="Excellence is not an act, but a habit. Impact is not an accident, but a commitment to evidence-based action."
        author="Aristotle (adapted)"
        role=""
        background="#fafafa"
      />

      {/* Our Values */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              Our Core Values
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
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {values.map((value, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#fafafa',
                  padding: '2.5rem',
                  borderRadius: '12px',
                  border: '1px solid #e5e5e5',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e5e5e5';
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

      {/* Why Work With Us */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
            Why Organizations Choose Arvington
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            {[
              {
                title: 'Proven Track Record',
                description: 'Successful engagements across health, energy, climate, and economic development sectors with measurable results.',
              },
              {
                title: 'Deep Expertise',
                description: 'Combining technoeconomic analysis, policy advisory, and strategic planning with sector-specific knowledge.',
              },
              {
                title: 'Contextual Understanding',
                description: 'We understand African markets, institutions, and development challenges, ensuring solutions that work in practice.',
              },
              {
                title: 'Partnership Mindset',
                description: 'We work alongside you, not just for you—building capacity and ensuring sustainable implementation.',
              },
              {
                title: 'Innovation Focus',
                description: 'Leveraging the latest analytical tools, methodologies, and best practices to deliver cutting-edge solutions.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #e5e5e5',
                  borderLeft: '4px solid #1a1a1a',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '1.05rem',
                    color: '#6a6a6a',
                    lineHeight: '1.7',
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#1a1a1a' }}>
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
              color: 'white',
              marginBottom: '1.5rem',
              letterSpacing: '-1px',
            }}
          >
            Let's Build Something Meaningful Together
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#b3b3b3',
              lineHeight: '1.7',
              marginBottom: '2.5rem',
            }}
          >
            Discover how our expertise, values, and commitment to excellence can support your organization's mission.
          </p>
          <Link
            to="/contact"
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
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
