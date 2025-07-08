import React from 'react';
import { Code, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png' },
    { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python--v1.png' },
    { name: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' },
    { name: 'HTML5', icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png' },
    { name: 'CSS3', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
    { name: 'MySQL', icon: 'https://img.icons8.com/color/48/000000/mysql-logo.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/48/000000/git.png' },
    { name: 'GitHub', icon: 'https://img.icons8.com/glyph-neue/48/ffffff/github.png' },
    { name: 'VS Code', icon: 'https://img.icons8.com/color/48/000000/visual-studio-code-2019.png' },
    { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/000000/bootstrap.png' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-primary-600 to-secondary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <Code className="inline-block w-8 h-8 mr-3" />
            Skills & <span className="text-yellow-300">Abilities</span>
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card group cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-white font-medium text-sm text-center group-hover:text-yellow-300 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;