import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);
  const message = "Hi! I'm interested in joining Yog Aradhana. Please share more details.";
  const whatsappUrl = `https://wa.me/918768624664?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Fixed sticky container — always right side of viewport */}
      <div style={{
        position: 'fixed',
        right: '28px',
        bottom: '32px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexDirection: 'row-reverse',
      }}>
        {/* Tooltip — appears to the LEFT of the button */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 8, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '12px 20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <p style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1B2D2A', fontFamily: "'Outfit', sans-serif", marginBottom: '2px' }}>
                Chat on WhatsApp
              </p>
              <p style={{ fontSize: '0.72rem', color: '#666', fontFamily: "'Outfit', sans-serif" }}>+91 8768624664</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main WhatsApp button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label="Chat on WhatsApp"
          style={{
            width: '62px',
            height: '62px',
            borderRadius: '50%',
            background: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 28px rgba(37,211,102,0.45)',
            textDecoration: 'none',
            flexShrink: 0,
            position: 'relative',
          }}
        >
          {/* Pulse animations */}
          <span style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: '#25D366',
            animation: 'wa-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
            opacity: 0,
          }} />
          <span style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: '#25D366',
            animation: 'wa-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
            animationDelay: '0.75s',
            opacity: 0,
          }} />

          {/* WhatsApp icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white" style={{ position: 'relative', zIndex: 1 }}>
            <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.73 1.78 6.72L2 30l7.47-1.75A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.21 19.29c-.3.84-1.76 1.61-2.43 1.71-.62.09-1.4.13-2.26-.14a20.5 20.5 0 01-2.05-.76c-3.6-1.56-5.95-5.2-6.13-5.44-.18-.23-1.47-1.96-1.47-3.74s.93-2.65 1.26-3.02c.33-.36.72-.45.96-.45.24 0 .48.01.69.01.22.01.52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.4.03.63-.12.24-.18.38-.36.58-.18.2-.38.45-.54.6-.18.18-.37.37-.16.72.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.71z" />
          </svg>
        </motion.a>
      </div>

      {/* Pulse keyframes */}
      <style>{`
        @keyframes wa-ping {
          0% { transform: scale(1); opacity: 0.3; }
          80%, 100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
