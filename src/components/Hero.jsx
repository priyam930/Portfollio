import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Typed from 'react-typed';

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        imageRef.current.style.transform = `perspective(1000px) rotateY(${x / 20}deg) rotateX(${-y / 20}deg)`;
      }
    };

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      }
    };

    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener('mousemove', handleMouseMove);
      imageElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('mousemove', handleMouseMove);
        imageElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-800' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email', color: 'hover:text-red-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Name
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 h-12">
              I'm a{' '}
              <span className="text-primary-600 font-semibold">
                <Typed
                  strings={[
                    'Software Developer',
                    'Web Developer',
                    'Tech Enthusiast',
                    'Problem Solver'
                  ]}
                  typeSpeed={50}
                  backSpeed={25}
                  backDelay={500}
                  loop
                />
              </span>
            </div>
            
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-full hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              About Me
              <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
            </a>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mt-12">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color} hover:bg-white hover:shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              ref={imageRef}
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl transition-transform duration-300 cursor-pointer"
            >
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;