import React, { useEffect, useState } from 'react'
import "./home.css"
import SUN1 from "../../assets/sun1.png"
import CIYT_IMG from "../../assets/city.jpeg"
import axios from 'axios'
const  API_ID = import.meta.env.VITE_API_ID
import Card from '../../components/InfoCard/Card'
import INFO1 from  "../../assets/info1.png"
import WindSpeedCard from '../../components/WindspeedCard/WindSpeedCard'
import MaxMinCard from '../../components/MaxMinCard/MaxMinCard'
import GetCity from '../GetCity/GetCity'


const Home = () => {

    const[cityName,setCityName] = useState()
    const [weatherData,setWeatherData] = useState()
    const [showGetcity,setShowGetcity] = useState(true)




    const loadWeather = async()=>{
          try {
              const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_ID}&units=metric`)
              setWeatherData(result.data)
          } catch (error) {
            console.log(error)
          }
    }



    const loadCityFromLocally =()=>{
        let city =  localStorage.getItem("city")
          if(city){
              setCityName(city)
              loadWeather()
          }else{
             window.location.href="/"
          }
  
    }

    useEffect(()=>{
        loadCityFromLocally()
    },[])

    useEffect(()=>{
      loadWeather()
    },[cityName])

  return (
    <>
    <div className='home-container'>
         <div className='left-container'>
            <div className='input-container'>
                 <input placeholder='Search for place...' className='city-input' value={cityName} onChange={(e)=>{setCityName(e.target.value)}}/>
                 <span onClick={()=>loadWeather()}><i className ="ri-search-2-line search-icon"></i></span>
            </div>
            <div className='left-image-container'>
                  <img src={SUN1}></img>
            </div>
            <div className='left-temp-container'>
                <div>{weatherData?.main?.temp} <i className="ri-celsius-line"></i></div>
            </div>

            <div className='left-city-img-container'>
               <img src={CIYT_IMG}></img>
               <span className='left-city-name'>{weatherData?.name}</span>
            </div>
         </div>

         <div className='right-container'>
            <div className='right-container-nav'>
                <div className='day'>today</div>
                <div><i className="ri-user-fill"></i></div>
            </div>
              
            <div className='info-card-container'>
                 <Card  title="longitude" mainInfo={weatherData?.coord?.lon + " lon"} imgae={INFO1}/> 
                 <Card  title="latitude" mainInfo={weatherData?.coord?.lat + " lat"} imgae={INFO1}/> 
                 <Card  title="humidity" mainInfo={weatherData?.main?.humidity + " %"} imgae={INFO1}/> 
                 <Card  title="pressure" mainInfo={weatherData?.main?.pressure + " hpa"} imgae={INFO1}/> 
            </div>
            <div className='today-text'>
               <span>todays heighlight's</span>
            </div>
           <div className='main-info-container'>
              <WindSpeedCard windSpeed={weatherData?.wind?.speed}/>
              <div className='max-min-temp-container'>
                      <MaxMinCard info={weatherData?.main.temp_max} title={"max temp"}/>
                      <MaxMinCard info={weatherData?.main.temp_min} title={"min temp"}/>
              </div>
           </div>
         </div>
    </div>
    </>
  )
}

export default Home