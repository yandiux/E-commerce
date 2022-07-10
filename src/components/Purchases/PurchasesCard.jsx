import React from 'react'
import ProductsPurchase from './ProductsPurchase'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const PurchasesCard = ({purchase}) => {

  const dateData = new Date(purchase.updatedAt)

  const datePurchase = `${months[dateData.getMonth()]} ${dateData.getDate()}, ${dateData.getFullYear()}`

  return (
    <article className='purchase-card'>
      <h3 className='purchase-card__title'>{datePurchase}</h3>
      <div className='purchase-card__container'>
        {
          purchase.cart.products.map(product => (
            <ProductsPurchase 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </article>
  )
}

export default PurchasesCard