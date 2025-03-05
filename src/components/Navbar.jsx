import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>ayman boujjar</div>
        
        {/* Mobile Menu Button */}
        <button 
          className='md:hidden text-white text-2xl' 
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        
        {/* CV Download Button (Always Visible) */}
        <a 
          href="/assets/cv.pdf" 
          download="aymanboujjar.pdf"
          className="hidden md:inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white
                     transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Download CV
        </a>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center space-y-4 py-4 bg-black'>
          <a href="#home" className='hover:text-gray-400' onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className='hover:text-gray-400' onClick={() => setIsOpen(false)}>About Me</a>
          <a href="#service" className='hover:text-gray-400' onClick={() => setIsOpen(false)}>Services</a>
          <a href="#project" className='hover:text-gray-400' onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className='hover:text-gray-400' onClick={() => setIsOpen(false)}>Contact</a>
          <a 
            href="/assets/cv.pdf" 
            download="aymanboujjar.pdf"
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full">
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
