import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '3rem 2rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                letterSpacing: '-0.5px',
              }}
            >
              Arvington Limited
            </h3>
            <p
              style={{
                color: '#b3b3b3',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
              }}
            >
              Strategic advisory and data-driven policy services delivering measurable impact across Africa.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="https://www.linkedin.com/company/arvington-limited"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#333',
                  borderRadius: '8px',
                  color: 'white',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#444')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#333')}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:info@arvingtonlimited.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#333',
                  borderRadius: '8px',
                  color: 'white',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#444')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#333')}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '1rem',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Expertise', path: '/expertise' },
                { name: 'Insights', path: '/insights' },
                { name: 'Resources', path: '/resources' },
                { name: 'Leadership', path: '/leadership' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{
                      color: '#b3b3b3',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'white')}
                    onMouseLeave={(e) => (e.target.style.color = '#b3b3b3')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '1rem',
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#b3b3b3' }}>
                <Mail size={18} style={{ marginTop: '2px', flexShrink: 0 }} />
                <a
                  href="mailto:info@arvingtonlimited.com"
                  style={{ color: '#b3b3b3', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = 'white')}
                  onMouseLeave={(e) => (e.target.style.color = '#b3b3b3')}
                >
                  info@arvingtonlimited.com
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#b3b3b3' }}>
                <MapPin size={18} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid #333',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p style={{ color: '#888', fontSize: '0.9rem' }}>
            © {currentYear} Arvington Limited. All rights reserved.
          </p>
          <p style={{ color: '#888', fontSize: '0.85rem' }}>
            Designed & Powered by{' '}
            <a
              href="https://www.bgsolutions.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#b3b3b3',
                fontWeight: '600',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'white')}
              onMouseLeave={(e) => (e.target.style.color = '#b3b3b3')}
            >
              Beyond Gravity Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
