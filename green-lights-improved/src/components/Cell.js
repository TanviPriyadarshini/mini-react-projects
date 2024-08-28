import React from 'react'

const Cell = ({onClick, isDisabled, isActivated}) => {
  return (
    <button 
        className="border border-black h-14 w-14"
        style={{backgroundColor: `${isActivated? "green": "transparent"}`}}
        disabled={isDisabled}
        onClick={onClick}
    />
  )
}

export default Cell