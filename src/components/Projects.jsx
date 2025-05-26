import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon as ExternalLinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import bloodBankImage from '../assets/images/blood bank.png'
import socialmedia from "../assets/images/socialmedia_prj.jpg"

const Projects = () => {
  const projects  = [
    {
      title: 'Blood Bank Donor Management System',
      description: 'The Blood Bank Donor Management System is a full-stack web application designed to connect blood donors and recipients efficiently. The system allows users to register as blood donors, view available blood groups, and schedule donations. It also facilitates easy communication between donors and blood banks. The application features user authentication, real-time data handling, and a user-friendly interface. Built with the MERN stack (MongoDB, Express, React, Node.js), it integrates responsive design principles and ensures secure user data management. The platform aims to streamline the blood donation process and enhance donor-recipient matching.',
      image: bloodBankImage, // Replace with the actual image variable
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Bcrypt', 'Redux', 'Tailwind CSS'],
      liveLink:'https://frontend-blood-bannk.onrender.com/',
      codeLink: 'https://github.com/hussain552/Blood-Bank-Donor-Management-System--Backend.git',
      status: 'Completed',
      type: 'Major',
    },
  
    {
      title: 'Socialpedia',
      description: 'This social media application enables seamless connection and communication, allowing users to share photos, videos, and updates. It features real-time messaging, personalized feeds, and community engagement tools, fostering meaningful interactions while ensuring a user-friendly, secure, and engaging experience.',
      image: socialmedia, // Replace with the actual image variable
      technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit'],
      liveLink: '#', // Replace with actual live link
      codeLink: 'https://github.com/hussain552/SOcial_media',
      status: 'Completed',
      type: 'Major',
    },
  ]; 




  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-sm transition-colors duration-300"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-sm transition-colors duration-300"
                  >
                    <CodeBracketIcon className="h-4 w-4" />
                    View Code
                  </a>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                  }`}>
                    {project.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.type === 'Major' 
                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'
                  }`}>
                    {project.type} Project
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
