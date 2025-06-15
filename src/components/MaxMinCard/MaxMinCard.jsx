import React from 'react'
import "./maxmin.css"

const MaxMinCard = ({info,title}) => {
  return (
    <div className='maxmin-card'>
         <span className='maxmin-title'>{title}</span>
         <div className='maxmin-info'> {title == "max temp" ? <i className="ri-temp-hot-line"></i> : <i className="ri-temp-cold-line"></i>} {info}</div>
    </div>
  )
}

export default MaxMinCard