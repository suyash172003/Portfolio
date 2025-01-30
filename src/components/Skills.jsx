import React from 'react'
import {motion} from 'framer-motion'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import ReactLogo from '../assets/React.png'
import SpringBoot from '../assets/SpringBoot.png'
import Jenkins from '../assets/Jenkins.png'
import Git from '../assets/GIT.png'
import GitHub from '../assets/Github.png'
import Docker from '../assets/Docker.png'
import Kubernetes from '../assets/Kubernetes.png'
import Terraform from '../assets/Terraform.png'
import Ansible from '../assets/Ansible.png'
import Java from '../assets/JAVA.png'
import Python from '../assets/Python.png'
import Cpp from '../assets/C++.png'
import '../styles.css'

function Skills() {
  const skills = [
    { name: 'HTML', image: HTML },
    { name: 'CSS', image: CSS },
    { name: 'React', image: ReactLogo },
    { name: 'SpringBoot', image: SpringBoot },
    { name: 'Jenkins', image: Jenkins },
    { name: 'Git', image: Git },
    { name: 'Docker', image: Docker },
    { name: 'Kubernetes', image: Kubernetes },
    { name: 'Terraform', image: Terraform },
    { name: 'Ansible', image: Ansible },
    { name: 'Java', image: Java },
    { name: 'Python', image: Python },
    { name: 'C++', image: Cpp },
  ];

  return (
    <div className= 'bg-red-900 text-white w-full h-50 flex items-center justify-center'>
        
        <div className='overflow-hidden w-full p-10'>
            <motion.div 
                className='flex gap-10 p-10 whitespace-nowrap'
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
                {skills.concat(skills).map((skill, index) => (
                    <div key={index} className='inline-block text-center relative'>
                        <div className='h-24 w-24 bg-black rounded-lg p-2 shadow-lg sparkle'>
                            <img src={skill.image} alt={skill.name} className='w-20 h-20 mx-auto mb-2'/>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default Skills