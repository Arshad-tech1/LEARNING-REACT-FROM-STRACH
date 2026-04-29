import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="flex justify-center items-center gap-6 py-4">
        <h3 className="text-2xl font-bold py-4 text-center">React Learning</h3>
        <h3 className="cursor-pointer hover:text-blue-400">Home</h3>
        <h3 className="cursor-pointer hover:text-blue-400">About Us</h3>
        <h3 className="cursor-pointer hover:text-blue-400">Contact</h3>
        <h3 className="cursor-pointer hover:text-blue-400">Login</h3>
      </div>
    </header> 
  )
}

export default Header