import React from 'react'
import {DrivingProperties} from "../../data.jsx"

import './Conversion.css'
const Conversion = () => {
  return (
    <>
    <h3 className='converthead'>Driving Property Inquiries to Conversions</h3>
    <div className='mainbox'>
      {DrivingProperties.map((property)=>{
        return (<article className='box'>
          <img src={property.icon} alt="" />
          <h3>{property.title}</h3>
          <p>{property.body}</p>
        </article>
      )})}
    </div>
    </>
  )
}

export default Conversion