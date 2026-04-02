import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Hatha Yoga',
      desc: 'Connect your body and mind through traditional poses and mindful breathing techniques.',
      tag: 'For Everyone',
      icon: '🧘',
    },
    {
      title: "Women's Menstrual Solutions",
      desc: 'Therapeutic yoga practices designed to ease hormonal imbalances, pain, and discomfort.',
      tag: 'Women Specific',
      icon: '🌸',
    },
    {
      title: 'Weightloss Program',
      desc: 'Dynamic sequences and expert guidance focused on healthy, sustainable body transformation.',
      tag: 'Morning 7:30 AM',
      icon: '🔥',
    },
    {
      title: 'Body Toning',
      desc: 'Build strength, flexibility, and definition with precise, controlled movement sequences.',
      tag: 'Men & Women',
      icon: '💪',
    },
  ];

  return (
    <section
      id="services"
      style={{
        background: '#1B2D2A',
        color: '#fff',
        padding: '120px 5%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background image accent - use yoga-demo image as faded bg */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/yoga-demo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.06,
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <p style={{ color: '#D4AF37', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            What We Offer
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>
            CRAFTED FOR YOUR<br />
            <span style={{ color: '#A8B8A0' }}>HOLISTIC WELLNESS.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto', opacity: 0.55, fontWeight: 300, lineHeight: 1.7 }}>
            A sanctuary where each practice is tailored to your unique journey.
          </p>
        </div>

        {/* Service Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '32px',
                padding: '3rem 2.5rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border-color 0.4s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              {/* Glow */}
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '100px', height: '100px',
                background: 'rgba(212,175,55,0.08)',
                borderRadius: '50%',
                filter: 'blur(30px)',
              }} />

              {/* Tag */}
              <span style={{
                display: 'inline-block',
                background: 'rgba(212,175,55,0.12)',
                color: '#D4AF37',
                padding: '4px 14px',
                borderRadius: '50px',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}>
                {service.tag}
              </span>

              {/* Icon */}
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{service.icon}</div>

              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 900,
                marginBottom: '1rem',
                lineHeight: 1.3,
                color: '#fff',
                letterSpacing: '-0.02em',
              }}>
                {service.title}
              </h3>

              <p style={{ lineHeight: 1.7, opacity: 0.5, fontSize: '0.9rem', marginBottom: '2rem' }}>
                {service.desc}
              </p>

              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'rgba(168,184,160,0.5)',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                EXPLORE MORE <span>→</span>
              </span>
            </motion.div>
          ))}
        </div>

        {/* Demo class banner using yoga-demo image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '5rem',
            borderRadius: '40px',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '280px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="/yoga-demo.jpg"
            alt="Online Free Demo Class"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(27,45,42,0.95) 0%, rgba(27,45,42,0.7) 60%, rgba(27,45,42,0.3) 100%)',
          }} />
          <div style={{ position: 'relative', zIndex: 1, padding: '3rem 4rem' }}>
            <p style={{ color: '#D4AF37', fontSize: '0.7rem', letterSpacing: '0.4em', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>
              Limited Spots
            </p>
            <h3 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', fontWeight: 900, color: '#fff', marginBottom: '0.5rem' }}>
              ONLINE FREE DEMO CLASS
            </h3>
            <p style={{ color: '#A8B8A0', fontSize: '1.1rem', marginBottom: '2rem' }}>
              15th November · 5:00 PM IST · For Men &amp; Women
            </p>
            <a
              href={`https://wa.me/918768624664?text=Hi, I'd like to book the free demo class!`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#D4AF37',
                color: '#1B2D2A',
                padding: '14px 36px',
                borderRadius: '50px',
                fontWeight: 800,
                fontSize: '0.78rem',
                letterSpacing: '0.2em',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(212,175,55,0.35)',
              }}
            >
              BOOK NOW — FREE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
