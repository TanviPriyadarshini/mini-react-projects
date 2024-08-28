import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    
  return (
    <div>
    <h1>Home Title</h1>
    <Link to={"/products"}><button className="border border-black cursor-pointer p-2 rounded">View all products</button></Link>
    
    </div>
  )
}

export default Home