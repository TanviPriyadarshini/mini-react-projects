import React, {useEffect, useState} from 'react'
import Cell from './components/Cell'

const App = () => {
  const gridNumber = 3
  const [clickOrder, setClickOrder] = useState([]);
  const [colorStatus, setColorStatus] = useState({});
  
  const handleCellClick = (row, col) => {
    setClickOrder(prevState => ([...prevState, [row,col]]))
    setColorStatus(prevState => ({
      ...prevState,
      [[row, col]]: true
    }))
  }
  
  useEffect(() => {
    let intervalId
    if(clickOrder.length >= (gridNumber*gridNumber -1)){
      intervalId = setInterval(() => {
        if(clickOrder.length <= 0) {
          clearInterval(intervalId) 
          return
        }else {
          let indexPopped = clickOrder.pop()
          setColorStatus(prevState => ({
            ...prevState,
            [indexPopped]: false
          }))
          // console.log(clickOrder.pop())
        }
      }, 300)
      
    }
  },[clickOrder])
  console.log("🚀 ~ App ~ clickOrder:", clickOrder)
  
  return (
    <div className="grid w-[50vw] h-[50vh] gap-3 m-2 border border-black p-2" style={{gridTemplateColumns: `repeat(${gridNumber}, 1fr)`, gridTemplateRows: `repeat(${gridNumber}, 1fr)`}}>
      {[...Array(gridNumber)].map((_, row) => (
        <>
       {[...Array(gridNumber)].map((_, col) => (
         ((row === 1 && col === 1) ? <div></div>: 
         <Cell 
            onClick={() => handleCellClick(row, col)}
            isGreen={colorStatus[`${row},${col}`]}
          />)
        ))}
        </>
      ))}
    </div>
  )
}

export default App