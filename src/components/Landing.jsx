import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowDownCircleFill } from "react-icons/bs"
import TypeWriter from 'typewriter-effect'
import Navbar from './Navbar'

function Landing() {
  const string = "Hello, I'm Suyash".split('')

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-10 bg-black text-white'>
      <div className='flex flex-col gap-1 items-center text-white'>
        <div className='flex flex-row text-white text-5xl font-bold'>
          {string.map((char, index) => (
            <motion.span 
              initial={{ opacity: 0}} 
              animate={{ opacity: 1}} 
              transition={{ ease: 'linear', delay: index * 0.1 }} 
              key={index}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
        
        
      </div>
      <TypeWriter
        options={{ strings: [ "I'm a Software Developer","I'm a Full Stack Develper" ], autoStart: true, loop: true }}
        className='text-white text-6xl font-bold'
       />
       <BsArrowDownCircleFill className='text-white text-5xl animate-bounce'/>
     
      
    </div>
  )
}

export default Landing