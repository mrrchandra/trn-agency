
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
