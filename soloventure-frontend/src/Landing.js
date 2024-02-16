import React from 'react';
import FeaturedDestinations from './FeaturedDestinations'; // Import the FeaturedDestinations component
import './Landing.css';
function Landing() {
  return (
    <div className="landing">
      {/* Background video */}
      <video autoPlay loop muted className="video-bg">
        <source src="/img/coast_-_48600 (1440p).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Header content */}
      <div className="header-content">
        <h1>Welcome to SoloVenture</h1>
        <p>Explore the world and plan your solo adventures.</p>
        <button>Login</button> 
        <button>Signup</button>
        
      </div>

      {/* Featured destinations */}
      <FeaturedDestinations /> {/* Render the FeaturedDestinations component */}
    </div>
  );
}

export default Landing;
