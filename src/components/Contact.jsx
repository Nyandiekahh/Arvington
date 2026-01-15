import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'info@arvingtonlimited.com',
      link: 'mailto:info@arvingtonlimited.com',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Nairobi, Kenya',
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 2rem',
        backgroundColor: 
        '#fafafa',
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
Let's Work Together
</h2>
<p
style={{
fontSize: '1.1rem',
color: '#6a6a6a',
maxWidth: '700px',
margin: '0 auto',
lineHeight: '1.7',
}}
>
Ready to transform your strategic challenges into opportunities?
Get in touch to discuss how we can support your organization.
</p>
</div>
<div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'start',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {contactInfo.map((info, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'start',
            }}
          >
            <div
              style={{
                padding: '1rem',
                backgroundColor: 'white',
                borderRadius: '10px',
                color: '#1a1a1a',
                border: '1px solid #e5e5e5',
              }}
            >
              {info.icon}
            </div>
            <div>
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '0.5rem',
                }}
              >
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  style={{
                    fontSize: '1rem',
                    color: '#6a6a6a',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#1a1a1a')}
                  onMouseLeave={(e) => (e.target.style.color = '#6a6a6a')}
                >
                  {info.content}
                </a>
              ) : (
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#6a6a6a',
                  }}
                >
                  {info.content}
                </p>
              )}
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: '2rem',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1px solid #e5e5e5',
          }}
        >
          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '1rem',
            }}
          >
            Who We Serve
          </h3>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {[
              'Government Agencies',
              'Development Organizations',
              'NGOs & Non-Profits',
              'Private Sector Clients',
              'Research Institutions',
            ].map((client, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: '0.95rem',
                  color: '#6a6a6a',
                  paddingLeft: '1.5rem',
                  position: 'relative',
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
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: 'white',
          padding: '2.5rem',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}
      >
        <div style={{ marginBottom: '1.5rem' }}>
          <label
            htmlFor="name"
            style={{
              display: 'block',
              fontSize: '0.95rem',
              fontWeight: '500',
              color: '#1a1a1a',
              marginBottom: '0.5rem',
            }}
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.875rem',
              fontSize: '1rem',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#1a1a1a')}
            onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              fontSize: '0.95rem',
              fontWeight: '500',
              color: '#1a1a1a',
              marginBottom: '0.5rem',
            }}
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.875rem',
              fontSize: '1rem',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#1a1a1a')}
            onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label
            htmlFor="organization"
            style={{
              display: 'block',
              fontSize: '0.95rem',
              fontWeight: '500',
              color: '#1a1a1a',
              marginBottom: '0.5rem',
            }}
          >
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.875rem',
              fontSize: '1rem',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#1a1a1a')}
            onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label
            htmlFor="message"
            style={{
              display: 'block',
              fontSize: '0.95rem',
              fontWeight: '500',
              color: '#1a1a1a',
              marginBottom: '0.5rem',
            }}
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              width: '100%',
              padding: '0.875rem',
              fontSize: '1rem',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              outline: 'none',
              resize: 'vertical',
              transition: 'border-color 0.2s',
              fontFamily: 'inherit',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#1a1a1a')}
            onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#1a1a1a',
            color: 'white',
            padding: '1rem',
            fontSize: '1rem',
            fontWeight: '600',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
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
          Send Inquiry
          <Send size={18} />
        </button>
      </form>
    </div>
  </div>
</section>
);
};
export default Contact;

