// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block bg-blue-500 bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Boston React Conference 2024
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build the Future with <span className="text-yellow-300">React</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join developers from around New England for a day of learning, networking, and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition duration-200 transform hover:scale-105">
              Get Your Ticket
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-blue-200">Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-blue-200">Speakers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-blue-200">Amazing Day</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;