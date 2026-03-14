import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function LandingPage() {
  return (
    <div>

      <Navbar/>
      <Hero/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default LandingPage
