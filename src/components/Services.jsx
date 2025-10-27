// components/Services.jsx
import React from 'react';

const Services = () => {
  const services = [
    { number: '01', title: 'Web Design', icon: '📱' },
    { number: '02', title: 'Development', icon: '💻' },
    { number: '03', title: 'SEO Marketing', icon: '🔺' },
    { number: '04', title: 'Web Design', icon: '🖼️' },
    { number: '05', title: 'Development', icon: '≡' },
    { number: '06', title: 'SEO Marketing', icon: '🌐' },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-yellow-50">
      <div className="relative mb-12">
        <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-blue-400 rotate-12 transform -translate-x-4 translate-y-4">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-blue-400">Services</div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">Services I Offer</h2>
        <div className="w-12 h-1 bg-yellow-500 mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-300 p-6 rounded-lg bg-white hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold mb-4">{service.number}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl">
              {service.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;