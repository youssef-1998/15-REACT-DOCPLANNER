import React from 'react'
import PlacesCard from './places-card'

const lieux = [
    {
        picture: "https://www.docplanner.com/images/warsaw.png ",
        titre: "Warsaw",
        btn: "See Openings"

    },

    {
        picture: "https://www.docplanner.com/images/barcelona.png",
        titre: "Barchelona",
        btn: "See Openings"
    },
    {
        picture: "https://www.docplanner.com/images/istanbul.png",
        titre: "Istanbul",
        btn: "See Openings"
    },
    {
        picture: "https://www.docplanner.com/images/rome.png",
        titre: "Rome",
        btn: "See Openings"
    },
    {
        picture: "https://www.docplanner.com/images/mexico-city.png",
        titre: "Mexico City",
        btn: "See Openings"
    },
    {
        picture: "https://www.docplanner.com/images/curitiba.png",
        titre: "Curitiba",
        btn: "See Openings"
    }

]



const Places = () => {
    return (
        <div className="places">
            <div className="ligne-1">
                {lieux.map(x => <PlacesCard el={x} /> )}
            </div>
        </div>


    )
}



export default Places