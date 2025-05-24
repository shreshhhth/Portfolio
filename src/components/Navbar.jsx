import React, { useEffect } from 'react'

const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
      document.body.style.overflow = menuOpen?"hidden":"";{/*this will avoid the scrolling when the menu in mobile screen is opened */}
    }, [menuOpen])
    
  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-sm border-b border-white/10 shadow-lg'>
        <div className='max-w-5xl mx-auto px-4 '>
            <div className='flex justify-between items-center h-16'>
                <a href="#home" className='font-mono text-xl font-bold text-white'>Shreshth <span className='text-blue-500'>.Sharma</span></a>
        {/*Navbar for Mobile Screens */}
        <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={()=>setMenuOpen((prev)=>!prev)}>
            &#9776;
        </div>

        {/*Navbar for Mobile Screens */}
        <div className='hidden md:flex items-center space-x-8 '>
            <a href="#home" className='text-gray-300 hover:text-white transition-colors'>Home</a>
            <a href="#about" className='text-gray-300 hover:text-white transition-colors'>About</a>
            <a href="#projects" className='text-gray-300 hover:text-white transition-colors'>Projects</a>
            <a href="#contact" className='text-gray-300 hover:text-white transition-colors'>Contact</a>
        </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar