import React from 'react'
import './featured.css'
import mumbai from './images/mumbai.jpg'
import chennai from './images/chennai.jpg'
import kolkata from './images/kolkata.jpg'
export const Featured = () => {
  return (
    <div className="featuredheader">
    <h1>Our Trips to the best places in India!<br></br> </h1>
    <div className='featured'>
    
        <div className="featuredItem">
            <img src={mumbai} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Mumbai</h1>
                <h3>Book Now</h3>
            </div>
        </div>

        <div className="featuredItem">
            <img src={chennai} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Chennai</h1>
                <h3>Book Now</h3>
            </div>
        </div>

        <div className="featuredItem">
            <img src={kolkata} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Bangalore</h1>
                <h3>Book Now</h3>
            </div>
        </div>
        </div>
    </div>
  )
}
