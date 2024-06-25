import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../../backend.json";

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
            }
        })
    }, [id]);

    return (
        <>
            {load && (
                <div className='rental'>

                    <div className="slideshow">
                        {rent.pictures.map((pic) => {
                            return (
                                <img src={pic} alt="rental_slide" />
                            )
                        })}
                    </div>
                
                </div>
            )}
        </>
    )
}
