import React from 'react'

export default function Card({id, title, img}) {
  return (
    <div className='card' id={id}>
      <img src={img} alt={`${title}-${id}`} />
      <p>{title}</p>
    </div>
  )
}
