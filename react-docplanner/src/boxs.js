import React from 'react'
import BoxCard from './box-card'

const cards = [
    {
        title:"For patients",
        text:"Find a doctor, book a visit and solve any health-related doubt",
        select:["CHOOSE COUNTRY","ITALY","UK"],
        picture:"https://www.docplanner.com/img/screen-marketplace@2x.png"
    },

    {
        title:"For doctors",
        text:"Save time managing visits and cut no-shows by half",
        picture:"https://www.docplanner.com/img/screen-saas@2x.png"
    }
]
const Boxs = () => {
    return (
        <div className="services" >
           {cards.map(x => <BoxCard el={x}/>)}
        </div>
    )
}

export default Boxs