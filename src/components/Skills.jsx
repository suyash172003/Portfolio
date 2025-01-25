import React from 'react'
import {motion} from 'framer-motion'

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Docker","Kubernetes", "Azure CLI", "AWS CLI", "GCP CLI", "Terraform", "Ansible", "Jenkins", "Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Confluence", "Slack", "Docker", "Kubernetes", "Azure CLI", "AWS CLI", "GCP CLI", "Terraform", "Ansible", "Jenkins", "Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Confluence", "Slack"];

  return (
    <div className='bg-white text-black w-full h-screen flex items-center justify-center'>
        <div className='overflow-hidden w-full flex flex-row gap-(-100%)'>
            <motion.div 
                className='flex gap-10 p-10 whitespace-nowrap'
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
                {skills.map((item, index) => (
                    <div key={index} className='inline-block'>
                        {item}
                    </div>
                ))}
            </motion.div>
            <motion.div 
                className='flex gap-10 p-10 whitespace-nowrap'
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
                {skills.map((item, index) => (
                    <div key={index} className='inline-block'>
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default Skills