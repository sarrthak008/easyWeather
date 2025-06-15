import React, { useState } from 'react'
import "./getcity.css"
import { APP_NAME,APP_DESCRIPTION } from '../../utils/data'

const GetCity = () => {

    const [city,setCityName] = useState()

    const SaveCityLocaly=()=>{
         if(! city){
           return  alert("please type your city")
         }
         localStorage.setItem("city",city)
         window.location.reload()
    }


  return (
    <div className='main-city-container'>
          <h1 className='main-city-heading'>{APP_NAME}</h1>
          <span className='main-city-description'>{APP_DESCRIPTION}</span>
          <div className='city-input-container'>
             <input placeholder='type your city' className='main-city-input' onChange={(e)=>setCityName(e.target.value)}/>
             <button className='main-city-button' onClick={()=>SaveCityLocaly()}><i className="ri-arrow-right-line"></i></button>
          </div>
    </div>
  )
}

export default GetCity