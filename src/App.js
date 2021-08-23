import React from 'react'
import Navbar from './components/NavMenu/NavMenu'
import ProductCard from './components/ProductCard/ProductCard'
import ProductItems from './components/ProductItems/ProductItems'
import ProductShop from './components/ProductShop/ProductShop'
export default function App() {
  return (
    <div>
      <Navbar />
      <ProductCard />
      <ProductItems />
      <ProductShop />
    </div>
  )
}
