import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles.css'
import ApniDukkan from '../assets/ApniDukkan.png'
import Woofer from '../assets/Woofer.png'
import WebChat from '../assets/WebChat.png'

const Projects = React.forwardRef((props,ref) => {
  const projects = [
    {
      title: 'APNI DUKKAN',
      description: 'An e-commerce platform for local shops.',
      technologies: ['HTML/CSS', 'SpringBoot', 'MYSQL'],
      image: ApniDukkan
    },
    {
      title: 'Woofer',
      description: 'A application for song lovers.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: Woofer
    },
    {
      title: 'WebChat',
      description: 'A real-time chat application.',
      technologies: ['React', 'WebSocket', 'SpringBoot', 'MYSQL'],
      image: WebChat
    }
  ];

  return (
    <div ref={ref} className='text-white bg-red-900 w-full min-h-screen flex flex-col items-center justify-center gap-10 p-10'>
      <div className='text-8xl mb-10 uppercase font-bold'>Projects</div>
      <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {projects.map((project, index) => {
          const controls = useAnimation()
          const [ref, inView] = useInView({ triggerOnce: false })

          useEffect(() => {
            if (inView) {
              controls.start({ opacity: 1, y: 0, scale: 1 })
            } else {
              controls.start({ opacity: 0, y: 50, scale: 0.8 })
            }
          }, [controls, inView])

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col gap-5 mb-10 hover:shadow-2xl transition-shadow duration-300'
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className='h-48 w-full object-cover rounded-lg' />
              <div className='text-2xl font-bold'>{project.title}</div>
              <div>{project.description}</div>
              <div className='flex gap-2'>
                {project.technologies.map((technology, techIndex) => (
                  <div key={techIndex} className='bg-gray-700 text-white px-2 py-1 rounded-lg'>{technology}</div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
)
export default Projects
