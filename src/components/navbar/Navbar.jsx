import React from 'react';
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCar } from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navcontainer'>
        
            <span className='logo'> <FontAwesomeIcon icon={faCar} />  CarDekho</span>
            <div className='navItems'>
                <button className='navbutton'>Register</button>
                <button className='navbutton'>Login</button>
                
            </div>
        </div>
      
    </div>
  );
}

export default Navbar;
