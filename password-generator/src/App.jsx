import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [slideLength, setSlideLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pwdString, setPwdString] = useState("")

  // useRef is the hook for reference to value
  const pwdRef = useRef(null)
  // Password Generator
  const passWordGenerator = useCallback(() => {
    let password = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    
    if (numberAllowed) str += '0123456789'
    
    if (charAllowed) str += '!@#$%^&*()'

    for (let i = 0; i < slideLength; i++) {
      let char = Math.floor(Math.random() * str.length)
      password += str.charAt(char)
    }
    setPwdString(password)
  }, [slideLength, numberAllowed, charAllowed, setPwdString])

  // Copy the password
  const copyPassword = useCallback(() => {
    pwdRef.current?.select(pwdString)
    // pwdRef.current?.setSelectionRange(0, 8) // selection of specific number of characters
    navigator.clipboard.writeText(pwdString)
  }, [pwdString])

// Call Funftion using useEffect -> It will call the function when our page loads for first tune if it founds that some changes in its dependencies
useEffect(() => {
  passWordGenerator()
}, [slideLength, numberAllowed, charAllowed, passWordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-300 bg-gray-800'> 
     <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={pwdString} className='outline-none w-full py-1 px-3 text-cyan-700' placeholder='Password' ref={pwdRef} readOnly/>
          <button onClick={copyPassword} className='outline-none bg-gray-600 text-white py-1 px-3 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={20} value={slideLength} onChange={ (e) => setSlideLength(e.target.value) } className='cursor-pointer'/> <label> Length: {slideLength} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} onChange={ () => setNumberAllowed((prev) => !prev) } className='cursor-pointer'/> <label> Numbers </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} onChange={ () => setCharAllowed((prev) => !prev) } className='cursor-pointer'/> <label> Characters </label>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
