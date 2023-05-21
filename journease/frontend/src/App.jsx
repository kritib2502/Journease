import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const api_url = import.meta.env.VITE_API_URL;

  return (
    <>
     
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <p>{api_url}</p>
      </div>
     
    </>
  )
}

export default App
