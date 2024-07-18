import React from 'react'
import Banner from '../Components/Banner'
import Gallery from '../Components/Gallery'

export default function Home() {
  return (
    <div className='home'>
      {/* Home page, Banner and Gallery module import */}
      <Banner  />
      <Gallery />
    </div>
  )
}
