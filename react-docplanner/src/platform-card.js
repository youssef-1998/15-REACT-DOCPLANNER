import React from 'react'
import './App.css'


const PlatformCard = (props) => {
    return (

        <div className={`flag ${props.index===0 ? "move" : "mini-card"}`}>
            <img src={props.el.picture} />
            <h3>{props.el.titre}</h3>
            <p>{props.el.text}</p>

        </div>



    )
}



export default PlatformCard