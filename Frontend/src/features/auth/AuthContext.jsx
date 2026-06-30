import { createContext, useContext, useEffect, useRef, useState } from 'react'

const AuthContext = createContext(null)

// Session lasts 10 minutes
const SESSION_DURATION = 10 * 60 * 1000

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const logoutTimer = useRef(null)

  const clearTimer = () => {
    if (logoutTimer.current) {
      clearTimeout(logoutTimer.current)
      logoutTimer.current = null
    }
  }
  
  const logout = () => {
    clearTimer()
    localStorage.removeItem('user')
    localStorage.removeItem('sessionExpiry')
    setUser(null)
  }

  // Schedule an automatic logout when the session is set to expire.
  const scheduleLogout = (expiry) => {
    clearTimer()
    const remaining = expiry - Date.now()
    if (remaining <= 0) {
      logout()
      return
    }
    logoutTimer.current = setTimeout(logout, remaining)
  }

  const login = (userData) => {
    const expiry = Date.now() + SESSION_DURATION
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('sessionExpiry', String(expiry))
    setUser(userData)
    scheduleLogout(expiry)
  }

  // On first load, restore a valid session or clear an expired one.
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const storedExpiry = Number(localStorage.getItem('sessionExpiry'))

    if (storedUser && storedExpiry) {
      if (Date.now() < storedExpiry) {
        setUser(JSON.parse(storedUser))
        scheduleLogout(storedExpiry)
      } else {
        logout()
      }
    }

    return clearTimer
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
