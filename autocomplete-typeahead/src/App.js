import React from 'react'
import Autocomplete from './components/Autocomplete';

const App = () => {
  
  const staticData = [
    // "apple",
    // "banana",
    // "berrl",
    // "orange",
    // "grape",
    // "mango",
    // "melon",
    // "berry",
    // "peach",
    // "cherry",
    // "plum",
  ];

  const fetchSuggestions = async (query) => {
    let res = await fetch(`https://dummyjson.com/recipes/search?q=${query}`)
    let data = await res.json()
    return data.recipes
  }

  return (
    <div className="m-4">
      <h1 className="text-xl">
        Autocomplete / Typeahead
      </h1>
      <Autocomplete
        placeholder={"Enter recipes"}
        onChange={() => {}}
        onBlur={() => {}}
        onSelect={() => {}}
        fetchSuggestions={(query) => fetchSuggestions(query)}
        staticData={staticData}
        resultKey={"name"}
      />
    </div>
  )
}

export default App