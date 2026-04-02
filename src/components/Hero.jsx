import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

// Simple floating 3D rings - no heavy assets needed
const FloatingRings = () => {
  return (
    <group>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[3.2, 0.025, 16, 120]} />
          <meshStandardMaterial color="#D4AF37" transparent opacity={0.6} />
        </mesh>
      </Float>
      <Float speed={1} rotationIntensity={2} floatIntensity={1.5}>
        <mesh rotation={[0.3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.5, 0.015, 16, 100]} />
          <meshStandardMaterial color="#A8B8A0" transparent opacity={0.4} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[4, 0.01, 16, 150]} />
          <meshStandardMaterial color="#FDFBF7" transparent opacity={0.15} />
        </mesh>
      </Float>
      {[...Array(18)].map((_, i) => (
        <Float key={i} speed={Math.random() * 2 + 1} floatIntensity={3}>
          <mesh position={[
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 6
          ]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={3} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 0,
        minHeight: '100vh',
      }}
    >
      {/* Real background image - hero yoga silhouette, zoomed to left half only */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/yoga-hero.jpg)',
        backgroundSize: '220% auto',
        backgroundPosition: '12% center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
      }} />

      {/* Overlay to ensure text readability over the background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(27,45,42,0.75) 0%, rgba(27,45,42,0.5) 40%, rgba(27,45,42,0.8) 100%)',
        zIndex: 1,
      }} />

      {/* 3D Rings Canvas overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={50} />
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} color="#D4AF37" intensity={1} />
          <Suspense fallback={null}>
            <FloatingRings />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
            enablePan={false}
          />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '900px', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{ color: '#D4AF37', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.4em', marginBottom: '1.5rem', textTransform: 'uppercase' }}
          >
            Certified Yoga Instructor
          </motion.p>

          <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: '1rem' }}>
            YOG<br />
            <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>ARADHANA</span>
          </h1>

          <p style={{ color: '#A8B8A0', fontSize: '1.15rem', fontWeight: 300, maxWidth: '560px', margin: '1.5rem auto 2.5rem', lineHeight: 1.7 }}>
            Discover the harmony between <strong style={{ color: '#fff' }}>body and mind</strong>.<br />
            Open for <strong style={{ color: '#fff' }}>Men &amp; Women</strong> · For Beginners
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="#schedule"
              whileHover={{ scale: 1.05, y: -3 }}
              style={{
                background: '#D4AF37', color: '#1B2D2A', borderRadius: '50px',
                padding: '16px 40px', fontWeight: 800, fontSize: '0.8rem',
                letterSpacing: '0.2em', textDecoration: 'none', display: 'inline-block',
                boxShadow: '0 10px 30px rgba(212,175,55,0.3)',
              }}
            >
              BOOK FREE DEMO
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -3 }}
              style={{
                background: 'transparent', color: '#A8B8A0', borderRadius: '50px',
                padding: '14px 40px', fontWeight: 700, fontSize: '0.8rem',
                letterSpacing: '0.2em', textDecoration: 'none', display: 'inline-block',
                border: '2px solid rgba(168,184,160,0.5)',
              }}
            >
              OUR PROGRAMS
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
      >
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)' }} />
      </motion.div>
    </section>
  );
};

export default Hero;
