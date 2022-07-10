import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'

const HomeScreen = () => {

  const products = useSelector(state => state.products)

  const [filterProducts, setFilterProducts] = useState()

  console.log(products)

  

  return (
    <div className='home'>
      <InputSearch product={products}
      setFilterProducts={setFilterProducts} />
      <div className='products-container'>
        { 
          filterProducts ? 
          filterProducts?.products.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))
          :
          products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomeScreen