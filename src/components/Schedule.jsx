// components/Schedule.js
import React from 'react';

const Schedule = () => {
  const schedule = [
    { time: "9:00 AM", event: "Registration & Breakfast", type: "break" },
    { time: "10:00 AM", event: "Opening Keynote: The Future of React", type: "keynote" },
    { time: "11:00 AM", event: "React Performance Optimization", type: "talk" },
    { time: "12:00 PM", event: "Lunch & Networking", type: "break" },
    { time: "1:30 PM", event: "Building Modern React Apps", type: "talk" },
    { time: "2:30 PM", event: "State Management in 2024", type: "talk" },
    { time: "3:30 PM", event: "Coffee Break", type: "break" },
    { time: "4:00 PM", event: "Panel Discussion: React Ecosystem", type: "panel" },
    { time: "5:00 PM", event: "Closing Remarks & After Party", type: "keynote" }
  ];

  const getEventColor = (type) => {
    switch (type) {
      case 'keynote': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'talk': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'panel': return 'bg-green-100 text-green-800 border-green-200';
      case 'break': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Schedule</h2>
          <p className="text-xl text-gray-600">
            A full day of learning and networking
          </p>
        </div>

        <div className="space-y-6">
          {schedule.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
              <div className="sm:w-1/4 mb-3 sm:mb-0">
                <span className="text-lg font-bold text-gray-900">{item.time}</span>
              </div>
              <div className="sm:w-3/4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getEventColor(item.type)} mb-2`}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{item.event}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;