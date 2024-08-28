import React, {useState} from 'react'
import useCustomEffect from './hooks/useCustomEffect'

const App = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  useCustomEffect(() => {
    console.log("Effect triggered", countOne)

    return () => {
      console.log("clean up triggered")
    }
  })

  console.log("rendered")

  const increment = () => setCountOne(countOne+1)
  const decrement = () => setCountOne(countOne-1)

  return (
    <div>
      <div>{countOne}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default App