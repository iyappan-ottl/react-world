// components/Portfolio.jsx
import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Agency Landing page', type: 'Web/WordPress', image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=UX+Agency+Landing+Page' },
    { title: 'Agency Landing page', type: 'Web/WordPress', image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=NFT+ARTS' },
    { title: 'Agency Landing page', type: 'Web/WordPress', image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=RAYKO' },
    { title: 'Agency Landing page', type: 'Web/WordPress', image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=NFT+Browser+Game' },
    { title: 'Agency Landing page', type: 'Web/WordPress', image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=UI+Design+Project' },
    { title: 'Agency Landing page', type: 'Web/WordPress', image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Digital+Marketing' },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-yellow-50">
      <div className="relative mb-12">
        <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-blue-400 rotate-12 transform -translate-x-4 translate-y-4">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-blue-400">Portfolio</div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">Latest Projects</h2>
        <div className="w-12 h-1 bg-yellow-500 mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.type}</p>
              <div className="flex justify-end">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                  →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;