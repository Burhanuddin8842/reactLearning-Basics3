import React, { useState } from 'react'
import './global.css'
const App = () => {
  let [count, setCount] = useState(0)
  return (
    <>
    <h1 className="text-9xl font-mono font-extrabold">
      {count}
    </h1>
    <div className="grid">
      
    </div>
    </>
  )
}

export default App