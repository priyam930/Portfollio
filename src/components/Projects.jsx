import React, { useState } from 'react';
import { Code, Eye, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      name: 'Portfolio Website',
      desc: 'A responsive personal portfolio website built with React and Tailwind CSS. Features smooth animations, modern design, and mobile-first approach.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'webdev',
      links: { view: '#', code: '#' }
    },
    {
      name: 'Task Management App',
      desc: 'A full-stack task management application built with React and Node.js. Features user authentication, CRUD operations, and real-time updates.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'fullstack',
      links: { view: '#', code: '#' }
    },
    {
      name: 'Weather Dashboard',
      desc: 'A responsive weather application that displays current weather and forecasts using OpenWeatherMap API. Built with vanilla JavaScript.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'javascript',
      links: { view: '#', code: '#' }
    },
    {
      name: 'E-commerce Website',
      desc: 'A modern e-commerce platform with shopping cart functionality, user authentication, and payment integration using Stripe API.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'fullstack',
      links: { view: '#', code: '#' }
    },
    {
      name: 'Blog Platform',
      desc: 'A content management system for blogging with rich text editor, user roles, and comment system. Built with React and Express.js.',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'fullstack',
      links: { view: '#', code: '#' }
    },
    {
      name: 'Calculator App',
      desc: 'A scientific calculator web application with advanced mathematical functions and a clean, intuitive user interface.',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'javascript',
      links: { view: '#', code: '#' }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'webdev', label: 'Web Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <Code className="inline-block w-8 h-8 mr-3" />
            Projects <span className="text-yellow-300">Made</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-white text-gray-900'
                  : 'bg-transparent text-white border border-white hover:bg-white hover:text-gray-900'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                  <div className="w-12 h-1 bg-yellow-400"></div>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-3">{project.desc}</p>
                
                <div className="flex space-x-4">
                  <a
                    href={project.links.view}
                    className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </a>
                  <a
                    href={project.links.code}
                    className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
                  >
                    Code
                    <Github className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;