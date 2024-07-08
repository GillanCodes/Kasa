import React from 'react'
import Banner from './Banner'
import Gallery from './Gallery'

export default function Home() {
  return (
    <div className='home'>
      {/* Home page, Banner and Gallery module import */}
      <Banner  />
      <Gallery />
    </div>
  )
}
