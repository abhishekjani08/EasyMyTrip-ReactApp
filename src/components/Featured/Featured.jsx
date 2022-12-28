import React from 'react'
import './featured.css'
import mumbai from './images/sedan.jpg'
import chennai from './images/suv.jpg'
import kolkata from './images/luxury.jpg'
export const Featured = () => {
  return (
    <div className="featuredheader">
    <h1>The Most searched cars<br></br> </h1>
    <div className='featured'>
    
        <div className="featuredItem">
            <img src={mumbai} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Sedan Cars</h1>
                <h3>Book Now</h3>
            </div>
        </div>

        <div className="featuredItem">
            <img src={chennai} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>SUV Cars</h1>
                <h3>Book Now</h3>
            </div>
        </div>

        <div className="featuredItem">
            <img src={kolkata} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Luxury Cars</h1>
                <h3>Book Now</h3>
            </div>
        </div>
        </div>
    </div>
  )
}
