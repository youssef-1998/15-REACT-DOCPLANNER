import React from 'react'
import PlatformCard from './platform-card'


const platform = [
    {
        picture:" https://www.docplanner.com/img/flag.png",
        titre:"Leader in 10 countries",
        text:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
       
    },

    {
        picture:"https://www.docplanner.com/img/visits.png",
        titre:"1.5 million appointments",
        text:"booked last month"
    },
    {
        picture:"https://www.docplanner.com/img/patients.png",
        titre:"30 million unique patients",
        text:"visit us every month"
    },
    {
        picture:"https://www.docplanner.com/img/doctors.png",
        titre:"2 million active doctors",
        text:"trust in our solutions"
    }
    
]



const Platform = () => {
    return (
       

        <div className="platform">
        <div className="platform-left">
            <h1>The world's <br/>biggest healthcare platform</h1>
            <p>We work from 6 offices all over the world, bringing Docplanner <br/> Group to life in almost 20 countries.
            </p>
            <img src="https://www.docplanner.com/img/logo.png"/>
        </div>
        <div className="platform-right">
            <div className="platform-right-top">
            {platform.map((x,index )=> <PlatformCard el={x} index={index}/> )}
               
                
            </div>
           

        </div>
    </div>


    )
}






export default Platform