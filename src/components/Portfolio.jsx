import React from 'react'
import '../index.css'
import Navbar from './Navbar'
import Landing from './Landing'
import Skills from './Skills'
import Projects from './Projects'
import ContactUS from './ContactUS'
import Education from './Education'
import About from './About'
import { useRef } from 'react'

function Portfolio() {
  const landingRef = useRef(null)
  const aboutRef = useRef(null)
  const educationRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }


  return (
    <div className='bg-black'>
      <Navbar
        scrollToSection={scrollToSection}
        landingRef={landingRef}
        aboutRef={aboutRef}
        educationRef={educationRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <div ref={landingRef}>
        <Landing scrollToSection={scrollToSection} aboutRef={aboutRef} />
      </div>
      <div ref={aboutRef}><About /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={contactRef}><ContactUS /></div>
    </div>
  )
}

export default Portfolio