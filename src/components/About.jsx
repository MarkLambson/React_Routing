import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const {name, comment} = useParams()
    return (
        <div>
            <h1>About Us</h1>
            <h2>Hi, my name is {name}</h2>
            <h3>{comment}</h3>
        </div>
    )
}

export default About