import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles.css'

function Projects() {
  const projects = [
    {
      title: 'APNI DUKKAN',
      description: 'An e-commerce platform for local shops.',
      technologies: ['HTML/CSS', 'SpringBoot', 'MYSQL'],
      image: 'path/to/apni-dukan-image.jpg'
    },
    {
      title: 'Woofer',
      description: 'A application for song lovers.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'path/to/woofer-image.jpg'
    },
    {
      title: 'WebChat',
      description: 'A real-time chat application.',
      technologies: ['React', 'WebScoket', 'SpringBoot','MYSQL'],
      image: 'path/to/project3-image.jpg'
    }
  ];

  return (
    <div className='h-full w-full bg-black flex flex-col items-center justify-between p-10 mt-20 gap-50'>
     
      <motion.div initial={{x:0,opacity:0}} whileInView={{x:+300,opacity:1}} transition={{ease:"linear", duration:0.8,amount: 0.2}} viewport={{once:false}} className='flex flex-row items-center gap-10'>
        <motion.div whileHover={{scale:1.05}} className='h-96 w-96 bg-white rounded-s-lg rounded-r-lg'>
        <img src={projects.image}></img>
            <div className='text-black p-5'>
              <h1>{projects.title}</h1>
              <p>{projects.description}</p>
              <div className='flex flex-row gap-2'>
                {projects[0].technologies.map((tech, index) => (
                  <div key={index} className='bg-gray-300 px-2 py-1 rounded-full'>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
        </motion.div>
      </motion.div>
      <motion.div initial={{x:0,opacity:0}} whileInView={{x:-300,opacity:1}} transition={{ease:"linear", duration:0.8,amount: 0.2}} >
        <motion.div whileHover={{scale:1.05}} className='h-96 w-96 bg-white rounded-s-lg rounded-r-lg'>
            <img src={projects.image}></img>
            <div className='text-black p-5'>
              <h1>{projects.title}</h1>
              <p>{projects.description}</p>
              <div className='flex flex-row gap-2'>
                {projects[1].technologies.map((tech, index) => (
                  <div key={index} className='bg-gray-300 px-2 py-1 rounded-full'>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
        </motion.div>
      </motion.div>

      <motion.div initial={{x:0,opacity:0}} whileInView={{x:+300,opacity:1}} transition={{ease:"linear", duration:0.8,amount: 0.2}} >
        <motion.div whileHover={{scale:1.05}} className='h-96 w-96 bg-white rounded-s-lg rounded-r-lg'>
        <img src={projects.image}></img>
            <div className='text-black p-5'>
              <h1>{projects.title}</h1>
              <p>{projects.description}</p>
              <div className='flex flex-row gap-2'>
                {projects[2].technologies.map((tech, index) => (
                  <div key={index} className='bg-gray-300 px-2 py-1 rounded-full'>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
        </motion.div>
      </motion.div>
      
    </div>
  )
}

export default Projects
