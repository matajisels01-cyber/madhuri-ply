import React from 'react';
import { PhoneIcon, EnvelopeIcon, InstagramIcon, BuildingStorefrontIcon, MapPinIcon } from './icons';

const ContactFooter: React.FC = () => {
  const contactDetails = [
    {
      icon: PhoneIcon,
      text: '83283 5204',
      href: 'tel:+91832835204',
      label: 'Mobile Number'
    },
    {
      icon: EnvelopeIcon,
      text: 'plywoodmadhuri@gmail.com',
      href: 'mailto:plywoodmadhuri@gmail.com',
      label: 'Email Address'
    },
    {
      icon: InstagramIcon,
      text: '@plywoodmadhuri78udt',
      href: 'https://instagram.com/plywoodmadhuri78udt',
      label: 'Instagram Profile'
    },
    {
      icon: MapPinIcon,
      text: '22e Ayyaooan Kovil Street (opp), Dharapuram Main Road, Udumalpet - 642126',
      href: 'https://www.google.com/maps/search/?api=1&query=22e+ayyaooan+kovil+street+(opp),+dharapuram+main+road,+udumalpet+642126',
      label: 'Store Address'
    }
  ];

  return (
    <footer id="contact" className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <BuildingStorefrontIcon className="h-10 w-10 text-amber-400" />
              <h2 className="text-3xl font-bold">Madhuri Plywood</h2>
            </div>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0">
              Your trusted partner for building and home improvement supplies. Visit us for quality products and expert advice.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Get in Touch</h3>
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <a 
                  key={index} 
                  href={detail.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <detail.icon className="h-7 w-7 text-amber-400 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">{detail.label}</p>
                    <p className="text-gray-300 break-words">{detail.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Madhuri Plywood. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;