import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel, faPlane, faCar } from "@fortawesome/free-solid-svg-icons"
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
                            <span>Plane</span>
                        </div>
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faCar} />
                            <span>Car Rentals</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
