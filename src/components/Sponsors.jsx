// components/Sponsors.js
import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { name: "Vercel", tier: "platinum" },
    { name: "Netlify", tier: "platinum" },
    { name: "GitHub", tier: "gold" },
    { name: "Microsoft", tier: "gold" },
    { name: "Stripe", tier: "silver" },
    { name: "MongoDB", tier: "silver" },
    { name: "Auth0", tier: "silver" },
    { name: "Cloudflare", tier: "silver" }
  ];

  const getTierColor = (tier) => {
    switch (tier) {
      case 'platinum': return 'text-gray-800 bg-gray-100';
      case 'gold': return 'text-yellow-800 bg-yellow-100';
      case 'silver': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thank you to our amazing sponsors who make this event possible
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Platinum Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsors.filter(s => s.tier === 'platinum').map((sponsor, index) => (
              <div key={index} className="bg-gray-100 p-8 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-800">{sponsor.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-yellow-800 text-center mb-8">Gold Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sponsors.filter(s => s.tier === 'gold').map((sponsor, index) => (
              <div key={index} className="bg-yellow-100 p-6 rounded-lg text-center">
                <div className="text-xl font-bold text-yellow-800">{sponsor.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <h3 className="text-2xl font-bold text-gray-600 text-center mb-8">Silver Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sponsors.filter(s => s.tier === 'silver').map((sponsor, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-lg font-medium text-gray-600">{sponsor.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Interested in sponsoring?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-200">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;