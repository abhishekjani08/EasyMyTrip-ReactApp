import React from 'react';
import { Featured } from '../../components/Featured/Featured.jsx';
import Header from '../../components/Header/Header.jsx';
import Navbar from '../../components/navbar/Navbar.jsx';
import './home.css'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
      </div>
    </div>
  );
}

export default Home;
