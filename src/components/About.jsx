import React from 'react'

function About() {
  const About = "About".split('')
  return (
    <div className='h-screen w-full flex flex-row p-10 mb-10 gap-50'>
        <div className="bg-red-900 h-full w-64 rounded-b-3xl rounded-t-3xl">
            <div className="text-8xl text-black font-bold uppercase flex flex-col justify-center items-center h-full">
                {About.map((char, index) => (<h1 key={index}>{char}</h1>))}
            </div>
        </div>
        <p className='text-white font-light flex items-center justify-center mb-10 md:mb-0' > 
            I am a passionate individual who has keen interest in learning new technologies throughout my journey<br/>
            I had cultivated my skills and interest in making real world projects. I am a quick learner and<br/>
            always ready to take up new challenges. I have a good understanding of Data Structures and Algorithms.
        </p>
    </div>
  )
}

export default About