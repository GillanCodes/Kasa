import React, { useState } from 'react'

export default function Slideshow({ pictures }) {

    const [slide, setSlide] = useState(0);

    const previus = () => {
        setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
    }

    const next = () => {
        setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
    }

    return (
        <div className="slideshow">
            <span id='prev' onClick={previus}><i class="fa-solid fa-angle-left"></i></span>
            {/* <span id='prev' onClick={previus}>{"<"}</span> */}
            {pictures.map((pic, index) => {
                return (
                    <img src={pic} key={index} alt="rental_slide" className={index === slide ? "slide" : "slide is-hidden"} />
                )
            })}
            <span id='next' onClick={next}><i class="fa-solid fa-chevron-right"></i></span>
            <p id='indicator'>{slide + 1}/{pictures.length}</p>
            {/* <span id='next' onClick={next}>{">"}</span> */}
        </div>
    )
}
