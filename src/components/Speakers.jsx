// components/Speakers.js
import React from 'react';

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior React Engineer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topic: "React 18 and Concurrent Features"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "UI Architect",
      company: "DesignSystems Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topic: "Building Scalable Design Systems"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topic: "React in Production: Best Practices"
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Open Source Contributor",
      company: "React Core Team",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topic: "The Future of React"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Speakers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry experts and React community leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{speaker.role}</p>
                <p className="text-gray-600 text-sm mb-3">{speaker.company}</p>
                <p className="text-gray-700 text-sm">{speaker.topic}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-200">
            View All Speakers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;