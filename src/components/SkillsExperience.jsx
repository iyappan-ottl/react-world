// components/SkillsExperience.jsx
import React from 'react';

const SkillsExperience = () => {
  const skills = [
    { name: 'HTML', icon: '5' },
    { name: 'CSS', icon: '3' },
    { name: 'React JS', icon: '⚛️' },
    { name: 'Angular', icon: 'A' },
    { name: 'iOS App', icon: '🍎' },
    { name: 'App Dev', icon: '🤖' },
  ];

  const experience = [
    { period: 'Jan 2021 - Present', position: 'Creative Director', company: 'pxdraft Ltd, UK' },
    { period: 'Jan 2021 - Present', position: 'Creative Director', company: 'pxdraft Ltd, UK' },
    { period: 'Jan 2021 - Present', position: 'Creative Director', company: 'pxdraft Ltd, UK' },
    { period: 'Jan 2021 - Present', position: 'Creative Director', company: 'pxdraft Ltd, UK' },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <div className="relative mb-12">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-blue-400 rotate-12 transform -translate-x-4 translate-y-4">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-blue-400">Experience</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Skills and Experience</h2>
            <div className="w-12 h-1 bg-yellow-500 mt-4"></div>
          </div>

          <p className="text-gray-600 mb-8">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
          </p>

          <h3 className="text-xl font-bold mb-6">My Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="border border-gray-300 p-4 rounded-lg flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl">
                  {skill.icon}
                </div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-xl font-bold mb-6">Experience</h3>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <div className="flex justify-between">
                  <div className="text-sm text-gray-600">{exp.period}</div>
                  <div>
                    <div className="font-semibold">{exp.position}</div>
                    <div className="text-sm text-gray-600">{exp.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-blue-400 rotate-45 transform translate-x-4 -translate-y-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <button className="px-6 py-2 bg-yellow-500 text-white rounded-md font-medium">Hire me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;