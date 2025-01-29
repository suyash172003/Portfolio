import React from 'react'
import '../index.css'
import Navbar from './Navbar'
import Landing from './Landing'
import Skills from './Skills'
import Projects from './Projects'
import ContactUS from './ContactUS'
import Education from './Education'
import Eyes from './Eyes'


function Portfolio() {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Landing/>
      <Skills/>
      <Projects/>
      <Eyes/>
      <Education/>
      <ContactUS/>
    </div>
  )
}

export default Portfolio