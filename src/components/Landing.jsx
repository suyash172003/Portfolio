import React from 'react'
import image from '../assets/photo.jpg'

function Landing() {
  return (
    <div className='flex flex-row justify-center items-center h-screen gap-30'>
        <div className='flex flex-col gap-5'>
            <div className='text-white text-4xl font-bold'>Hello, I'm John Doe</div>
            <div className='text-white text-2xl font-light'>I'm a web developer</div>
        </div>
        <div className='rounded-full h-64 w-64 overflow-hidden'>
            <img src={image}/>
        </div>
    </div>
  )
}

export default Landing