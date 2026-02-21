import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/headder/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <div className='bg-green-600 p-4'> tesk</div>
    </>
  )
}

export default App
