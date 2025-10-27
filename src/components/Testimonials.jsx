// components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer Lutheran',
      title: 'CEO at pxdraft',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      avatar: '👩‍🦰'
    },
    {
      name: 'Jennifer Lutheran',
      title: 'CEO at pxdraft',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      avatar: '👨‍💼'
    },
    {
      name: 'Jennifer Lutheran',
      title: 'CEO at pxdraft',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      avatar: '👩‍🎨'
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="relative mb-12">
        <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-blue-400 rotate-12 transform -translate-x-4 translate-y-4">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-blue-400">Testimonial</div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">Client's Kind Word</h2>
        <div className="w-12 h-1 bg-yellow-500 mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border border-gray-300 p-6 rounded-lg bg-white hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-4xl">
                {testimonial.avatar}
              </div>
            </div>
            <div className="text-center mb-4">
              <div className="text-yellow-500 text-2xl">“</div>
            </div>
            <p className="text-gray-600 mb-6 text-center">{testimonial.quote}</p>
            <div className="text-center">
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;