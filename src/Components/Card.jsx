import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({id, title, img}) { // props get an id, title and imgUrl
  return (
    <Link to={`/rental/${id}`} id={id}>
      {/* // We set onClick the location to "rent/id" */}
      <div className='card'>
        {/* Content with image and title */}
        <img src={img} alt={`${title}-${id}`} /> 
        <p>{title}</p>
      </div>
    </Link>
  )
}
