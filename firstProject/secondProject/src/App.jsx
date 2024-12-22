import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

// useRef hook to unable copy to clipboard funcationality
  const passwordRef = useRef(null)

// password generator method 
// useCallback hook to optimize the method call
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*()_+=-{};|/><"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, number, char, setPassword])

// copy to clipboard method 
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select() 
  window.navigator.clipboard.writeText(password)
}, [password])

// useEffect hook to call the method when some changes happens 
  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700 mt-4">
        <h1 className='text-3xl mb-4 text-center'>Password Generator</h1>

        <div className='flex flex-row'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className=' outline-none bg-blue-700 py-0.5 px-3 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 mt-4'>
          <div className='flex itms-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange = {(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prevNumber) => !prevNumber)
              }}
              />
              <label htmlFor="numbers">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                setChar((prevNumber) => !prevNumber)
              }}
              />
              <label htmlFor="numbers">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
