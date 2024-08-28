import React, { useEffect, useState } from 'react'
import Cell from './components/Cell'

const App = () => {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]
  const [clickOrder, setClickOrder] = useState([]);
  const [isDeavtivating, setIsDeavtivating ] = useState(false);

  const deactivateCells = () => {
    setIsDeavtivating(true)
    let timerId = setInterval(() => {
      setClickOrder(prevState => {
        let copyOrder = prevState.slice()
        copyOrder.pop()

        if(copyOrder.length===0) {
          setIsDeavtivating(false)
          clearInterval(timerId)
        }

        return copyOrder
      })
    },300)
  }

  const activateCells = (index) => {
    setClickOrder(prevState => [
      ...prevState,
      index
    ])
  }

  useEffect(() => {
    if(clickOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells()
    }
  }, [clickOrder])

  return (
    <div className="flex justify-center">
      <div className="grid border border-black p-2 gap-3 w-auto h-auto" style={{gridTemplateColumns: `repeat(${config[0].length}, 1fr)`}}>
        {config.flat(1).map((item, index) => (
          item ? 
          <Cell
            isDisabled={isDeavtivating || clickOrder.includes(index)}
            onClick={() => activateCells(index)}
            key={index}
            isActivated={clickOrder.includes(index)}
          /> 
          : 
          <span key={index}></span>
        ))}
      </div>
    </div>
  )
}

export default App