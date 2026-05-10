import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="flex justify-center items-center gap-6 py-4">
        <h3 className="text-2xl font-bold py-4 text-center">React Learning</h3>
        <h3 className="cursor-pointer hover:text-blue-400">Home</h3>
        <Link to={"/gallery"} className="cursor-pointer hover:text-blue-400">Gallery</Link>
        <a href="/jokes" className="cursor-pointer hover:text-blue-400">Jokes</a>
        <a href="/password_generator" className="cursor-pointer hover:text-blue-400">Password Generator</a>
      </div>
    </header> 
  )
}

export default Header