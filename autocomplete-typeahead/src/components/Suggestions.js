import React from 'react'

const Suggestions = ({suggestions, query}) => {

    const getHightedText = (text, query) => {
        const parts = text.split(new RegExp(`(${query})`, "gi"))
        return (
            <span>{parts.map((part) => {
               let textToDisplay = part.toLowerCase() === query.toLowerCase() ? <b>{part}</b>: part
               return textToDisplay
            })}</span>
        )
    }

  return (
    <div>
        <ul>
            {suggestions.map((item, index) => {
            return (
                <li 
                key={index}
                >
                   {getHightedText(item, query)}
                </li>
            )}
            )}
        </ul>
    </div>
  )
}

export default Suggestions