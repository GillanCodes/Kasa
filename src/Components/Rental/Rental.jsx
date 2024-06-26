import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../../backend.json";
import Slideshow from './Slideshow';
import Rating from './Rating';
import Dropdown from '../../Modules/Dropdown';

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

                    <div className="dropdowns">
                        <div className='content'>
                            <Dropdown type={"string"} title="Description" data={rent.description} />
                        </div>
                        <div className='content'>
                            <Dropdown type={"array"} title="Équipements" data={rent.equipments} />
                        </div>
                    </div>
                   

                    
                </div>
            )}
        </>
    )
}
