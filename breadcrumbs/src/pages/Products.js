import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
       try{
        let res = await fetch('https://dummyjson.com/products')
        let data = await res.json()
        setProducts(data.products)
       }catch(e){
        console.error(e)
       }
    }
    
    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className="grid grid-cols-3 gap-3">
    {
        products.length > 0 ? 
        products.map((product, index) => {
            return (
                
                <Link to={`/products/${product.id}`}> 
                    <div key={index} className="border border-black p-3 cursor-pointer">
                        <img src={product.images[0]} alt="product"/>
                    <p>{product.title}</p>
                    </div>
                </Link>
            )
        }) : <div>loading ...</div>
    }</div>
  )
}

export default Products