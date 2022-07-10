import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'

const ProductInfoId = ({product}) => {

  const [counter, setCounter] = useState(1)

  const dispatch = useDispatch()

  const addToCart = () => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

    const addproduct = {
      id: product.id,
      quantity: counter
    }

    axios.post(URL, addproduct, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch(err => console.log(err.data))
  }

  const minusOne = () => {
    const minus = counter - 1
    if(minus >= 1){
      setCounter(minus)
    }
  }

  const plusOne = () => setCounter(counter + 1)

  return (
    <article className='product-info'>
      <h2 className='product-info__title'>{product?.title}</h2>
      <p className='product-info__description'>{product?.description}</p>
      <div className='card-product__price-container'>
        <h3 className='card-product__price-label product-info__label'>Price</h3>
        <p className='card-product__price-number product-info__number'>$ {product?.price}</p>
      </div>
      <div className='product-info__quantity-container'>
        <div onClick={minusOne} className='product-info__minus'>-</div>
        <div className='product-info__counter'>{counter}</div>
        <div onClick={plusOne} className='product-info__plus'>+</div>
      </div>
      <button 
        onClick={addToCart} 
        className='product-info__btn'>
        Add to Cart <i className="fa-solid fa-cart-plus"></i>
      </button>
    </article>
  )
}

export default ProductInfoId