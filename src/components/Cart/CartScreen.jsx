import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCartGlobal } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import CartInfo from './CartInfo'
import './style/cartScreen.css'

const CartScreen = () => {

const dispatch = useDispatch()

  const postPurchase = () => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }

    axios.post(URL, objPurchase, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
      })
      .catch(err => console.log(err.data))
  }

  const cart = useSelector(state => state.cart)


  let totalPriceCart= 0

  if(cart){

    const cb = (acc,cv) =>{
      console.log(cv)
      return acc + (parseFloat(cv.price) * cv.productsInCart.quantity)
    }
      totalPriceCart = cart.reduce(cb, 0)
  }

  return (
    <div className='cart'>
      <h2 className='cart__title'><i class="fa-solid fa-cash-register"></i></h2>
      <div className='cart__container'>
        {
          cart?.map(productCart => (
            <CartInfo
            key={productCart.id}
            productCart={productCart}
            />
            ))
        }
      </div>
      <h2 className='cart__total'>
        <span className='cart__total-label'>Total: $</span>
        <span className='cart__total-number'>{totalPriceCart}</span> 
      </h2>
      <button
        className='cart__btn'
        onClick={postPurchase}
      >Confirm Purchase</button>
    </div>  
  )
}

export default CartScreen