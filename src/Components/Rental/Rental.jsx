import React from 'react'
import { useParams } from 'react-router-dom'

export default function Rental() {

    let { id } = useParams();

    return (
        <div>Rental - {id}</div>
    )
}
