import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
// Optional: Uncomment if using framer-motion
// import { motion } from 'framer-motion';

const Footer = () => {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const handleScroll = () =>{
        setShowArrow(window.scrollY>100)
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>window.removeEventListener('scroll', handleScroll)
  }, [])
  


  return (

    <footer className="max-w-5xl mx-auto flex flex-wrap items-center justify-between text-white py-8 px-4 text-center">
      {/* Name + Role */}
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Shreshth Sharma
        </h3>
        <p className="text-blue-500 py-1 px-3 rounded-full text-sm">
          Web Developer • Designer • Creator
        </p>
      </div>

      {/* Resume + Socials */}
      <div className="flex flex-col items-center">
        <a
          href="/Shreshth Sharma_Resumee.pdf"
          download
          className="text-blue-500 hover:text-white transition duration-300"
        >
          Download Resume
        </a>
        <div className="flex space-x-4 mt-2 text-2xl">
          <a
            href="https://github.com/shreshhhth"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/shreshth-sharma8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Back to Top */}
      <div className="flex flex-col items-end">
        {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
        <p className="mt-4 text-xs text-gray-400">
          &copy; 2025 Shreshth. All rights reserved.
        </p>
      </div>
    </footer>
    
  );
};

export default Footer;
