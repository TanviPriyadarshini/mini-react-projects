import React, { useState } from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleClick = async () => {
    setIsErr("")
    setIsLoading(true)
    try{
      let response = await fetch("https://www.greatfrontend.com/api/questions/like-button", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: liked ? "like":"unlike"
      })
    })

    if (response.status >= 200 && response.status < 300) {
      setLiked(!liked);
    } else {
      const res = await response.json();
      setIsErr(res.message);
      return;
    }}

    finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center flex-col items-center p-12">
      <button 
        className="px-6 w-auto py-1 border border-black rounded-full flex gap-3 hover:text-red-600 hover:border-red-600"
        onClick={handleClick}
        style={{backgroundColor: `${liked ? "red": "transparent"}`, color: `${liked ? "white": "black"}`}}
      >
        <span className="h-3 w-3  hover:text-red-600 pt-1">
          {isLoading? <AiOutlineLoading3Quarters/> : <FaRegHeart/>}
        </span> 
        Like
      </button>
      <div>
      {isErr && <p>{isErr}</p>}

      </div>
    </div>
  )
}

export default App