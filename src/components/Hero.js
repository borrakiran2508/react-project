import React from "react";
import { Link } from "react-router-dom";



function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-text">
          <h1>Shop the Latest Trends</h1>
          <p>
            Discover amazing products at unbeatable prices. 
            Upgrade your style with our new collections.
          </p>
         <Link to='/shop'>
         <button className="hero-btn">Shop Now</button>
         </Link> 
        </div>

        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
            alt="shopping"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;