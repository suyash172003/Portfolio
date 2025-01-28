import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles.css'

function Projects() {
  const projects = [
    {
      title: 'APNI DUKKAN',
      description: 'An e-commerce platform for local shops.',
      technologies: ['React', 'Node', 'Express', 'MongoDB'],
      image: 'path/to/apni-dukan-image.jpg'
    },
    {
      title: 'Woofer',
      description: 'A social media platform for dog lovers.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'path/to/woofer-image.jpg'
    },
    {
      title: '',
      description: 'Description for project 3.',
      technologies: ['Tech1', 'Tech2', 'Tech3'],
      image: 'path/to/project3-image.jpg'
    }
  ];

  return (
    <div className='text-gold bg-black w-full min-h-screen flex flex-col items-center justify-center gap-10 p-10'>
      <div className='text-6xl mb-10'>Projects</div>
      <div className='w-full max-w-6xl'>
        {projects.map((project, index) => {
          const controls = useAnimation()
          const [ref, inView] = useInView({ triggerOnce: false })

          useEffect(() => {
            if (inView) {
              controls.start({ opacity: 1, x: 0, scale: 1 })
            } else {
              controls.start({ opacity: 0, x: -100, scale: 0.8 })
            }
          }, [controls, inView])

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-gray-900 p-5 rounded-lg shadow-lg flex flex-col gap-5 mb-10 ${index % 2 === 0 ? 'self-start' : 'self-end'}`}
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className='h-48 w-full object-cover rounded-lg' />
              <div className='text-2xl font-bold text-gold'>{project.title}</div>
              <div className='text-gold'>{project.description}</div>
              <div className='flex gap-2'>
                {project.technologies.map((technology, techIndex) => (
                  <div key={techIndex} className='bg-gray-800 text-gold px-2 py-1 rounded-lg'>{technology}</div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
