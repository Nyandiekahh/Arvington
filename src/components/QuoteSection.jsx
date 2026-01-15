import React from 'react';
import { Quote } from 'lucide-react';

const QuoteSection = ({ quote, author, role, background = '#fafafa' }) => {
  return (
    <div
      style={{
        backgroundColor: background,
        padding: '4rem 2rem',
        margin: '4rem 0',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Quote
          size={48}
          style={{
            color: '#1a1a1a',
            opacity: 0.2,
            marginBottom: '1.5rem',
          }}
        />
        <blockquote
          style={{
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            fontWeight: '500',
            color: '#1a1a1a',
            lineHeight: '1.6',
            marginBottom: '2rem',
            fontStyle: 'italic',
          }}
        >
          "{quote}"
        </blockquote>
        <div>
          <p
            style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '0.25rem',
            }}
          >
            {author}
          </p>
          {role && (
            <p
              style={{
                fontSize: '0.95rem',
                color: '#6a6a6a',
              }}
            >
              {role}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
