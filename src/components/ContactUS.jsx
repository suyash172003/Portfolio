import React from 'react'
import { motion } from 'framer-motion'
import Github from '../assets/Github.png'
import Instagram from '../assets/Instagram.png'
import LinkedIn from '../assets/LinkedIn.png'
import Email from '../assets/Email.png'
import Whatsapp from '../assets/Whatsapp.png'

function ContactUS() {
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/suyash-shukla-16ba9922a/', img: LinkedIn, alt: 'LinkedIn' },
    { href: 'https://www.instagram.com/suyashshukla_/', img: Instagram, alt: 'Instagram' },
    { href: 'https://github.com/suyashshukla_', img: Github, alt: 'Github' },
    { href: 'https://wa.me/1234567890', img: Whatsapp, alt: 'Whatsapp' },
    { href: 'mailto:suyashshukla@example.com', img: Email, alt: 'Email' }
  ]

  return (
    <div className='bg-black min-h-screen w-full flex flex-col items-center justify-center p-10'>
      <h1 className='text-8xl text-teal-400 uppercase font-extrabold mb-10'>Connect</h1>
      <div className='flex flex-wrap items-center justify-center gap-10'>
        {socialLinks.map((link, index) => (
          <motion.button
            key={index}
            onClick={() => window.open(link.href)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='bg-gray-800 p-3 rounded-full shadow-lg'
          >
            <img src={link.img} alt={link.alt} className='w-20 h-20'/>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default ContactUS