import React from 'react'
import "./card.css"

const Card = ({mainInfo="loading..",imgae,title}) => {
  return (
    <div className='card-body'>
        <span className='card-title'>{title}</span>
        <div className='card-image-container'>
             <img src={imgae}/>
        </div>
         <h3>{mainInfo}</h3>
    </div>
  )
}

export default Card