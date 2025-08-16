import React, { useEffect } from 'react';
import Hero from '../components/Sections/Hero';
import Services from '../components/Sections/Services';
import Testimonials from '../components/Sections/Testimonials';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Teguilog - Agencia de Marketing Digital y SEO';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Agencia especializada en marketing digital, SEO y automatizaciones. Impulsa tu presencia online con estrategias efectivas y resultados medibles.');
    }
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;