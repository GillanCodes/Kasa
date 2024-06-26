import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../../backend.json";
import Slideshow from './Slideshow';
import Rating from './Rating';

export default function Rental() {

    const { id } = useParams();
    const [rent, setRent] = useState();
    const [load, setLoad] = useState(false);


    useEffect(() => {
        data.map((rent) => {
            if (rent.id === id)
            {
                setRent(rent)
                setLoad(true)
                return 0;
            }
            return 0;
        })
    }, [id]);

    const rating = (rate) => {
        //On init le tableau des etoiles
        var stars = [0, 0, 0, 0, 0];
        //On boucle pour rajouter le nombre de 1 (etoile aquise)
        for (let index = 0; index < rate; index++) {
            stars.push(1);
        }
        //On inverse le tout
        stars.reverse()
        //On supprime les zeros en trop
        while(stars.length != 5)
        {
            stars.pop();
        }
        //on return la table
        return stars;
    }

    return (
        <>
            {load && (
                <div className='rental'>

                   <Slideshow pictures={rent.pictures} />

                   <div className="infos-container">
                        <div className='infos'>
                            <div className='rent-info'>
                                <h2 className='rent-title'>{rent.title}</h2>
                                <h3 className='rent-location'>{rent.location}</h3>
                            </div>
                            <div className="rent-tags">
                                {rent.tags.map((tag) => {
                                    return (
                                        <div className="tag">
                                            <p>{tag}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="infos">
                            <div className="host">
                                <p className='host-name'>{rent.host.name}</p>
                                <img className='host-pic' src={rent.host.picture} alt="Host" />
                            </div>
                            <Rating rating={rent.rating} />
                        </div>
                   </div>
                   
                   
                
                </div>
            )}
        </>
    )
}
