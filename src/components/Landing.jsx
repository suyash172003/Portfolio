import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowDownCircleFill } from "react-icons/bs"
import Typewriter from 'typewriter-effect'

const Landing = React.forwardRef(({ scrollToSection, aboutRef }, ref) => {
  const string = "Hello, I'm Suyash".split('')

  return (
    <div ref={ref} className='-mt-20 flex flex-col justify-center items-center h-screen gap-10 bg-black text-white'>
      <div className='flex flex-col gap-1 items-center'>
        <div className='flex flex-row text-red-900 text-8xl font-bold'>
          {string.map((char, index) => (
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ ease: 'linear', delay: index * 0.1 }} 
              key={index}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="text-white text-5xl font-light">
        <Typewriter
          options={{ strings: ["I'm a Software Developer", "I'm a Full Stack Developer"], autoStart: true, loop: true }}
        />
      </div>
      <button onClick={() => scrollToSection(aboutRef)}>
        <BsArrowDownCircleFill className='text-white text-5xl animate-bounce' />
      </button>
    </div>
  )
})

export default Landing