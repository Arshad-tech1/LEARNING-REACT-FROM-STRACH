import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../features/auth/AuthContext'

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  // Close the dropdown when clicking outside of it.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    setOpen(false)
    navigate('/login')
  }

  return (
    <header className="bg-gray-800 text-white">
      <div className="flex items-center px-6 py-4">
        <h3 className="text-2xl font-bold">React Learning</h3>
        <nav className="flex flex-1 justify-center items-center gap-6">
          <Link to="/home" className="cursor-pointer hover:text-blue-400">Home</Link>
          <Link to="/gallery" className="cursor-pointer hover:text-blue-400">Gallery</Link>
          <Link to="/jokes" className="cursor-pointer hover:text-blue-400">Jokes</Link>
          <Link to="/password_generator" className="cursor-pointer hover:text-blue-400">Password Generator</Link>
        </nav>

        {isAuthenticated ? (
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-400"
            >
              {user?.picture && (
                <img
                  src={user.picture}
                  alt={user?.name || 'User'}
                  className="w-8 h-8 rounded-full"
                  referrerPolicy="no-referrer"
                />
              )}
              <span className="font-medium">{user?.name || user?.email}</span>
              <svg
                className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium truncate">{user?.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="cursor-pointer border border-white rounded px-4 py-1 hover:bg-white hover:text-gray-800 transition-colors"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
