import React from 'react'
import "./index.css"

const Popular_card = ({img}) => {
  return (
    <div className='card'>
      <img className='bg-image' src={img} alt=""  loading='lazy'/>
      <img className='fg-image' src={img} alt="" />
    </div>
  )
}

export default Popular_card
