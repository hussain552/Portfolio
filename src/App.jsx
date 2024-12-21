import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

import './App.css';
import Footer1 from './components/Footer1.jsx';
import './getintouch.scss'
// import LeetCodeProblems from './components/Leetcode';


function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      <Navbar />
      <main className="pt-16">


        <Hero />
        <About />
        <Projects />
        {/* <Experience /> */}
        {/* <Education /> */}
        <Certifications />
        <Contact />

      </main>
      {/* <Footer /> */}
      <Footer1/>
      
    </div>
  );
}

export default App;
