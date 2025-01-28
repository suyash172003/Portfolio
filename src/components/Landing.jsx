import React from 'react'
import {motion} from 'framer-motion'

function Landing() {
  const string = "Hello, I'm Suyash".split('')
  return (
    <div className='-mt-20 flex flex-row justify-center items-center h-screen gap-30'>
        <div className='flex flex-col gap-5 items-center'>
            <div className='flex flex-row text-white text-5xl font-bold'>
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
            <div className='text-white text-2xl font-light'>I'm a Software Developer</div>
            <button className='bg-white text-black px-5 py-2 rounded-full'>Contact Me</button>
        </div>
    </div>
  )
}

export default Landing