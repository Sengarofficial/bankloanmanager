import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <div className="App">
          <Navbar />
          <HeroSection />
          <Footer />
      </div>
  );
}

export default App;