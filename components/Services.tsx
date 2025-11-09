
import React from 'react';
import { BoltIcon, PaintBrushIcon, WrenchScrewdriverIcon, PipeIcon, ToiletPaperIcon } from './icons';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: BoltIcon,
    title: 'Electrical',
    description: 'A wide range of wires, switches, lighting, and electrical fittings for all your needs.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Hardware',
    description: 'High-quality tools, fasteners, locks, and essential hardware for any project.'
  },
  {
    icon: PaintBrushIcon,
    title: 'Paint',
    description: 'Premium interior and exterior paints from leading brands in a variety of colors.'
  },
  {
    icon: PipeIcon,
    title: 'Plumbing',
    description: 'Durable pipes, fittings, taps, and fixtures for reliable water management systems.'
  },
  {
    icon: ToiletPaperIcon,
    title: 'Sanitary',
    description: 'Modern and elegant sanitary ware, including basins, toilets, and bathroom accessories.'
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
      <div className="bg-amber-100 p-4 rounded-full mb-4">
        <Icon className="h-10 w-10 text-amber-700" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Products & Services</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">We stock a comprehensive inventory to ensure you find exactly what you're looking for.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map(service => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
