import React from 'react'
import '../index.css'
import { motion } from 'framer-motion'

function Navbar({scrollToSection, landingRef, educationRef, projectsRef, skillsRef, contactRef}) {
  return (
    <div className='bg-black text-white text-lg font-light flex justify-center items-center gap-20 px-10 py-10'>
      {["Home","Education","Projects","Connect"].map((item) => (
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{opacity:1,y:0}}  transition={{ease:"easeInOut", duration:0.8, ammt:0.4}} key={item} className='relative'>
          <button className='relative z-10 text-white flex items-center justify-center uppercase' onClick={() => {
            scrollToSection(item === "Home" ? landingRef : item === "Projects" ? projectsRef : item === "Education" ? educationRef : item === "Connect" ? contactRef : skillsRef)}}>
            {item}
          </button>
          <div className='border-1 bg-gray-500 w-full'></div>
        </motion.div>
      ))}
    </div>
  )
}

export default Navbar