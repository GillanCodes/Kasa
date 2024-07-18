import React from 'react'

export default function Rating({rating}) {

    const stars = (rate) => {
        //We init a star array
        var stars = [0, 0, 0, 0, 0];
        //We loop to add 1 (each star)
        for (let index = 0; index < rate; index++) {
            stars.push(1);
        }
        //We reverse the array
        stars.reverse()
        //We delete the exess numbers
        while(stars.length !== 5)
        {
            stars.pop();
        }
        //return the array with 5 stars
        return stars;
    }

    return (
        <div className="rating">
            {stars(rating).map((star, key) => {
                return (
                    // Display each stars, if aquire "is-active" to get a color, else just display "is-disable" color gray
                    <i className={star === 1 ? "fa-solid fa-star is-active" : "fa-solid fa-star is-disable"} key={key}></i>
                )
            })}
        </div>
    )
}
