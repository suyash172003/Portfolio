import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Education() {
  const educationData = [
    {
      title: 'B.Tech in Computer Science and Engineering',
      institution: 'Inderprastha Engineering College',
      year: '2020 - 2024',
      side: 'left'
    },
    {
      title: 'Intermediate',
      institution: 'Lucknow Public School',
      year: '2019 - 2020',
      side: 'right'
    },
    {
      title: 'High School',
      institution: 'Lucknow Public School',
      year: '2017 - 2018',
      side: 'left'
    }
  ];

  return (
    <div className='bg-black min-h-screen w-full flex flex-col items-center p-10'>
      <div className='relative w-full max-w-4xl'>
        <motion.div
          className='absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600'
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 1 }}
        ></motion.div>
        {educationData.map((edu, index) => {
          const controls = useAnimation()
          const [ref, inView] = useInView({ triggerOnce: false })

          useEffect(() => {
            if (inView) {
              controls.start({ opacity: 1, x: 0 })
            } else {
              controls.start({ opacity: 0, x: edu.side === 'left' ? -100 : 100 })
            }
          }, [controls, inView, edu.side])

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: edu.side === 'left' ? -100 : 100 }}
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className={`mb-10 flex ${edu.side === 'left' ? 'justify-start' : 'justify-end'} w-full`}
            >
              <div className={`relative text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 ${edu.side === 'left' ? 'text-left' : 'text-right'}`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900 ${edu.side === 'left' ? '-right-2' : '-left-2'}`}
                ></motion.div>
                <div className='text-2xl font-light mb-1'>{edu.title}</div>
                <div className='text-xl mb-1'>{edu.institution}</div>
                <div className='text-lg text-gray-400'>{edu.year}</div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Education