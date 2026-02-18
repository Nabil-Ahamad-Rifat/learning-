import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [lengthP, setlengthP] = useState(8)
  const [allowNumber, setallowNumber] = useState(false)
  const [allowChracter, setallowChracter] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => 
    {
    let pass = "";
    let str = "abcdefiklmnopqwzxvsQWERTYUUIPOASDFGHJKLZXCVBNM";
    if (allowNumber) str += "12345567890"
    if (allowChracter) str += "%^!@#$%^&*()<>?,[]\';:."
    for (let i = 0; i < Number(lengthP); i++) {
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setpassword(pass);
  },
    [lengthP, allowChracter, allowNumber])

  useEffect(() => {
    passwordGenerator()
  }, [lengthP, allowNumber, allowChracter])

  const copytoclipboard = () => {
    if (passwordRef.current) {
      passwordRef.current.select()
      passwordRef.current.setSelectionRange(0, 5)
      window.navigator.clipboard.writeText(password)
    }
  }
  return (
    <>
      <div className='w-full  mx-auto shadow-md rounded-2xl px-4 my-4 text-orange-800 bg-gray-700'>
        <h1 className='text-3xl text-white text-center mt-10 mb-4 py-7 uppercase'> password generator</h1>
        <div className='w-full max-w-md mx-auto shadow-md  flex  rounded-2xl  my-2 text-gray-800 bg-white'>
          <input type="text"
            ref={passwordRef}
            value={password}
            placeholder='password'
            className='w-full text-xl px-1 outline-0 py-2'
            readOnly
          />
          <button className='text-xl bg-blue-800 px-3 rounded-xl py-0.5 text-white shrink-0 outline-0' onClick={copytoclipboard}> Copy</button>
        </div>
        <div className='flex gap-2 text-sm py-4 items-center justify-center'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={20}
              value={lengthP}
              className='cursor-pointer'
              onChange={(e) => { setlengthP(Number(e.target.value)) }}
            />
            <label className='text-xl text-white capitalize'>length : {lengthP}</label>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <input type="checkbox"
              className='flex items-center size-4'
              checked={allowNumber}
              onChange={() => { setallowNumber((prv) => !prv) }}
            />
            <label htmlFor="" className=' text-white'> Number</label>
          </div>
          <div className='flex items-center gap-2 text-xl'>
            <input type="checkbox"
              className='flex items-center size-4'
              checked={allowChracter}
              onChange={() => { setallowChracter((prv) => !prv) }}
            />
            <label htmlFor="" className=' text-white'>Char </label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
