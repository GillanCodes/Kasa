import React from 'react'

export default function NotFound() {
  return (
    <div className='notfound'>
      <div className="container">

        <p className='nf_text'>404</p>
        <p className='message'>Oups! La page que vous demandez n'existe pas.</p>

        <a href="/">Retourner sur la page d’accueil</a>

      </div>
    </div>
  )
}
