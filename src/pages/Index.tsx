
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ChallengeTracks from '@/components/ChallengeTracks';
import Tools from '@/components/Tools';
import JudgingCriteria from '@/components/JudgingCriteria';
import Prizes from '@/components/Prizes';
import RegistrationForm from '@/components/RegistrationForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <ChallengeTracks />
      <Tools />
      <JudgingCriteria />
      <Prizes />
      <RegistrationForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
