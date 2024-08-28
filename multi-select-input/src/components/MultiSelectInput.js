import React, {useEffect, useState} from 'react'
import Pill from './Pill';
import Suggestions from './Suggestions';

const MultiSelectInput = ({
    placeholder,
    onSelect,
    onChange,
    fetchSuggestions,
    onBlur,
    onFocus,
    staticData
}) => {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [optimisedSuggestions, setOptimisedSuggestions] = useState(new Set());
    
    const handleChange = (e) => {
        setInput(e.target.value)
        // onChange()
    }

    const onSuggestionClick = (option) => {
        setSelectedOptions(prev => [...prev, option])
        setOptimisedSuggestions(new Set([...optimisedSuggestions, option]))
        setInput("")
    }

    const getSuggestions = async (query) => {
        let results
        if(staticData.length > 1) {
            results = staticData.filter(item => item.toLowerCase().includes(query.toLowerCase()))
        } else if(fetchSuggestions) {
            results = await fetchSuggestions(query)
        }

        setSuggestions(results)
    }

    const onPillClick = (item) => {
        let updatedSuggestionList = selectedOptions.filter(opt => opt.toLowerCase() !== item.toLowerCase())
        setSelectedOptions(updatedSuggestionList)
    }

    useEffect(() => {
        if(input.length>1) {
            getSuggestions(input)
        }else { 
            setSuggestions([])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input])

  return (
      <div>
        <div className="border border-black/20 p-2 my-4 rounded">
            {selectedOptions.map((item, index) => {
                return (
                    <Pill key={index} onPillClick={() => onPillClick(item)} selectedOption={item}/>
                )
            })}
                <input
                    className="focus:outline-none"
                    placeholder={placeholder}
                    onChange={(e) => handleChange(e)}
                    value={input}
                />
                    {/* {selectedOptions.length>0 && (selectedOptions.map((item, index) => (<Pill key={index} selectedOption={item}/>)))} */}
                
        
        </div>
            {suggestions.length > 0 && <Suggestions suggestions={suggestions} optimisedSuggestions={optimisedSuggestions} onSuggestionClick={(option) => onSuggestionClick(option)}/>}
      </div>
  )
}

export default MultiSelectInput