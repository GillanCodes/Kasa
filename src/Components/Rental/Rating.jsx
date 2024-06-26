import React from 'react'

export default function Rating({rating}) {

    const stars = (rate) => {
        //On init le tableau des etoiles
        var stars = [0, 0, 0, 0, 0];
        //On boucle pour rajouter le nombre de 1 (etoile aquise)
        for (let index = 0; index < rate; index++) {
            stars.push(1);
        }
        //On inverse le tout
        stars.reverse()
        //On supprime les zeros en trop
        while(stars.length !== 5)
        {
            stars.pop();
        }
        //on return la table
        return stars;
    }

    return (
        <div className="rating">
            {stars(rating).map((star) => {
                return (
                    <i className={star === 1 ? "fa-solid fa-star is-active" : "fa-solid fa-star is-disable"}></i>
                )
            })}
        </div>
    )
}
