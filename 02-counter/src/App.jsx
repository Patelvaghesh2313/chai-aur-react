import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(15)
  // let counter = 0
  const incValue = ()=> {
    // counter = counter + 1
    setCounter(counter + 1)
  }
  const decValue = ()=> {
    // counter = counter + 1
    setCounter(counter - 1)
  }
  return (
    <>
     <h1> Chai Aur React</h1>
     <h2>Counter: {counter} </h2>
     <button onClick={incValue}>Increase Value</button><br/>
     <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
