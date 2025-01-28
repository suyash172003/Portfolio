import React from 'react'
import Github from '../assets/Github.png'
import Instagram from '../assets/Instagram.png'
import LinkedIn from '../assets/LinkedIn.png'
import Email from '../assets/Email.png'
import Whatsapp from '../assets/Whatsapp.png'

function ContactUS() {
  return (
    <div className='bg-black min-h-screen w-full flex flex-col items-center justify-center p-10'>
      <h1 className='text-8xl text-white uppercase font-extrabold mb-10'>Connect</h1>
      <div className='flex flex-wrap items-center justify-center gap-10'>
        <button onClick={() => window.open('https://www.linkedin.com/in/suyash-shukla-16ba9922a/')} className='bg-blue-500 p-3 rounded-lg'>
          <img src={LinkedIn} alt='LinkedIn' className='w-20 h-20'/>
        </button>
        <button onClick={() => window.open('https://www.instagram.com/suyashshukla_/')} className='bg-blue-500 p-3 rounded-lg'>
          <img src={Instagram} alt='Instagram' className='w-20 h-20'/>   
        </button>
        <button onClick={() => window.open('https://github.com/suyashshukla_')} className='bg-blue-500 p-3 rounded-lg'>
          <img src={Github} alt='Github' className='w-20 h-20'/>
        </button>
        <button onClick={() => window.open('https://wa.me/1234567890')} className='bg-blue-500 p-3 rounded-lg'>
          <img src={Whatsapp} alt='Whatsapp' className='w-20 h-20'/>
        </button>
        <button onClick={() => window.open('mailto:suyashshukla@example.com')} className='bg-blue-500 p-3 rounded-lg'>
          <img src={Email} alt='Email' className='w-20 h-20'/>
        </button>
      </div>
    </div>
  )
}

export default ContactUS