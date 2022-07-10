import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfoId from './ProductInfoId'
import SimilarProducts from './SimilarProducts'
import SliderImgs from './SliderImgs'
import './style/productScreen.css'

const ProductScreen = () => {

  const [product, setProduct] = useState()
  
  const {id} = useParams()
  
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
    .then(res => setProduct(res.data.data.product))
    .catch(err => console.log(err))
  }, [id])
  

  return (
    <div className='product'>
      <SliderImgs product={product} />
      <ProductInfoId product={product} />
      <SimilarProducts product={product} />
    </div>
  )
}

export default ProductScreen