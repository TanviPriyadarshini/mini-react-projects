import React from 'react'

const Pill = ({selectedOption, onPillClick}) => {
  return (
    <span 
    className="rounded-full px-2 py-1 bg-blue-600 text-white w-[12rem] hover:cursor-pointer mx-1"
    onClick={() => onPillClick(selectedOption)}
    >
      {selectedOption}
    </span>
  )
}

export default Pill