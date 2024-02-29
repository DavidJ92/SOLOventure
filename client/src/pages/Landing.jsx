import React from 'react';
import FeaturedDestinations from '../components/FeaturedDestinations';
import '../style/Landing.css';
import { useState } from 'react';
import { login, register } from '../utils/auth';
import NavBar from '../components/NavBar';



function Landing() {
  return (
    <div className="landing">
      
      {/* Header content */}
      <div className="header-content">
        <div className="header-content-left">
          <img className="logo" src="/img/1.png" alt="SoloVenture logo" />
        </div>
        <p>Explore the world.</p>
        <div>
          <NavBar />
        </div>
      </div>
      {/* Featured destinations */}
      <FeaturedDestinations /> {/* Render the FeaturedDestinations component */}
    </div>
  );
};

export default Landing;
