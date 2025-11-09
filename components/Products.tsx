import React from 'react';

interface Product {
  name: string;
  category: string;
  imageUrl: string;
}

const products: Product[] = [
  { name: 'Wood Doors', category: 'Doors & Plywood', imageUrl: 'https://picsum.photos/seed/wooddoor/400/300' },
  { name: 'Mortise Locks', category: 'Hardware & Security', imageUrl: 'https://picsum.photos/seed/mortiselock/400/300' },
  { name: 'Dulux Paint', category: 'Paints & Finishes', imageUrl: 'https://picsum.photos/seed/duluxpaint/400/300' },
  { name: 'Legrand Switches', category: 'Electrical Fittings', imageUrl: 'https://picsum.photos/seed/legrandswitch/400/300' },
  { name: 'Kundan Wires', category: 'Electrical Wiring', imageUrl: 'https://picsum.photos/seed/kundanwire/400/300' },
  { name: 'Finolex Pipes & Wires', category: 'Plumbing & Electrical', imageUrl: 'https://picsum.photos/seed/finolexpipe/400/300' },
  { name: 'Havells Products', category: 'Electrical Appliances', imageUrl: 'https://picsum.photos/seed/havells/400/300' },
  { name: 'PVC Doors', category: 'Doors & Frames', imageUrl: 'https://picsum.photos/seed/pvcdoor/400/300' },
  { name: 'Plywood Sheets', category: 'Building Materials', imageUrl: 'https://picsum.photos/seed/plywood/400/300' },
  { name: 'CP Fittings', category: 'Bathroom & Kitchen', imageUrl: 'https://picsum.photos/seed/cpfittings/400/300' },
  { name: 'Bathroom Fittings', category: 'Sanitary Ware', imageUrl: 'https://picsum.photos/seed/bathroomfittings/400/300' },
  { name: 'Fevicol Adhesives', category: 'Adhesives & Sealants', imageUrl: 'https://picsum.photos/seed/fevicol/400/300' },
  { name: 'Watertec Fittings', category: 'Plumbing Solutions', imageUrl: 'https://picsum.photos/seed/watertec/400/300' },
  { name: 'V-Guard Fans & Switches', category: 'Fans & Electricals', imageUrl: 'https://picsum.photos/seed/vguard/400/300' },
  { name: 'Crompton Fans & LEDs', category: 'Lighting & Appliances', imageUrl: 'https://picsum.photos/seed/crompton/400/300' },
  { name: 'Kitchen Baskets', category: 'Modular Kitchen', imageUrl: 'https://picsum.photos/seed/kitchenbasket/400/300' },
  { name: 'GM Switches & Fittings', category: 'Switches & Accessories', imageUrl: 'https://picsum.photos/seed/gmswitch/400/300' },
];


const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Featured Products</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">A glimpse into our wide range of quality products from trusted brands.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;