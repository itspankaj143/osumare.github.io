import React from 'react'
import './Driving.css'
import image from '../../assets/bro.png'

const RealEstate = () => {
  return (
    <div className='masteryhead'>
      <h2>Driving Property Inquiries to Conversions</h2>
      <p>Streamlined Strategies for Real Estate Success</p>
      <div className='outset'>
        <img src={image} alt="" />
        <div className='inset'>
          <h3>Optimized Path to Property Purchase</h3>
          <p>In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default RealEstate