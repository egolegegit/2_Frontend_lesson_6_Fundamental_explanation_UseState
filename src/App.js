import React, { useState } from 'react'

import './App.css'

// const factorial = (n) => {
//   if (n === 1) {
//     console.log('calculated ...')
//     return 1
//   }
//   return n * factorial(n - 1)
// }

function App() {
  const [counter, setCounter] = useState({
    value: 1,
    id: 123456,
  })

  const handleIncrement = () => {
    setCounter((prevState) => {
      return { ...prevState, value: prevState.value + 1 }
    })
  }

  const handledecrement = () => {
    setCounter((prevState) => {
      return { ...prevState, value: prevState.value - 1 }
    })
  }

  return (
    <div>
      <p>{counter.value}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handledecrement}>Decrement</button>
      <div>{JSON.stringify(counter)}</div>
    </div>
  )
}

export default App
