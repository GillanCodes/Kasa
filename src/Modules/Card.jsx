import React from 'react'

export default function Card({id, title, img}) { // props get an id, title and imgUrl
  return (
    // We set onClick the location to "rent/id"
    <div className='card' id={id} onClick={() => window.location = `/rental/${id}`}>
      {/* Content with image and title */}
      <img src={img} alt={`${title}-${id}`} /> 
      <p>{title}</p>
    </div>
  )
}
