import React from 'react'
import { motion } from 'framer-motion'

function Landing() {
  const string = "Hello, I'm Suyash".split('')

  return (
    <div className='-mt-20 flex flex-row justify-center items-center h-screen gap-30 bg-black'>
    
      <div className='flex flex-col gap-5 items-center'>
        <div className='flex flex-row text-white text-5xl font-bold'>
          {string.map((char, index) => (
            <motion.span 
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ ease: 'easeOut', delay: index * 0.1 }} 
              key={index}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5 }} 
          className='text-white text-2xl font-light'
        >
          I'm a Software Developer
        </motion.div>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          className='bg-white text-black px-5 py-2 rounded-full mt-5'
        >
          Contact Me
        </motion.button>
      </div>
    </div>
  )
}

export default Landing