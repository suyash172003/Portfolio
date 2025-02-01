import React from 'react'
import TypeWriter from 'typewriter-effect'

const About = React.forwardRef((props,ref) => {
  const About = "About".split('')
  return (
    <div ref={ref} className='h-screen w-full flex flex-row p-10 mb-10 gap-50 bg-red-900 text-white '>
        <div className="h-full w-64 rounded-b-3xl rounded-t-3xl bg-black">
            <div className="text-8xl text-red-900 font-bold uppercase flex flex-col justify-center items-center h-full">
                {About.map((char, index) => (<h1 key={index}>{char}</h1>))}
            </div>
        </div>
        <div className='text-white text-3xl font-light flex items-center justify-center md:w-2/3'>
          
            <TypeWriter options={{
               strings: ['I am a Full Stack Developer with a passion for creating beautiful and functional websites,I have experience in building web applications using React, Node.js, and Express.js,I am always eager to learn new technologies and improve my skills. I am currently looking for new opportunities to work on exciting projects.'],
                autoStart: true,
                loop: true,
               }}>
            </TypeWriter>
          
      </div>
    </div>
  )
})

export default About