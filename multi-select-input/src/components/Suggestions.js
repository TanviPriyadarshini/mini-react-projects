import React from 'react'

const Suggestions = ({suggestions, optimisedSuggestions, onSuggestionClick}) => {
console.log("🚀 ~ Suggestions ~ suggestions:", suggestions)

    const onSelect = (item) => {
        onSuggestionClick(item)
    }

  return (
    <div className="border border-black/50 w-[30%] rounded p-4 shadow-md">
        <ul>
            {suggestions.map((item, index) => {
return !optimisedSuggestions.has(item) && (   
            <li
              onClick={() => onSelect(item)}
              value={item}
              className="cursor-pointer"
              key={index}>
                {item}
              </li>)
            } 
            )}
        </ul>
    </div>
  )
}

export default Suggestions