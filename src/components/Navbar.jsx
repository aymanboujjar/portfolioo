import React from 'react'
const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>ayman boujjar</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#service" className='hover:text-gray-400'>Services</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <a 
              href="/assets/cv.pdf" 
              download="aymanboujjar.pdf"
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
                        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full 
                        inline-block text-center">
              Download CV
            </a>

        </div>
    </nav>
  )
}

export default Navbar