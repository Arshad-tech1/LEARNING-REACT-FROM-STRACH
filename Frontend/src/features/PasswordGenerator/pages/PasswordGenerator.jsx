import React, {useState, useCallback, useEffect , useRef } from 'react'

const PasswordGenerator = () => {
    const [length, setLength] = useState(8)
    const [password, setPassword] = useState('')
    const [numbers, setNumbers] = useState(false)
    const [characters, setCharacters] = useState(false)


    const passwordRef = useRef(null)

    const handleCopy = () => {
    passwordRef.current.select()
    document.execCommand("copy")
    alert("Copied!")
    }

    const generatePassword = useCallback(() => {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if (numbers) { chars += '0123456789' }
        if (characters) { chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=' }
        let password = ''
        for (let i = 1; i <= length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        setPassword(password)

    },[length, numbers, characters ])

    useEffect(() => {
        generatePassword()
    }, [generatePassword])
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      
      <div className="w-[420px] bg-slate-800 rounded-2xl p-6 shadow-lg space-y-6">

        {/* Output + Copy */}
        <div className="flex items-center justify-between bg-slate-700 px-4 py-3 rounded-xl">
          <input  ref={passwordRef} value={password} className="bg-slate-700 tracking-widest text-green-400" readOnly />
          <button onClick={handleCopy} className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-lg text-sm">
            Copy
          </button>
        </div>

        {/* Length */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-slate-300">
            <span>Length</span>
            <span className="text-orange-400">{length}</span>
          </div>
          <input
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            type="range"
            min="4"
            max="24"
            className="w-full accent-orange-400"
          />
        </div>

        {/* Options */}
        <div className="flex items-center justify-center gap-6 text-md text-slate-300">
          <label className="flex items-center gap-2">
            <input 
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(prev => !prev)} 
            className="accent-blue-500" 
            />
            Numbers
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox"
            checked={characters}
            onChange={() => setCharacters(prev => !prev)}  
            className="accent-blue-500" />
            Characters
          </label>
        </div>

      </div>
      
    </div>
  )
}

export default PasswordGenerator