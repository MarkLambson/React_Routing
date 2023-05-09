import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = (props) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const navigate = useNavigate()

    const sendSurvey = (event) => {
        event.preventDefault();
        // console.log(name, comment)
        navigate(`/about/${name}/${comment}`)
    }

    return (
        <form onSubmit={sendSurvey}>
            <label>Your Name:</label>
            <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
            <br />
            <br />
            <label>Your Comment:</label>
            <textarea onChange={(event) => setComment(event.target.value)} value={comment}></textarea>
            <br />
            <br />
            <input className="btn btn-outline-info" type="submit" value="Submit Survey" />
        </form>
    );
}

export default Contact