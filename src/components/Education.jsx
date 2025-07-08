import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Your University',
      period: '2020-2024',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      degree: 'High School Diploma',
      institution: 'Your High School',
      period: '2018-2020',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="education" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <GraduationCap className="inline-block w-8 h-8 mr-3 text-primary-600" />
            My <span className="text-primary-600">Education</span>
          </h2>
          <p className="text-lg text-gray-600 font-nunito italic">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-primary-700 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold text-lg">
                      {edu.period}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;