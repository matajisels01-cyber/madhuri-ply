import React from 'react';

const brands = [
  'Dulux', 'Legrand', 'Kundan', 'Finolex', 'Havells', 'Fevicol', 
  'Watertec', 'V-Guard', 'Crompton', 'GM', 'And Many More...'
];

const Brands: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">We Carry All Major Brands</h2>
        <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
          Your trust is our priority. That's why we partner with the most reputable brands in the industry to guarantee quality and durability for every product you purchase.
        </p>
        <div className="mt-10">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
            {brands.map(brand => (
              <span key={brand} className="text-gray-600 font-medium text-lg md:text-xl filter grayscale hover:grayscale-0 transition-all duration-300">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;