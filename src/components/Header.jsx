import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Insights', path: '/insights' },
    { name: 'Resources', path: '/resources' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid #e5e5e5' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '1.4rem',
            fontWeight: '700',
            color: '#1a1a1a',
            letterSpacing: '-0.5px',
          }}
        >
          Arvington Limited
        </Link>

        <ul
          style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                style={{
                  color: location.pathname === item.path ? '#1a1a1a' : '#4a4a4a',
                  fontSize: '0.95rem',
                  fontWeight: location.pathname === item.path ? '600' : '500',
                  transition: 'color 0.2s ease',
                  borderBottom: location.pathname === item.path ? '2px solid #1a1a1a' : 'none',
                  paddingBottom: '0.25rem',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#1a1a1a')}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.color = '#4a4a4a';
                  }
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            color: '#1a1a1a',
          }}
          className="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'white',
            borderTop: '1px solid #e5e5e5',
            padding: '1rem 2rem',
          }}
          className="mobile-nav"
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: '#4a4a4a',
                    fontSize: '1rem',
                    fontWeight: '500',
                    display: 'block',
                    padding: '0.5rem 0',
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;