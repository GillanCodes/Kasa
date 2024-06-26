import React, { useState } from 'react'

export default function Slideshow({ pictures }) {

    const [slide, setSlide] = useState(0);

    return (
        <div className="slideshow">
            {pictures.map((pic, index) => {
                return (
                    <img src={pic} key={index} alt="rental_slide" className={index === slide ? "slide" : "slide is-hidden"} />
                )
            })}
        </div>
    )
}
