
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Challenge from '../components/Challenge';
import Solution from '../components/Solution';
import Features from '../components/Features';
import Technology from '../components/Technology';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Challenge />
      <Solution />
      <Features />
      <Technology />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
