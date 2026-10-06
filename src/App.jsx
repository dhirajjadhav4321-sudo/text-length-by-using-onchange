import React, { useState } from 'react'

const App = () => {
  const[text,settext]=useState("")
  return (
    <div>
      {text.length}
      <input type="text" onChange={(e)=>settext( e.target.value)}></input>
    </div>
  )
}

export default App