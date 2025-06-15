import React from 'react'
import "./speed.css"
import WINDIMG from "../../assets/wind.png"

const WindSpeedCard = ({windSpeed}) => {
  return (
    <div className='WindSpeedCard'>
         <span className='windspeed-title'>windspeed</span>
         <div className='windspped-img-container'>
             <img src={WINDIMG}/>
         </div>
         <div className='windspeed-value'><i className="ri-wireless-charging-line"></i>{windSpeed}</div>
    </div>
  )
}

export default WindSpeedCard