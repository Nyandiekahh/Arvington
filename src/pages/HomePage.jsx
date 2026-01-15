import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import QuoteSection from '../components/QuoteSection';
import TestimonialCard from '../components/TestimonialCard';
import { Target, TrendingUp, Users, Globe, ArrowRight, BookOpen, Award } from 'lucide-react';

const HomePage = () => {
  const highlights = [
    {
      icon: <Target size={32} />,
      title: 'Strategic Excellence',
      description: 'Transforming complex challenges into actionable strategies that drive measurable impact across sectors.',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Data-Driven Insights',
      description: 'Evidence-based policy recommendations powered by rigorous analysis and cutting-edge methodologies.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Pan-African Focus',
      description: 'Deep understanding of African markets, policies, and development challenges to deliver contextual solutions.',
    },
    {
      icon: <Users size={32} />,
      title: 'Collaborative Approach',
      description: 'Working alongside stakeholders to co-create sustainable solutions and build local capacity.',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Amina Odhiambo',
      organization: 'Kenya Ministry of Health',
      role: 'Director of Policy',
      testimonial: 'Arvington Limited provided invaluable strategic guidance that helped us design a comprehensive health financing framework. Their data-driven approach and deep sector knowledge made all the difference.',
      rating: 5,
    },
    {
      name: 'James Mwangi',
      organization: 'East Africa Development Bank',
      role: 'Chief Economist',
      testimonial: 'Their technoeconomic analysis on renewable energy investments was thorough, insightful, and actionable. We now have a clear roadmap for sustainable infrastructure development.',
      rating: 5,
    },
    {
      name: 'Sarah Kimani',
      organization: 'African Climate Foundation',
      role: 'Program Director',
      testimonial: 'Working with Arvington was transformative. They helped us develop evidence-based climate policies that are both ambitious and achievable. True partners in impact.',
      rating: 5,
    },
  ];

  return (
    <div>
      <Hero />

      {/* Why Choose Arvington */}
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
              Why Partner with Us
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
              We combine strategic thinking, rigorous analysis, and local expertise to deliver solutions that create lasting value.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {highlights.map((item, index) => (
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
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '1rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
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

      <QuoteSection
        quote="Strategy without data is guesswork. Data without strategy is noise. Together, they create impact."
        author="Seth Kipsang Mutuba"
        role="Founder & CEO, Arvington Limited"
      />

      {/* Featured Insights */}
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
              Latest Insights
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
              Thought leadership and practical knowledge to help you navigate complex policy and strategy challenges.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              marginBottom: '3rem',
            }}
          >
            {[
              {
                title: 'The Future of Energy Policy in East Africa',
                excerpt: 'Exploring sustainable pathways for energy transition and the role of technoeconomic analysis in shaping policy decisions.',
                category: 'Energy & Climate',
                icon: <Award size={24} />,
              },
              {
                title: 'Data-Driven Healthcare Reform',
                excerpt: 'How evidence-based approaches are transforming healthcare delivery and financing across the continent.',
                category: 'Health Policy',
                icon: <TrendingUp size={24} />,
              },
              {
                title: 'Strategic Planning for Development Organizations',
                excerpt: 'A comprehensive guide to building robust strategies that deliver measurable social impact.',
                category: 'Strategy',
                icon: <BookOpen size={24} />,
              },
            ].map((insight, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
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
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#fafafa',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    color: '#4a4a4a',
                    marginBottom: '1.5rem',
                    border: '1px solid #e5e5e5',
                  }}
                >
                  {insight.category}
                </div>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '1rem',
                    lineHeight: '1.4',
                  }}
                >
                  {insight.title}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#6a6a6a',
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
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
                  }}
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
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
                transition: 'all 0.3s ease',
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
              Explore All Insights <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#fafafa' }}>
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
              What Our Clients Say
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
              Trusted by leading organizations across Africa to deliver strategic value and measurable impact.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
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
            Ready to Transform Strategy into Impact?
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#b3b3b3',
              lineHeight: '1.7',
              marginBottom: '2.5rem',
            }}
          >
            Let's discuss how we can support your organization's strategic objectives and create meaningful, sustainable change.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
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
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
