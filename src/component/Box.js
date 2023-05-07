import React from 'react'
import { useState } from 'react'

const Box = () => {
  const [counter, setCounter] = useState(0);
  function onClick(){
    setCounter(counter + 1);
  }
  return (
    <div>
        <div>
          <h1>count : {counter}</h1>
          <button onClick={onClick}>클릭</button>
        </div>
    </div>
  )
}

export default Box