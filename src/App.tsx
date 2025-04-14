import React from 'react';
import { Header } from './components/Header';
// import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import BlogSlider from './components/BlogSlider';
import DigitalServicesSection from './components/DigitalServicesSection';
import Logo from './components/Logo';
import { Testimonials } from './components/Testimony';
import CreativeAgency from './components/CreativeAgency';
import CreativeSolutions from './components/CreativeSolutions';
import SubscribeSection from './components/SubscribeSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
         <Hero /> 
        <CreativeSolutions />
        <CreativeAgency />
        <SubscribeSection />
        <Testimonials />
        <DigitalServicesSection />
        <Logo />
        <BlogSlider />
      </main>
      <Footer />
    </div>
  );
}

export default App;