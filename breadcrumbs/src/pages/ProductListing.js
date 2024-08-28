import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ProductListing = () => {
    const [productDetails, setProductDetails] = useState(null);
    const {id} = useParams()
    
    const fetchProduct = async () => {
        try{
            let res = await fetch(`https://dummyjson.com/products/${id}`)
            let data = await res.json()
            setProductDetails(data)
        }catch(e){
            console.log(e)
        }
    }
    
    useEffect(() => {
        fetchProduct()
    },[])
    
  return (
    <div className="flex justify-center items-center">
   
        {productDetails !== null && <div className="border border-black p-3 flex flex-col justify-center items-center">
                    <img className="w-48 h-48" src={productDetails.images[0]} alt="product"/>
                   <p>{productDetails.title}</p>
                </div>}
        
    </div>
  )
}

export default ProductListing