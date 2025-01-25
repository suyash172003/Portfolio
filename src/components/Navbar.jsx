import React from 'react'
import '../index.css'
function Navbar() {
  return (
    <div className='text-white text-sm font-light flex flex-right gap-10 px-4 py-2'>
        {["Home", "About", "Projects", "Contact"].map((item) => (<div key={item}>{item}</div>))}
    </div>
  )
}

export default Navbar