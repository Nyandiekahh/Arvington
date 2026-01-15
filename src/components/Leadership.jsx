import React from 'react';
import { User, Linkedin } from 'lucide-react';

const Leadership = () => {
  return (
    <section
      id="leadership"
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
            Leadership
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
            Led by experienced professionals committed to delivering excellence and driving meaningful impact.
          </p>
        </div>

        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            backgroundColor: '#fafafa',
            padding: '3rem',
            borderRadius: '12px',
            border: '1px solid #e5e5e5',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '2px solid #e5e5e5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
            }}
          >
            <User size={60} style={{ color: '#6a6a6a' }} />
          </div>

          <h3
            style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '0.5rem',
            }}
          >
            Seth Kipsang Mutuba
          </h3>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#6a6a6a',
              marginBottom: '2rem',
              fontWeight: '500',
            }}
          >
            Founder & CEO
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}
          >
            <span
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'white',
                borderRadius: '20px',
                fontSize: '0.9rem',
                color: '#4a4a4a',
                border: '1px solid #e5e5e5',
              }}
            >
              Global Strategy & Advisory
            </span>
            <span
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'white',
                borderRadius: '20px',
                fontSize: '0.9rem',
                color: '#4a4a4a',
                border: '1px solid #e5e5e5',
              }}
            >
              Data-Driven Policy
            </span>
            <span
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'white',
                borderRadius: '20px',
                fontSize: '0.9rem',
                color: '#4a4a4a',
                border: '1px solid #e5e5e5',
              }}
            >
              Technoeconomic Strategy
            </span>
          </div>

          <p
            style={{
              fontSize: '1rem',
              color: '#6a6a6a',
              lineHeight: '1.8',
              marginBottom: '2rem',
            }}
          >
            Leading Arvington Limited with a focus on strategic innovation and evidence-based solutions, 
            Seth brings extensive expertise in technoeconomic analysis, policy advisory, and sustainable 
            development across multiple sectors.
          </p>

          <a
            href="https://www.linkedin.com/in/seth-kipsang-mutuba"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 1.75rem',
              backgroundColor: '#1a1a1a',
              color: 'white',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#333';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#1a1a1a';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Leadership;