import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import ContactFooter from './components/ContactFooter';
import Brands from './components/Brands';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <Brands />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;