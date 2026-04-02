import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Contact', href: '#contact' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: 'all 0.4s ease',
        padding: scrolled ? '10px 0' : '16px 0',
        background: scrolled ? 'rgba(27,45,42,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.25)' : 'none',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo — using mix-blend-mode to remove light background */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <motion.img
              src="/logo-dark.png"
              alt="Yog Aradhana"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25 }}
              style={{
                height: scrolled ? '52px' : '68px',
                width: scrolled ? '160px' : '210px',
                objectFit: 'cover',
                objectPosition: '20% center',
                transition: 'all 0.4s ease',
              }}
            />
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  position: 'relative',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                  paddingBottom: '4px',
                }}
                onMouseEnter={e => e.target.style.color = '#D4AF37'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
              >
                {link.name}
              </a>
            ))}
            <motion.a
              href="https://wa.me/918768624664?text=Hi, I want to join Yog Aradhana!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              style={{
                background: '#D4AF37',
                color: '#1B2D2A',
                textDecoration: 'none',
                fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '12px 28px',
                borderRadius: '50px',
                boxShadow: '0 8px 24px rgba(212,175,55,0.3)',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              JOIN NOW
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '12px',
              padding: '10px',
              color: '#fff',
              cursor: 'pointer',
              display: 'none',
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'rgba(27,45,42,0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            <img src="/logo-dark.png" alt="Yog Aradhana" style={{ height: '64px', objectFit: 'contain', marginBottom: '1rem' }} />
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '2.2rem',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                }}
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="https://wa.me/918768624664?text=Hi, I want to join Yog Aradhana!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '1rem',
                background: '#D4AF37',
                color: '#1B2D2A',
                padding: '16px 48px',
                borderRadius: '50px',
                fontWeight: 900,
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              JOIN NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile { display: none !important; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default NavBar;
