import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../../backend.json";
import Slideshow from './Slideshow';

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

    return (
        <>
            {load && (
                <div className='rental'>

                   <Slideshow pictures={rent.pictures} /> 
                
                </div>
            )}
        </>
    )
}
