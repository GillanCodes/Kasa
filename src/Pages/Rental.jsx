import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../backend.json";
import Slideshow from '../Components/Slideshow';
import Rating from '../Components/Rating';
import Dropdown from '../Components/Dropdown';

export default function Rental() {

    // Get id in url
    const { id } = useParams();
    //Init current rent
    const [rent, setRent] = useState();
    // is the rent load ?
    const [load, setLoad] = useState(false);


    useEffect(() => {
        // loop the rents
        data.map((rent) => {
            // IF rent is === to id (url)
            if (rent.id === id)
            {
                // store rent
                setRent(rent)
                // Set page as loaded
                setLoad(true)
                // map must return value
                return 0;
            }
            // map must return value
            return 0;
        })
    }, [id]); // If id change the useEffect is refresh

    

    return (
        <>
            {/* Page display only if load is true */}
            {load && (
                <div className='rental'>

                    {/* Slideshow of all the rent pics */}
                    <Slideshow pictures={rent.pictures} />

                    {/* Informations such as host name, stars, location and tags */}
                    <div className="infos-container">
                        <div className='infos'>
                            <div className='rent-info'>
                                <h2 className='rent-title'>{rent.title}</h2>
                                <h3 className='rent-location'>{rent.location}</h3>
                            </div>
                            <div className="rent-tags">
                                {/* Loop tag to display all of them */}
                                {rent.tags.map((tag, key) => {
                                    return (
                                         <div className="tag" key={key}>
                                            <p>{tag}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                            
                        {/* Host infos */}
                        <div className="infos">
                            <div className="host">
                                <p className='host-name'>{rent.host.name}</p>
                                <img className='host-pic' src={rent.host.picture} alt="Host" />
                            </div>
                            {/* Display stars */}
                            <Rating rating={rent.rating} />
                        </div>
                    </div>                   

                    {/* Dropdown with description and equipments */}
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
