import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel, faPlane, faCar, faTrain, faLocationDot, faCalendarDays, faBed } from "@fortawesome/free-solid-svg-icons"
import "./header.css"
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"




const Header = () => {
    const [opendate, setOpendate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        rooms: 1
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

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

                            <span classname="headersearchtext" onClick={() => setOpendate(!opendate)}>
                                {`${format(date[0].startDate, "dd/MM/yyyy")} to 
                            ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                            {opendate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                            />}
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} />
                            <span onClick={() => setOpenOptions(!openOptions)}className='headersearchtext'>{`${(options.adult)} Adults - ${(options.children)} Children - ${(options.rooms)} Rooms`}</span>
                             {openOptions && <div className="options">
                                <div className="optionsitem" >

                                    <span className='optiontext'> Adult </span>
                                    <div className="optioncounter">
                                        <button className='optioncounterbutton' disabled={options.adult <= 1} onClick={() => { handleOption("adult", "d") }}>-</button>
                                        <span className='optioncounterbutton'>{options.adult}</span>
                                        <button className='optioncounterbutton' onClick={() => { handleOption("adult", "i") }}>+</button>
                                    </div>
                                </div>

                                <div className="optionsitem">

                                    <span className='optiontext'> Children </span>
                                    <div className="optioncounter">
                                        <button className='optioncounterbutton' disabled={options.children <= 0} onClick={() => { handleOption("children", "d") }}>-</button>
                                        <span className='optioncounterbutton'>{options.children}</span>
                                        <button className='optioncounterbutton' onClick={() => { handleOption("children", "i") }}>+</button>
                                    </div>

                                </div>

                                <div className="optionsitem">


                                    <span className='optiontext'> Rooms </span>
                                    <div className="optioncounter">
                                        <button className='optioncounterbutton' disabled={options.rooms <= 1} onClick={() => { handleOption("rooms", "d") }}>-</button>
                                        <span className='optioncounterbutton'>{options.rooms}</span>
                                        <button className='optioncounterbutton' onClick={() => { handleOption("rooms", "i") }}>+</button>
                                    </div>

                                </div>
                            </div>
                            }
                        </div>
                        <div className="headerBtn">Search</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
