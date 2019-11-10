import React from 'react'

const BoxCard = (props) => {
    return (
        <div className={`box ${props.el.select ? "verte" : "bleu"}`}>
            <p>{props.el.title}</p>
            <h3>{props.el.text}</h3>
            {props.el.select ? <select id="monselect">
                {props.el.select.map((option,  i) => <option value={`valeur ${i+1}`}>{option}</option>)}
                
            </select> : null}
            <img src={props.el.picture} width="300px" />

        </div>


    )
}

export default BoxCard