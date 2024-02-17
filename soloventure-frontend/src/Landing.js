import React from 'react';
import FeaturedDestinations from './FeaturedDestinations'; // Import the FeaturedDestinations component
import './Landing.css';

function Landing() {
  const handleLogin = () => {
    // Implement login logic here
    console.log('Login button clicked');
  };

  const handleSignup = () => {
    // Implement signup logic here
    console.log('Signup button clicked');
  };

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
        <div className="button-container">
          <button onClick={handleLogin}>Login</button> 
          <button onClick={handleSignup}>Signup</button>
        </div>
      </div>

      {/* Featured destinations */}
      <FeaturedDestinations /> {/* Render the FeaturedDestinations component */}
    </div>
  );
}

export default Landing;
