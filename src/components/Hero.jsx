import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'Strategic Planning',
    'Data-Driven Policy',
    'Technoeconomic Analysis',
    'Impact Evaluation',
    'Evidence-Based Solutions',
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const handleTyping = () => {
      if (!isDeleting) {
        if (typewriterText.length < currentPhrase.length) {
          setTypewriterText(currentPhrase.substring(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(currentPhrase.substring(0, typewriterText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, currentPhraseIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: '2rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.25rem',
            backgroundColor: '#f8f8f8',
            borderRadius: '50px',
            marginBottom: '2rem',
            border: '1px solid #e5e5e5',
          }}
        >
          <TrendingUp size={18} style={{ color: '#1a1a1a' }} />
          <span style={{ fontSize: '0.9rem', color: '#4a4a4a', fontWeight: '500' }}>
            Strategic Advisory & Data-Driven Policy
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '1.5rem',
            letterSpacing: '-2px',
            lineHeight: '1.1',
          }}
        >
          Expert in
          <br />
          <span style={{ color: '#1F4279', minHeight: '1.2em', display: 'inline-block' }}>
            {typewriterText}
            <span style={{ 
              borderRight: '3px solid #1F4279', 
              animation: 'blink 1s step-end infinite',
              marginLeft: '2px'
            }}>|</span>
          </span>
        </h1>
        <style>
          {`
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
          `}
        </style>
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: '#6a6a6a',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: '1.7',
          }}
        >
          Arvington Limited delivers expert advisory services in strategic planning, technoeconomic analysis, 
          and evidence-based policy formulation for governments, NGOs, and development partners across Africa.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/contact"
            style={{
              backgroundColor: '#1a1a1a',
              color: 'white',
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
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
            Partner With Us
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/services"
            style={{
              backgroundColor: 'transparent',
              color: '#1a1a1a',
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '8px',
              border: '2px solid #1a1a1a',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;