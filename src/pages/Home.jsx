import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Target, BookOpen, Award } from 'lucide-react';

const Home = () => {
  const featuredInsights = [
    {
      title: "The Future of Data-Driven Policy in Africa",
      excerpt: "Exploring how evidence-based decision making is transforming governance across the continent...",
      category: "Policy Innovation",
      readTime: "5 min read"
    },
    {
      title: "Technoeconomic Analysis: A Strategic Imperative",
      excerpt: "Understanding the intersection of technology and economics in strategic planning...",
      category: "Strategic Insights",
      readTime: "7 min read"
    },
    {
      title: "Sustainable Development Goals: Progress & Challenges",
      excerpt: "Examining Africa's journey toward achieving the SDGs and the role of strategic advisory...",
      category: "Sustainability",
      readTime: "6 min read"
    }
  ];

  const coreValues = [
    {
      icon: <Target size={32} />,
      title: "Strategic Excellence",
      description: "We deliver precision-focused strategies that transform challenges into measurable opportunities."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Data-Driven Impact",
      description: "Every recommendation is backed by rigorous analysis and evidence-based research."
    },
    {
      icon: <Users size={32} />,
      title: "Collaborative Partnership",
      description: "We work alongside our clients as trusted partners in their journey to success."
    },
    {
      icon: <Award size={32} />,
      title: "Unwavering Integrity",
      description: "Transparency, ethics, and accountability guide every decision we make."
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          color: 'white',
          padding: '8rem 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
          }}
        />
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div style={{ maxWidth: '800px' }}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: '800',
                marginBottom: '1.5rem',
                lineHeight: '1.1',
                letterSpacing: '-2px'
              }}
            >
              Transforming Strategic Challenges into <span style={{ color: '#FFD700' }}>Measurable Impact</span>
            </h1>
            <p
              style={{
                fontSize: '1.3rem',
                lineHeight: '1.8',
                marginBottom: '3rem',
                color: '#e0e0e0'
              }}
            >
              Arvington Limited delivers world-class strategic advisory and data-driven policy services 
              that empower organizations across Africa to achieve sustainable growth and meaningful change.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link
                to="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1.1rem 2.5rem',
                  backgroundColor: '#FFD700',
                  color: '#1a1a1a',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFC700';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFD700';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore Our Services
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1.1rem 2.5rem',
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section
        style={{
          padding: '5rem 2rem',
          backgroundColor: '#f8f9fa',
          borderLeft: '5px solid #FFD700'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <blockquote
            style={{
              fontSize: '1.8rem',
              fontStyle: 'italic',
              color: '#1a1a1a',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontWeight: '500'
            }}
          >
            "Strategy without data is just opinion. Data without strategy is just noise. 
            Together, they create transformative impact."
          </blockquote>
          <p style={{ fontSize: '1.1rem', color: '#6a6a6a', fontWeight: '600' }}>
            — Arvington Limited Philosophy
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: '1rem',
                letterSpacing: '-1px'
              }}
            >
              Why Choose Arvington Limited
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#6a6a6a',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}
            >
              Our values drive everything we do, ensuring exceptional results for every client
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {coreValues.map((value, index) => (
              <div
                key={index}
                style={{
                  padding: '2.5rem',
                  backgroundColor: '#fafafa',
                  borderRadius: '12px',
                  border: '1px solid #e5e5e5',
                  transition: 'all 0.3s ease'
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
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#1a1a1a',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFD700',
                    marginBottom: '1.5rem'
                  }}
                >
                  {value.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: '#1a1a1a',
                    marginBottom: '1rem'
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#6a6a6a',
                    lineHeight: '1.7'
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching/Insights Preview Section */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.5rem',
                backgroundColor: '#FFD700',
                borderRadius: '20px',
                marginBottom: '1rem'
              }}
            >
              <BookOpen size={20} />
              <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Latest Insights</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: '1rem',
                letterSpacing: '-1px'
              }}
            >
              Thought Leadership & Learning
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#6a6a6a',
                maxWidth: '700px',
                margin: '0 auto 2rem',
                lineHeight: '1.7'
              }}
            >
              Explore our latest thinking on strategic advisory, policy innovation, and sustainable development
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}
          >
            {featuredInsights.map((insight, index) => (
              <article
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e5e5e5',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
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
                    padding: '2rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.85rem',
                        color: '#FFD700',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {insight.category}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#999' }}>
                      {insight.readTime}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#1a1a1a',
                      marginBottom: '1rem',
                      lineHeight: '1.4'
                    }}
                  >
                    {insight.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#6a6a6a',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {insight.excerpt}
                  </p>
                  <Link
                    to="/insights"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#1a1a1a',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      transition: 'gap 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.gap = '1rem';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.gap = '0.5rem';
                    }}
                  >
                    Read More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/insights"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                backgroundColor: '#1a1a1a',
                color: 'white',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#333';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View All Insights
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        style={{
          padding: '6rem 2rem',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              marginBottom: '1.5rem',
              letterSpacing: '-1px'
            }}
          >
            Ready to Transform Your Organization?
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              marginBottom: '2.5rem',
              color: '#e0e0e0'
            }}
          >
            Partner with Arvington Limited to unlock strategic opportunities and achieve measurable impact. 
            Let's work together to turn your challenges into success stories.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1.2rem 2.5rem',
              backgroundColor: '#FFD700',
              color: '#1a1a1a',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFC700';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD700';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Start Your Journey Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
