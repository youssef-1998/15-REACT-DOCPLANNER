import React from 'react'


const PlacesCard = (props) => {
    return (

        <div className="l1-img1 Shadow">
            <img src={props.el.picture} />
            <div className="white-box">
                <h3>{props.el.titre}</h3>
                <button>{props.el.btn}</button>

            </div>

        </div>



    )
}




export default PlacesCard