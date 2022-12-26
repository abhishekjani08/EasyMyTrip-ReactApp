import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel, faPlane, faCar, faTrain, faLocationDot, faCalendarDays, faBed } from "@fortawesome/free-solid-svg-icons"
import "./header.css"
const Header = () => {

    return (
        <div>
            <div className="header">
                <div className="headerContainer">
                    <div className="headerlist">
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faHotel} />
                            <span>Hotels</span>
                        </div>
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faPlane} />
                            <span>Planes</span>
                        </div>
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faCar} />
                            <span>Car Rentals</span>
                        </div>
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faTrain} />
                            <span>Trains</span>
                        </div>
                    </div>
                    <h1 className="headertitle">
                        Ease your trip now!
                    </h1>
                    <p className="headerDesc">
                        With a alot of Discounts and savings upto 30% and more..
                    </p>
                    <button className="signin">
                        SignIn/Register
                    </button>
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faLocationDot} />

                            <input type="text" className='headersearchinput' placeholder='Where do you want to visit?'></input>
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} />

                            <span classname="headersearchtext">Date to Date</span>
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} />
                            <span className='headersearchtext'>2 adults 2 children 1 room</span>
                        </div>
                        <div className="headerBtn">Search</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
