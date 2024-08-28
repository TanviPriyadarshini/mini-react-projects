import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Breadcrumbs from './components/Breadcrumbs'
import Home from './pages/Home'
import ProductListing from './pages/ProductListing'
import Products from './pages/Products'

const App = () => {
  return (
  <BrowserRouter>
    <Breadcrumbs/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<ProductListing/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App