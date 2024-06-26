import React, { useState } from 'react'

export default function Dropdown({type, title, data}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='dropdown-container'>
            
            <div className='dropdown-head' onClick={handleOpen}>
                <p>{title}</p>
                {isOpen ? <i class="fa-solid fa-chevron-down"></i> : <i class="fa-solid fa-chevron-up"></i> }
            </div>

            {isOpen && (
                <div className="dropdown-body">
                    {type === "array" && (
                        <>
                            <ul>
                                {data.map((item) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                        </>
                    )}

                    {type === "string" && (
                        <>
                            <p>{data}</p>
                        </>
                    )}

                    {type !== "string" && type !== "array" && (
                        <p>Invalid_type_props : Type prop should be ethier "string" or "array"</p>
                    )}
                </div>
            )}

            

        </div>
    )
}
