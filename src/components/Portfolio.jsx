import React from 'react'
import '../index.css'
import Navbar from './Navbar'
import Landing from './Landing'
import Skills from './Skills'


function Portfolio() {
  return (
    <div className='bg-black h-screen'>
      <Navbar/>
      <Landing/>
      <Skills/>
    </div>
  )
}

export default Portfolio