import React from 'react'
import '../index.css'
import Navbar from './Navbar'
import Landing from './Landing'
import Skills from './Skills'
import Projects from './Projects'
import ContactUS from './ContactUS'
import Education from './Education'
import Eyes from './Eyes'
import About from './About'
import {motion} from 'framer-motion'


function Portfolio() {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Landing/>
      <About/>
      <Education/>
      <Projects/>
      <Eyes/>
      <Skills/>
      <ContactUS/>
    </div>
  )
}

export default Portfolio