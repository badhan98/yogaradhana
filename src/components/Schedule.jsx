import React from 'react';
import { motion } from 'framer-motion';

const Schedule = () => {
  const scheduleDays = [
    { day: 'Monday', time: '05:30 PM' },
    { day: 'Tuesday', time: '05:30 PM' },
    { day: 'Thursday', time: '05:30 PM' },
    { day: 'Friday', time: '05:30 PM' },
  ];

  return (
    <section
      id="schedule"
      style={{
        background: '#FDFBF7',
        color: '#1B2D2A',
        padding: '120px 5%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blob */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px',
        background: 'rgba(168,184,160,0.12)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Schedule Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: '#1B2D2A',
              borderRadius: '48px',
              overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(27,45,42,0.18)',
              position: 'relative',
            }}
          >
            {/* Top gradient line */}
            <div style={{
              height: '4px',
              background: 'linear-gradient(to right, #D4AF37, #A8B8A0)',
            }} />

            {/* Background image faded */}
            <div style={{
              position: 'absolute', inset: 0, top: '4px',
              backgroundImage: 'url(/yoga-hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.06,
              zIndex: 0,
            }} />

            <div style={{ position: 'relative', zIndex: 1, padding: '3rem' }}>
              <p style={{ color: '#D4AF37', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Morning Sessions
              </p>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, marginBottom: '2.5rem', letterSpacing: '-0.03em' }}>
                CLASS SCHEDULE
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {scheduleDays.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.2rem 1.2rem',
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '16px',
                      transition: 'background 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', fontWeight: 700 }}>{item.day}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#D4AF37', fontSize: '1.1rem' }}>⏰</span>
                      <span style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 900 }}>{item.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Demo class callout */}
              <div style={{
                marginTop: '2.5rem',
                background: 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '24px',
                padding: '2rem',
              }}>
                <p style={{ color: '#D4AF37', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                  📅 Save the Date
                </p>
                <p style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 900, marginBottom: '0.3rem' }}>FREE ONLINE DEMO CLASS</p>
                <p style={{ color: '#A8B8A0', fontSize: '0.95rem', marginBottom: '1.5rem' }}>15th November · 5:00 PM IST</p>
                <a
                  href={`https://wa.me/918768624664?text=Hi, I want to reserve my spot for the free demo class!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#fff',
                    borderBottom: '2px solid #D4AF37',
                    paddingBottom: '2px',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                  }}
                >
                  RESERVE YOUR SPOT ↗
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '1rem' }}
          >
            <div>
              <p style={{ color: '#D4AF37', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Get In Touch
              </p>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, color: '#1B2D2A' }}>
                YOUR WELLNESS<br />
                IS A MESSAGE AWAY.
              </h2>
            </div>

            {/* Contact items */}
            {[
              {
                icon: '📍',
                label: 'Location',
                value: 'Raja Ram Mohan Roy Road Kidzee School Siliguri Westbengal 734001',
              },
              {
                icon: '📞',
                label: 'Phone',
                value: '+91 8768624664',
                href: 'tel:+918768624664',
              },
              {
                icon: '✉️',
                label: 'Email',
                value: 'iampaulamichowdhury@gmail.com',
                href: 'mailto:iampaulamichowdhury@gmail.com',
              },
            ].map(({ icon, label, value, href }) => (
              <motion.div
                key={label}
                whileHover={{ x: 6 }}
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
              >
                <div style={{
                  width: '56px', height: '56px', flexShrink: 0,
                  background: 'rgba(212,175,55,0.1)',
                  borderRadius: '18px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem',
                  transition: 'background 0.3s',
                }}>
                  {icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.4, marginBottom: '4px' }}>
                    {label}
                  </p>
                  {href ? (
                    <a href={href} style={{ color: '#1B2D2A', fontSize: '1rem', fontWeight: 700, textDecoration: 'none', lineHeight: 1.5 }}>
                      {value}
                    </a>
                  ) : (
                    <p style={{ color: '#1B2D2A', fontSize: '1rem', fontWeight: 600, lineHeight: 1.6, opacity: 0.8 }}>{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px', paddingTop: '1rem' }}>
              {['IG', 'FB', 'YT'].map(s => (
                <div
                  key={s}
                  style={{
                    width: '48px', height: '48px',
                    borderRadius: '50%',
                    border: '2px solid rgba(27,45,42,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontWeight: 900,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(27,45,42,0.12)'; e.currentTarget.style.color = '#1B2D2A'; }}
                >
                  {s}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
