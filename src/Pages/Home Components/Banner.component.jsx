import React from 'react'
import './Banner.scss'
import Farm from '../.././images/farm.png'
import Farmer from '../.././images/farmer-logo.png'
const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='div-1'>
            <h1>Get <span>fresh</span> From the farms</h1>
            <p>EBazaar is an Agro <span>E-Commerce platform</span> for farmers, Where farmers can trade directly with the <span>local customers.</span></p>
            <div>
                <button className='signup-btn'><p>Sign Up Now</p></button>
                <button className='browse-farm-btn'><p>Browse Farms</p></button>
            </div>
            <div className='create-store'>
              <h1 className='create-store-logo'>EBazaar</h1>
              <div className='farmer-logo'>
                <div>
                <img src={Farmer} alt="" />
                </div>    
              </div>
              <div className='border'>

              </div>
              <p>
                Are you a farmer ? wants to get rid of <span className='text'>mandi system</span> and earn more profit ? create your farm now on EBazaar
              </p>
            </div>
        </div>
        <div className='div-2'>
            <img src={Farm} alt="" />
        </div>
    </div>
  )
}

export default Banner