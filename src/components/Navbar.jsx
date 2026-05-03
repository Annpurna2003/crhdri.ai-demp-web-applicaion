import React from 'react'

const Navbar = () => {
  return (
     <nav className="flex justify-between items-center p-5 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">Crhdri.ai</h1>
      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>  
        <li>Contact</li>
        <li>Services</li>

      </ul>
      
    </nav>
  )
}

export default Navbar
