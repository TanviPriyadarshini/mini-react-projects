import React, { useState, useEffect, useRef } from 'react'

const App = () => {
  const [value, setValue] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);
  let interval = useRef()

  const handleProgressIncrement = () => {
    let intervalId = setInterval(() => {
        setValue(prevState => prevState + 1)
        }, 100)
      return intervalId
    }
    
  useEffect(() => {
    if(value> 100) {
      setProgressPercentage(100)
      clearInterval(interval.current)
      return
    }
    if(value<0){
      setProgressPercentage(0)
      clearInterval(interval.current)
      return
    }
    
    setProgressPercentage(value)
  },[value])

  useEffect(() => {
    interval.current = handleProgressIncrement()
  }, [])

  console.log("here", progressPercentage/100)
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-semibold text-lg">Progress Bar </p>
      <div className="h-6 w-[60%] bg-slate-300 rounded-3xl flex justify-center overflow-hidden flex-row relative">
      
        <div className="h-full bg-[#5ac357] absolute left-0" style={{transform: `scaleX(${progressPercentage})` , transformOrigin: "left", minWidth: "1%"}}/>
        <span className="font-medium text-sm relative z-99" style={{color: `${progressPercentage > 49 ? "white" : "black"}`}}>{progressPercentage}%</span> 
     
      </div>
    </div>
  )
}

export default App