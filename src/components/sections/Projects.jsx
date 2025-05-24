import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import RevealOnScroll from "../RevealOnScroll";


const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-center bg-clip-text text-transparent ">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">LOOTED! - An E-commerce Web App</h3>
            <p className="text-gray-400 mb-4">
              A complete e-commerce platform built with a modern tech stack
              featuring user authentication, product listings, shopping cart
              functionality, payment integration, and admin management.
            </p>
            {/*Displaying key skills of the project */}
            <div className="flex flex-wrap gap-2 mb-4">
               {[ 'MongoDB', 'Express', 'Vite + React', 'Node',  'TailwindCSS',  'Axios', 'Bcrypt', 'JWT Authentication', 'Multer', 'Validator','Context API', 'React Router Dom', 'React Toastify', 'Stripe'  ].map((skill, index)=>(
                    <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition m-0">{skill}</span>
               ))}
            </div>
            {/*Project Page */}
            <div className="flex justify-between items-center">
              <a href="#" className="flex items-center justify-between gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4">View Project <span><ArrowRightIcon className="h-4 w-4 text-inherit" /></span></a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">BrainBox - LMS Web App</h3>
            <p className="text-gray-400 mb-4">
              BrainBox is a smart Learning Management System (LMS) designed to simplify teaching, enhance student engagement, and streamline course management and robust admin panel — all in one powerful platform.
            </p>
            {/*Displaying key skills of the project */}
            <div className="flex flex-wrap gap-2 mb-4">
               {['Vite + React', 'Context API', 'TailwindCSS', 'Axios', 'Node', 'Express', 'MongoDB', 'Multer', 'Validator', 'Cloudinary', 'Bcrypt' , 'Stripe', 'Razorpay' ].map((skill, index)=>(
                    <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition m-0">{skill}</span>
               ))}
            </div>
            {/*Project Page */}
            <div className="flex justify-between items-center">
              <a href="#" className="flex items-center justify-between gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4">View Project <span><ArrowRightIcon className="h-4 w-4 text-inherit" /></span></a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
