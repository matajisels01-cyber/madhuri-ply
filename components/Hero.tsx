import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-32 px-6"
      style={{ backgroundImage: "url('https://picsum.photos/seed/hardware/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-wide">
          Your One-Stop Shop for Quality Supplies
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
          From foundation to finish, we provide all brands of electrical, hardware, paint, plumbing, and sanitary products to bring your vision to life.
        </p>
        <a 
          href="#products" 
          className="mt-8 inline-block bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-amber-700 transform hover:-translate-y-1 transition-all duration-300"
        >
          Explore Our Products
        </a>
      </div>
    </section>
  );
};

export default Hero;