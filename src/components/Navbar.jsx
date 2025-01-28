import React from 'react'
import '../index.css'


function Navbar() {

  return (
    <div className='bg-black text-white text-lg font-medium flex justify-center items-center gap-20 px-10 py-10'>
      {["Home","Projects","Education","Connect"].map((item) => (
        <div key={item} className='relative'>
          <button className='relative z-10 bg-white text-black rounded-full px-4 py-2 h-12 w-36 flex items-center justify-center uppercase'>
            {item}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Navbar