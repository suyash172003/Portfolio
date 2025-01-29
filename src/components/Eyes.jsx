import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Eyes() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [eyePosition, setEyePosition] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const updateEyePosition = () => {
      const eyes = document.querySelectorAll('.eye')
      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect()
        const eyeX = rect.left + rect.width / 2
        const eyeY = rect.top + rect.height / 2
        const angle = Math.atan2(cursorPosition.y - eyeY, cursorPosition.x - eyeX)
        const pupilX = Math.cos(angle) * 10
        const pupilY = Math.sin(angle) * 10
        if (eye.classList.contains('left-eye')) {
          setEyePosition((prev) => ({ ...prev, left: { x: pupilX, y: pupilY } }))
        } else {
          setEyePosition((prev) => ({ ...prev, right: { x: pupilX, y: pupilY } }))
        }
      })
    }

    updateEyePosition()
  }, [cursorPosition])

  return (
    <div className='h-screen w-full bg-black flex flex-row justify-center items-center p-10 relative'>
      <div className='eye left-eye border-2 h-30 w-30 rounded-full bg-white flex justify-center items-center m-5'>
        <motion.div
          className='pupil h-10 w-10 bg-black rounded-full'
          animate={{ x: eyePosition.left.x, y: eyePosition.left.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </div>
      <div className='eye right-eye border-2 h-30 w-30 rounded-full bg-white flex justify-center items-center m-5'>
        <motion.div
          className='pupil h-10 w-10 bg-black rounded-full'
          animate={{ x: eyePosition.right.x, y: eyePosition.right.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </div>
    </div>
  )
}

export default Eyes