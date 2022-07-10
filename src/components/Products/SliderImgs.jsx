import React, { useState } from 'react'

const classImg = ['', 'second-img', 'third-img']

const SliderImgs = ({product}) => {

  const [indexClass, setIndexClass] = useState(0)
  
  const clickPrev = () => {
    const prevClass = indexClass - 1
    if(prevClass < 0){
      setIndexClass(classImg.length - 1)
    } else {
      setIndexClass(prevClass)
    }
  }

  const clickNext = () => {
    const nextClass = indexClass + 1
    if( nextClass >= classImg.length ) {
      setIndexClass(0)
    } else {
      setIndexClass(nextClass)
    }
  }

  return (
    <div className='slider'>
      <div onClick={clickPrev} className='slider__prev'>&#60;</div>
      <div className={`slider__container ${classImg[indexClass]}`}>
        {
          product?.productImgs.map(imgSrc => (
            <img
              key={imgSrc}
              src={imgSrc} 
              alt=""
              className='slider__imgs'
            />
          ))
        }
      </div>
      <div onClick={clickNext} className='slider__next'>&#62;</div>
      <div className='puntitos-container'>
        <div 
          onClick={() => setIndexClass(0)} 
          className={indexClass === 0 ? 'puntitos puntitos__active' : 'puntitos'}
        ></div>
        <div 
          onClick={() => setIndexClass(1)} 
          className={indexClass === 1 ? 'puntitos puntitos__active' : 'puntitos'}
        ></div>
        <div 
          onClick={() => setIndexClass(2)} 
          className={indexClass === 2 ? 'puntitos puntitos__active' : 'puntitos'}
        ></div>
      </div>
    </div>
  )
}

export default SliderImgs