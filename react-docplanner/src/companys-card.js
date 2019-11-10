import React from 'react'
import './App.css'



const CompanyCard = (props) => {
    return (


        <li className="star">
            <a href={props.el.link} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width={props.el.largeur} height="32" viewBox={props.el.vue}>
                    <path
                        d={props.el.D} />
                </svg>
            </a>
        </li>




    )
}


export default CompanyCard