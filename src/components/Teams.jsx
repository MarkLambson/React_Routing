import React from 'react'
import { useParams } from 'react-router-dom'

const Teams = () => {

    const {city, color} = useParams()

    return (
        <div>
            <h1>Teams</h1>
            <h3 style={{backgroundColor: color}}>Welcome to the {city}</h3>
        </div>
    )
}

export default Teams