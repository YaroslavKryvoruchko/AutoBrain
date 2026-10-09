import React from 'react';

import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Mission from './components/Mission/Mission.jsx';
import Process from './components/Process/Process.jsx';
import Services from './components/Services/Services.jsx';
import Review from './components/Review/Review.jsx';
import Brands from './components/Brands/Brands.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Mission />
      <Process />
      <Brands />
      <Services />
      <Review />
      <Contact />
    </main>
  );
}

export default App;
