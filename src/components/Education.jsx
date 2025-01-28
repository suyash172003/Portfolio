import React from 'react'

function Education() {
  const educationData = [
    {
      title: 'B.Tech in Computer Science and Engineering',
      institution: 'Inderprastha Engineering College',
      year: '2019 - 2023',
      side: 'left'
    },
    {
      title: 'Intermediate',
      institution: 'Lucknow Public School',
      year: '2019 - 2020',
      side: 'right'
    },
    {
      title: 'High School',
      institution: 'Lucknow Public School',
      year: '2017 - 2018',
      side: 'left'
    }
  ];

  return (
    <div className='bg-black min-h-screen w-full flex flex-col items-center p-10'>
      <div className='relative w-full max-w-4xl'>
        <div className='absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600'></div>
        {educationData.map((edu, index) => (
          <div key={index} className={`mb-10 flex ${edu.side === 'left' ? 'justify-start' : 'justify-end'} w-full`}>
            <div className={`relative bg-gray-900 text-white p-6 rounded-lg shadow-lg w-1/2 ${edu.side === 'left' ? 'text-left' : 'text-right'}`}>
              <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900 ${edu.side === 'left' ? '-right-2' : '-left-2'}`}></div>
              <div className='text-2xl font-semibold mb-1'>{edu.title}</div>
              <div className='text-xl mb-1'>{edu.institution}</div>
              <div className='text-lg text-gray-400'>{edu.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education