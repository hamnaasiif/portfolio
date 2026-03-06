import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import SessionEnd from './components/SessionEnd';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <SessionEnd />
    </>
  );
}

export default App;
