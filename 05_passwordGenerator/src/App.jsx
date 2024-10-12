import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copyStatus, setCopyStatus] = useState(false)

  //useRef hook
  const passwordRef = useRef(null)

  //password generator method 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!#@$%^&*()+=-{}[]|?/<>,;:"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass) 

  }, [length, numberAllowed, charAllowed, setPassword])

  //copy password
  const copyPasswordOnClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    setCopyStatus(true)
    setTimeout(() => setCopyStatus(false), 2000)
  }, [password])

  //useEffect hook
  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg py-2 px-4 my-8 bg-gray-600 text-orange-500'>
        <h1 className='text-white text-center py-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-gray-100' placeholder='Password' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordOnClipboard} className='outline-none bg-green-600 text-white px-3 py-0.5 shrink-0 hover:bg-green-700'>{copyStatus ? "Copied!" : "Copy"}</button>
        </div>
        <div className='flex text-sm gap-x-6'>
          <div className='flex items-center gap-x-2'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer ' onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberAllowed" onChange={() => {setNumberAllowed((prev) => !prev)}}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input type="checkbox" defaultChecked={charAllowed} id="charAllowed" onChange={() => {setCharAllowed((prev) => !prev)}} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
