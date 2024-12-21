import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import salesforce from '../assets/images/Certicications/salesforce-cerf.jpg'
import python from '../assets/images/Certicications/pyhton-certf.jpg'

const Certifications = () => {

  const certifications = [
    {
      "title": "Salesforce Developer Virtual Internship",
      "date": "January 16, 2024",
      "credentialId": "SISFVIPAD2024-77510",
      "description": "During the 8 Weeks period of Virtual Internship (November-December 2023), Ahamed Hussaini Pasha Shaik has completed the following Salesforce Trailhead modules: Salesforce Fundamentals, Organizational Setup, Relationship & Process Automation, Types Of Flows & Security, Apex, Testing & Debugging, VS Code Setup & CLI Setup, Lightning Web Components (LWC) & API, Developer Super Set",
      "skills": ["Salesforce", "Trailhead", "Developer", "Virtual Internship"], 
      "image": salesforce,
      "url": "https://smartinternz.com/internships/salesforce_certificates/2e57db4ed5a2c4833d214b85655137b2"
  },
  {
    "title": "The Complete Python Bootcamp From Zero to Hero in Python",
    "date": "Jan. 12, 2023",
    "credentialId": "UC-8d85064b-f1f6-44ce-834c-3214e5cc7828",
    "description": "This course covers a comprehensive range of Python topics, from fundamental concepts to advanced techniques.",
    "skills": ["Python", "Bootcamp"],
    "image": python,
    "url": "https://udemy.com/certificate/UC-8d85064b-f1f6-44ce-834c-3214e5cc7828" 
}
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
            <FontAwesomeIcon icon={faCertificate} className="w-8 h-8 mr-2" />
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Professional certifications and achievements that validate my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              {cert.image ? (
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 object-contain bg-white dark:bg-gray-800 p-2"
                  />
                  {cert.url && cert.url !== '#' && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <a
                        href="#"
                        onClick={() => window.open(cert.url, '_blank')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer flex items-center"
                      >
                        <CheckBadgeIcon className="w-5 h-5 mr-2" />
                        View
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-64 bg-white dark:bg-gray-800 p-8 flex flex-col items-center justify-center">
                  <CheckBadgeIcon className="h-16 w-16 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
                    {cert.organization}
                  </p>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <AcademicCapIcon className="w-5 h-5 mr-2" />
                  {cert.organization} • {cert.date}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full flex items-center"
                    >
                      <CheckBadgeIcon className="w-3 h-3 mr-1" />
                      {skill}
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

export default Certifications;
