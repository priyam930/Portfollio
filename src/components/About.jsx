import React from 'react';
import { User, Mail, MapPin, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <User className="inline-block w-8 h-8 mr-3 text-primary-600" />
            About <span className="text-primary-600">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="About me"
                className="w-80 h-96 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Software Developer & Tech Enthusiast
            </h3>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                I'm a passionate software developer with a strong foundation in modern web technologies 
                and programming languages. I enjoy creating innovative solutions and building applications 
                that make a difference.
              </p>
              <p>
                I have experience working with various technologies including JavaScript, Python, React, 
                Node.js, and databases. I'm always eager to learn new technologies and take on challenging 
                projects that push my skills to the next level.
              </p>
              <p>
                My approach to development focuses on writing clean, efficient code and creating 
                user-friendly interfaces. I believe in continuous learning and staying updated with 
                the latest industry trends and best practices.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-primary-600" />
                <div>
                  <span className="font-semibold text-gray-900">Email:</span>
                  <p className="text-gray-600">your.email@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-primary-600" />
                <div>
                  <span className="font-semibold text-gray-900">Location:</span>
                  <p className="text-gray-600">Your City, Your Country</p>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;