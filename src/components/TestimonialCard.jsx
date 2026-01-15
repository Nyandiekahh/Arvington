import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, organization, role, testimonial, rating = 5 }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '2.5rem',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
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
      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={18} fill="#FFD700" stroke="#FFD700" />
        ))}
      </div>
      <p
        style={{
          fontSize: '1.05rem',
          color: '#4a4a4a',
          lineHeight: '1.7',
          marginBottom: '2rem',
          fontStyle: 'italic',
          flex: 1,
        }}
      >
        "{testimonial}"
      </p>
      <div>
        <p
          style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '0.25rem',
          }}
        >
          {name}
        </p>
        <p style={{ fontSize: '0.9rem', color: '#6a6a6a' }}>
          {role}
        </p>
        <p style={{ fontSize: '0.9rem', color: '#6a6a6a', fontWeight: '500' }}>
          {organization}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
