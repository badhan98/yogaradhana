import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact', href: '#contact' },
  ];

  const programs = [
    'Hatha Yoga',
    "Women's Menstrual Solutions",
    'Weightloss Program',
    'Body Toning',
  ];

  return (
    <footer style={{
      background: '#0f1e1c',
      color: '#FDFBF7',
      fontFamily: "'Outfit', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top gold line */}
      <div style={{ height: '3px', background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }} />

      {/* Decorative background glow */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '300px',
        background: 'rgba(212,175,55,0.04)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      {/* Main footer grid */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '5rem 2rem 3rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '3rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Brand column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <img
            src="/logo-dark.png"
            alt="Yog Aradhana"
            style={{
              height: '72px',
              width: '220px',
              objectFit: 'cover',
              objectPosition: '20% center',
              alignSelf: 'flex-start',
            }}
          />
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.5, maxWidth: '260px' }}>
            Discover the harmony between body and mind. Open for beginners — Men &amp; Women welcome.
          </p>
          <a
            href="https://wa.me/918768624664?text=Hi, I want to join Yog Aradhana!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#25D366',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              alignSelf: 'flex-start',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="white">
              <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.73 1.78 6.72L2 30l7.47-1.75A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.21 19.29c-.3.84-1.76 1.61-2.43 1.71-.62.09-1.4.13-2.26-.14a20.5 20.5 0 01-2.05-.76c-3.6-1.56-5.95-5.2-6.13-5.44-.18-.23-1.47-1.96-1.47-3.74s.93-2.65 1.26-3.02c.33-.36.72-.45.96-.45.24 0 .48.01.69.01.22.01.52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.4.03.63-.12.24-.18.38-.36.58-.18.2-.38.45-.54.6-.18.18-.37.37-.16.72.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.71z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 800, color: '#D4AF37', marginBottom: '1.5rem' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {quickLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = '#D4AF37'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 800, color: '#D4AF37', marginBottom: '1.5rem' }}>
            Our Programs
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {programs.map(prog => (
              <li key={prog} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', fontWeight: 500 }}>
                {prog}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 800, color: '#D4AF37', marginBottom: '1.5rem' }}>
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: '📞', text: '+91 8768624664', href: 'tel:+918768624664' },
              { icon: '✉️', text: 'iampaulamichowdhury@gmail.com', href: 'mailto:iampaulamichowdhury@gmail.com' },
              { icon: '📍', text: 'Raja Ram Mohan Roy Road Kidzee School Siliguri Westbengal 734001' },
            ].map(({ icon, text, href }) => (
              <div key={text} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>{icon}</span>
                {href ? (
                  <a href={href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', textDecoration: 'none', lineHeight: 1.5 }}
                    onMouseEnter={e => e.target.style.color = '#D4AF37'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    {text}
                  </a>
                ) : (
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.5 }}>{text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '1.5rem 2rem',
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <p style={{ fontSize: '0.78rem', opacity: 0.35, letterSpacing: '0.05em' }}>
          © {year} Yog Aradhana. All rights reserved.
        </p>
        <p style={{ fontSize: '0.78rem', opacity: 0.35, letterSpacing: '0.05em' }}>
          Designed &amp; Developed by <a href="https://portfolio-chi-rosy-63.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', opacity: 1, fontWeight: 700, textDecoration: 'none' }}>Badhan Chowdhury</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
