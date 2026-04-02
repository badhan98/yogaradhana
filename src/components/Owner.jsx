import React from 'react';
import { motion } from 'framer-motion';

const Owner = () => {
  return (
    <section
      id="about"
      style={{
        background: '#FDFBF7',
        color: '#1B2D2A',
        padding: '120px 5%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '5rem',
          alignItems: 'center',
        }}
      >
        {/* Image Column — uses the actual flyer image 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ position: 'relative' }}
        >
          {/* Decorative bg shape */}
          <div style={{
            position: 'absolute',
            top: '24px', left: '24px',
            width: '100%', height: '100%',
            background: 'rgba(168,184,160,0.25)',
            borderRadius: '40px',
            zIndex: 0,
          }} />

          <div style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: '40px',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(27,45,42,0.18)',
          }}>
            <img
              src="/instructor.jpg"
              alt="Paulami Chowdhury - Yoga Instructor"
              style={{
                width: '100%',
                height: '620px',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                display: 'block',
              }}
            />
            {/* Name tag overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '48px 32px 32px',
              background: 'linear-gradient(to top, rgba(27,45,42,0.9) 0%, transparent 100%)',
            }}>
              <h3 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '4px' }}>
                PAULAMI CHOWDHURY
              </h3>
              <p style={{ color: '#D4AF37', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                Certified Yoga Instructor
              </p>
            </div>
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div style={{ width: '64px', height: '4px', background: '#D4AF37', borderRadius: '2px' }} />

          <p style={{ color: '#D4AF37', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Meet Your Instructor
          </p>

          <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, color: '#1B2D2A' }}>
            MEET THE<br />
            <span style={{ color: '#A8B8A0' }}>HEALING HEART.</span>
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.75, fontWeight: 300 }}>
            With a passion for mindful movement and holistic wellness, Paulami Chowdhury brings
            traditional Hatha Yoga teachings into a modern, accessible format. Her classes
            welcome absolute beginners while also catering to those seeking therapeutic practice.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.75, fontWeight: 300 }}>
            Paulami specializes in <strong style={{ color: '#1B2D2A', fontWeight: 700 }}>Women's Menstrual Solutions</strong>,
            helping women find relief and balance through targeted yoga sequences.
            Her Weightloss and Body Toning programs are scientifically informed and deeply human.
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            padding: '2rem 0',
            borderTop: '1px solid rgba(27,45,42,0.1)',
            borderBottom: '1px solid rgba(27,45,42,0.1)',
          }}>
            {[['5+', 'Years Experience'], ['200+', 'Happy Students'], ['4', 'Programs'], ['Men & Women', 'Welcome']].map(([num, label]) => (
              <div key={label}>
                <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: 900, color: '#D4AF37' }}>{num}</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5 }}>{label}</span>
              </div>
            ))}
          </div>

          <motion.a
            href={`https://wa.me/918768624664?text=Hi, I'd like to join Yog Aradhana!`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            style={{
              display: 'inline-block',
              background: '#1B2D2A',
              color: '#fff',
              padding: '18px 44px',
              borderRadius: '50px',
              fontWeight: 800,
              fontSize: '0.78rem',
              letterSpacing: '0.2em',
              textDecoration: 'none',
              textTransform: 'uppercase',
              alignSelf: 'flex-start',
              boxShadow: '0 10px 30px rgba(27,45,42,0.15)',
              transition: 'all 0.3s ease',
            }}
          >
            CONTACT INSTRUCTOR
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Owner;
