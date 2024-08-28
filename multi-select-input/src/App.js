import React from 'react'
import MultiSelectInput from './components/MultiSelectInput'

const App = () => {
  const staticData = [
    "James",	
    "Mary", 
    "Michael",
    "Patricia", 
    "Robert", 
    "Jennifer", 
    "John",
    "Patrick"
  ]

  const fetchSuggestions = async (input) => {

  }

  return (
    <div className="m-2">
      <h1 className="text-3xl">Multi Select Input</h1>
      <MultiSelectInput
        placeholder={"Enter guest name"}
        onSelect={() => {}}
        onChange={() => {}}
        fetchSuggestions={(input) => fetchSuggestions(input)}
        onBlur={() => {}}
        onFocus={() => {}}
        staticData={staticData}
      />
    </div>
  )
}

export default App