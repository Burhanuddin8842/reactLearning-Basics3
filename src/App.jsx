import React, { useState } from 'react'
import './global.css'
const App = () => {
  let [count, setCount] = useState(0)
  return (
    <>
    <h1 className="text-9xl font-sans text-center font-extrabold text-yellow-300">
      {count}
    </h1>
    <div className="grid grid-cols-3 p-2">
      <div className="col-span-1">
        <button className="w-full p-5 text-3xl font-extrabold rounded-md bg-red-500 hover:bg-red-800 active:scale-95" onClick={()=>setCount(count--)}>-</button>
      </div>
        <div className="col-span-1">
          <button className="w-full p-5 text-3xl font-extrabold rounded-md bg-yellow-500 hover:bg-yellow-800 active:scale-95" onClick={()=>setCount(count=0)}>Reset</button>
        </div>
        <div className="col-span-1">
          <button className="w-full p-5 text-3xl font-extrabold rounded-md bg-green-500 hover:bg-green-800 active:scale-95" onClick={()=>setCount(count++)}>+</button>
        </div>
    </div>
    </>
  )
}

export default App