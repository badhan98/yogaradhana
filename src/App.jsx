import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Owner from './components/Owner';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function App() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#1B2D2A', minHeight: '100vh' }}>
      <NavBar />
      <main>
        <Hero />
        <Owner />
        <Services />
        <Schedule />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
