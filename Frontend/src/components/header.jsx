import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="flex items-center px-6 py-4">
        <h3 className="text-2xl font-bold">React Learning</h3>
        <nav className="flex flex-1 justify-center items-center gap-6">
          <Link to="/" className="cursor-pointer hover:text-blue-400">Home</Link>
          <Link to="/gallery" className="cursor-pointer hover:text-blue-400">Gallery</Link>
          <Link to="/jokes" className="cursor-pointer hover:text-blue-400">Jokes</Link>
          <Link to="/password_generator" className="cursor-pointer hover:text-blue-400">Password Generator</Link>
        </nav>
        <Link
          to="/login"
          className="cursor-pointer border border-white rounded px-4 py-1 hover:bg-white hover:text-gray-800 transition-colors"
        >
          Login
        </Link>
      </div>
    </header>
  )
}

export default Header