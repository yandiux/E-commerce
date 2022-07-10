import React from 'react'

const ProductsPurchase = ({product}) => {

  console.log(product)

  return (
    <section className='product-purchase'>
      <h4 className='product-purchase__title'>{product.title}</h4>
      <p className='product-purchase__quantity'>{product.productsInCart.quantity}</p>
      <p className='product-purchase__price'>$ {product.price}</p>
    </section>
  )
}

export default ProductsPurchase