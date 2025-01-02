import React from "react";
import { motion } from "framer-motion";
import { FaHackerrank } from "react-icons/fa";

import { CIcon } from "@coreui/icons-react";

import { cibLeetcode,cibGithub, cibLinkedin,cibHackerrank} from '@coreui/icons'; // Specific LeetCode icon

import {
  CodeBracketIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faLinkedin,
//   faHackerrank,
// } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../assets/images/profile.jpg";

const About = () => {
  const whatIDo = [
    {
      title: "Web Development",
      description:
        "Building responsive and dynamic web applications using modern technologies like React, Node.js, and MongoDB.",
      icon: GlobeAltIcon,
    },
    {
      title: "Mobile-First Design",
      description:
        "Creating seamless experiences across all devices with a mobile-first approach and responsive design principles.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Problem Solving",
      description:
        "Transforming complex problems into simple, beautiful, and intuitive solutions.",
      icon: LightBulbIcon,
    },
  ];

  const skills = [
    {
      category: "Frontend Development",
      items: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
        "Framer Motion",
        "Material-UI",
      ],
      icon: CodeBracketIcon,
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express.js", "MongoDB", "SQL", "RESTful APIs"],
      icon: CommandLineIcon,
    },
    {
      category: "Tools & Version Control",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Hoppscatch",
        "npm",
        "Webpack",
      ],
      icon: CodeBracketIcon,
    },
    {
      category: "Cloud & Deployment",
      items: ["Netlify", "Vercel", "Firebase", "Hostinger"],
      icon: CodeBracketIcon,
    },
  ];

  const achievements = [
    {
      title: "Solved 300+ DSA Problems on Leetcode",
      description:
        "Successfully solved over 300 data structures and algorithms (DSA) problems on Leetcode, improving problem-solving skills and mastering various algorithmic techniques.",
      icon: "leet",
    },
    {
      title: "5-Stars in Python on HackerRank",
      description:
        "Achieved a 5-star rating in Python on HackerRank by solving complex challenges, demonstrating proficiency in Python programming and algorithms.",
      icon: FaHackerrank, // Replace with actual icon variable
    },
    {
      title: "Competitive Programming Contests",
      description:
        "Participated in multiple contests on Codeforces, CodeChef, and Leetcode, honing competitive programming skills and ranking among top participants.",
      icon: "ContestIcon", // Replace with actual icon variable
    },
  ];
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hussain_shaik_18786",
      icon: <CIcon icon={cibLinkedin} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/hussain552",
      icon: <CIcon icon={cibGithub} />,
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/hussain_shaik",
      icon: <CIcon icon={cibHackerrank} />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/hussain_shaik",
      icon: <CIcon icon={cibLeetcode} />, // LeetCode icon
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-[#2563eb] dark:text-white mb-4" // Custom color
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4 mb-4">
                A passionate Full Stack Developer with a love for creating
                elegant solutions and meaningful web experiences.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="p-0.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-64 h-64 rounded-full object-cover bg-white shadow-lg"
                    />
                  </div>
                </motion.div>

                <div className="flex flex-col items-center md:items-start gap-6">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="w-5 h-5 mr-2"
                    />
                    Download Resume
                  </a>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {socialLinks.map((link) => (
  <a
    key={link.name}
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative"
  >
    <div
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-lg 
                 border-2 border-transparent group-hover:border-blue-500 dark:group-hover:border-blue-400
                 transform transition-all duration-500 ease-in-out 
                 hover:scale-125 hover:rotate-12 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-blue-900"
    >
      {React.cloneElement(link.icon, { className: "w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" })}
    </div>
    <span
      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap"
    >
      {link.name}
    </span>
  </a>
))}

                  </div>
                </div>
              </div>

              <div className="mt-12 text-left px-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Hello, I'm Ahamed Hussaini Pasha Shaik
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
                  I am a passionate and curious individual who loves exploring
                  new technologies and constantly learning new skills. My
                  enthusiasm for coding and problem-solving drives me to dive
                  deep into data structures and algorithms (DSA), and I take
                  great pride in tackling challenging problems to find elegant
                  solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
                  Full-stack web development is where I channel my creativity
                  and curiosity, building meaningful applications that provide
                  real value. I enjoy the entire process, from designing the
                  frontend user experience to implementing robust backend
                  systems. Every project is an opportunity for me to learn,
                  experiment, and grow as a developer.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
                  I am always eager to explore new tools, frameworks, and
                  concepts, and I strive to stay on the cutting edge of
                  technology. My goal is to continuously improve, push my
                  limits, and contribute to the tech community by building
                  innovative and impactful solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
                  Let's connect and create amazing things together! 🤝✨
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 text-left"
          ></motion.div>
        </motion.div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatIDo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center justify-center mb-4">
                  <item.icon className="h-12 w-12 text-blue-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <skill.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  {skill.category}
                </h4>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <svg
                        className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Achievements & Recognition
          </h3>
          <div
            className={`grid grid-cols-1 ${
              achievements.length === 1
                ? "place-items-center"
                : "md:grid-cols-3"
            } gap-8`}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <achievement.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
