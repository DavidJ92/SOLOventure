import React from 'react';

const FeaturedDestinations = () => {
  return (
    <section className="featured-destinations">
      <h2>Featured Destinations</h2>
      <div className="destination-grid">
        {/* Render featured destination cards */}
        <div className="destination-card">Destination 1</div>
        <div className="destination-card">Destination 2</div>
        <div className="destination-card">Destination 3</div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;
