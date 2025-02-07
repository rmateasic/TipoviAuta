import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        Edunova
        </h1>
        <p className='grad'>Osijek</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          Vrijednost brojača je {count}
        </button>
        
      </div>
     
    </>
  )
}

export default App
