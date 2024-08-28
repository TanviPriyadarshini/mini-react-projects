import React, { useEffect, useState } from 'react'

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
  let result = await fetch('https://dummyjson.com/products')
  let data = await result.json()
  setProducts(data.products)
  }

  const handlePrevClick =() => {
    if(page !== 1) {
      setPage(page-1)
    }
  }

  const handleNextClick =() => {
    if(page <= (products.length/10) - 1) {
      setPage(page+1)
    }
  }

  const handlePageNumberClick = (pageNumber) => {
    setPage(pageNumber)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <div style={{ display: 'flex', flexFlow: 'wrap', gap: '3rem'}}>{products.slice(page*10 - 10, page*10 + 1 ).map((product, index) => (
      <div key={index} style={{ width: "10rem", border: 'grey 2px solid'}}>
      <img alt="product" src={product.images[0]} style={{height: "15rem", width: "10rem"}}/>
      <p>{product.title}</p>
      </div>
    ))}</div>
    <div>
      <button disabled={page === 1} onClick={handlePrevClick}>Prev</button>
      {[...Array(products.length/10 ).keys()].map((_, index) => (<button onClick={() => handlePageNumberClick(index+1)} key={index}>{index+1}</button>))}
      <button disabled={page > (products.length/10) - 1} onClick={handleNextClick}>Next</button>
    </div>
    </>
  )
}

export default App