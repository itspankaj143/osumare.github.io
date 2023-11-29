import React from 'react'
import './Navigate.css'
import image from '../../assets/Frame.png'
import image1 from '../../assets/Navigate/bard-fill.png'
import image2 from '../../assets/Navigate/flashlight-fill.png'
import image3 from '../../assets/Navigate/shield-check-fill.png'
import image4 from '../../assets/Navigate/phone-find-fill.png'

const Navigate = () => {
  return (
    <>
      <div className='navheading'>
      <h3>Navigating Real Estate's Digital Landscape</h3>
        <p>Insights for Real Estate Marketing Advantage</p>
      </div>
      <div className='main'>
        <div className='labelbox'>
           <div className='labels'>
          <div className='wrap'>
          <img src={image1} alt="" />

          </div>
            <div>
              <h4>Market Trends Analysis</h4>
              <p>Predictive insights to guide real estate strategies.</p>
            </div>
        </div>
        <div className='labels'>
        <div className='wrap'>
          <img src={image2} alt="" />
          </div>
          <div>
            <h4>Targeted Buyer Persona</h4>
            <p>Understand and connect with your ideal property buyers.</p>
          </div>
        </div>
        <div className='labels'>
        <div className='wrap'>
          <img src={image3} alt="" />
          </div>
          <div>
            <h4>Competitor Insights</h4>
            <p>Stand out in the property market with informed strategies.</p>
          </div>
        </div>
        <div className='labels'>
        <div className='wrap'>
        <img src={image4} alt="" />
          
        </div>
          <div>
            <h4>Visual Content Appeal</h4>
            <p>Captivate buyers with appealing visuals and immersive experiences.</p>
          </div>
        </div>
        </div>
        <img src={image} alt="" />
      </div>
    </>
  )
}

export default Navigate