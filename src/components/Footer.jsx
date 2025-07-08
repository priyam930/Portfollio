import React from 'react';
import { Github, Linkedin, Mail, Instagram, Heart, ChevronRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">My Portfolio</h3>
            <p className="text-gray-300 mb-6">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
              <br /><br />
              Keep Rising 🚀
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 mb-6">
              <p className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                your.email@example.com
              </p>
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Your City, Your Country
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            Designed with{' '}
            <Heart className="inline w-4 h-4 text-red-500 animate-pulse" />{' '}
            by{' '}
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
              Your Name
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;