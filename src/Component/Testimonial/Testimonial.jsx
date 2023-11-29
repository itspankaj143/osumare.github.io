import React from 'react'
import './Testtimonal.css'
import profile from '../../assets/profile.jpg'
import video from '../../assets/video.jpg'
import quote from '../../assets/quote.jpg'
import btn from '../../assets/btn.png'

const Testimonial = () => {
  return (
   <div className='around'>
   <div className='Testimonial'>
      <h3>What Our Pharma Partners Say</h3>
      <p>Driving Transformantions, One Brand at a Time</p>
    </div>
    <div className='profilecard'>
      <img src={profile} alt="" />
      <div className='profile-content'>
        <div className='profile-head'>
          <div className='profile-icon'>
            <img src={profile} alt="" />
            <h4>Tabish Khan</h4>
          </div>
          <img src={quote} alt="" />
        </div>
        <p>Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regualtions while driving remarkable growth.</p>
      </div>
    </div>
    <img src={btn} alt="" />
   </div>
  )
}

export default Testimonial