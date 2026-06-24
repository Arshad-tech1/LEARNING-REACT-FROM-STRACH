import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      const result = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${response.access_token}` },
      })
      const user = await result.json()

      localStorage.setItem('user', JSON.stringify(user))
      navigate('/')
    },
  })

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Login</h1>
        <button
          type="button"
          onClick={() => loginWithGoogle()}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Login with Google
        </button>
      </div>
    </div>
  )
}

export default Login
