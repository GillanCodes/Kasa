import React, { useState } from 'react'

export default function Slideshow({ pictures }) { //Pass an array of pics

    // set default slide to 0;
    const [slide, setSlide] = useState(0);

    
    const previus = () => {
        // If slide is 0, previus press, display last pics (loop the slide show)
        // If slide is not 0, just do slide - 1 to display the previus image
        setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
    }

    const next = () => {
        // If slide is the array lenght, next press, display first pic (loop the slide show)
        // If slide is not at the end, just do slide + 1 to display the next image
        setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
    }

    return (
        <div className="slideshow">
            {/* Prevuis btn */}
            <span id='prev' onClick={previus}><i class="fa-solid fa-angle-left"></i></span>
            {/* Create all pics elements */}
            {pictures.map((pic, index) => {
                return (
                    // Just display the current index if is equals to slide state
                    <img src={pic} key={index} alt="rental_slide" className={index === slide ? "slide" : "slide is-hidden"} />
                )
            })}
            {/* Next btn */}
            <span id='next' onClick={next}><i class="fa-solid fa-chevron-right"></i></span>
            {/* Little text to show user where he is on how mush pics the rent has */}
            <p id='indicator'>{slide + 1}/{pictures.length}</p>
        </div>
    )
}
