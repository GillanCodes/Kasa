import React, { useState } from 'react'

export default function Dropdown({type, title, data}) { // We get a type, title and data

    // By defaut the dropdown is close
    const [isOpen, setIsOpen] = useState(false);

    // set state to the opposite state
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='dropdown-container'>
            
            {/* Onclick head, we switch state */}
            <div className='dropdown-head' onClick={handleOpen}> 
                <p>{title}</p>
                {/* The "chevron" swith side (up = open | down = close) */}
                {isOpen ? <i class="fa-solid fa-chevron-down"></i> : <i class="fa-solid fa-chevron-up"></i> }
            </div>

                {/* If body is open, display body content */}
                <div className={`dropdown-body is-${isOpen ? "open" : "close"}`}>
                    {/* Type array = a list */}
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

                    {/* Type string just display a paragraph */}
                    {type === "string" && (
                        <>
                            <p>{data}</p>
                        </>
                    )}

                    {/* If no type , just display error */}
                    {type !== "string" && type !== "array" && (
                        <p>Invalid_type_props : Type prop should be ethier "string" or "array"</p>
                    )}
                </div>


            

        </div>
    )
}
