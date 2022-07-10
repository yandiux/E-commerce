import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'


const CartInfo = ({productCart}) => {

const dispatch = useDispatch()

const deleteProduct = () => {
const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${productCart.id}`

    axios.delete(URL, getConfig())
    .then(res => {console.log(res.data)
      dispatch(getAllProductsCart())
    })
    .catch(err => console.log(err.data))
}

  return (
    <section className='cart-info'>
      <header className='cart-info__header'>
        <h4 className='cart-info__subtitle'>{productCart.brand}</h4>
        <h3 className='cart-info__title'>{productCart.title}</h3>
      </header>
      <p className='cart-info__quantity'>{productCart.productsInCart.quantity}</p>
      <p className='cart-info__price'>$ {productCart.price}</p>
      <div onClick={deleteProduct} className='cart-info__btn'>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </section>
  )
}

export default CartInfo