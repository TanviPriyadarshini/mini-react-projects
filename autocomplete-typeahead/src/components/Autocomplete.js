import React, {useEffect, useState} from 'react'
import Suggestions from './Suggestions';

const Autocomplete = ({placeholder, 
onChange,
onBlur,
onSelect,
fetchSuggestions,
staticData,
resultKey
}) => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const getSuggestions = async (query) => {
        setLoading(true)
        let result;
        if(staticData.length > 1) {
           result = staticData.filter(item => item.toLowerCase().includes(query.toLowerCase()))
        } else if(fetchSuggestions) {
            let fetchedQuery = await fetchSuggestions(query)
            result = fetchedQuery.map((recipe) => recipe[resultKey])
        }

        setSuggestions(result)
        setLoading(false)
    }

    useEffect(() => {
        if(input.length > 1) {
            getSuggestions(input)
        }else {
            setSuggestions([])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input])

  return (
    <div>
        <input
            className="border border-black/50 p-2 rounded w-[21rem]"
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
        />
        {loading ? <div>loading ...</div>:<Suggestions suggestions={suggestions} query={input}/>}
    </div>
  )
}

export default Autocomplete