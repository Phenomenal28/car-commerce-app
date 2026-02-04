"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Left Content */}
          <div className="about-content">
            <h2 className="about-title">
              More Than A Dealership. <br />
              A Legacy of <span className="about-title-highlight">Speed.</span>
            </h2>
            <p className="about-description">
              Founded in 2010, LuxeDrive was born from a singular obsession: to connect the world's most passionate drivers with the world's most exceptional engineering. We don't just sell cars; we curate history, performance, and art.
            </p>
            
            {/* Stats Grid */}
            <div className="about-stats-grid">
              <div className="about-stat-item">
                <h4 className="about-stat-number">1,500+</h4>
                <p className="about-stat-label">Exotics Delivered</p>
              </div>
              <div className="about-stat-item">
                <h4 className="about-stat-number">98%</h4>
                <p className="about-stat-label">Client Satisfaction</p>
              </div>
              <div className="about-stat-item">
                <h4 className="about-stat-number">14</h4>
                <p className="about-stat-label">Years of Excellence</p>
              </div>
              <div className="about-stat-item">
                <h4 className="about-stat-number">24/7</h4>
                <p className="about-stat-label">Support Team</p>
              </div>
            </div>
            
            <Button onClick={() => console.log('Read Our Story clicked')}>
              Read Our Story
            </Button>
          </div>

          {/* Right Image */}
          <div className="about-image-wrapper">
            <div className="about-image-gradient" />
            <img 
              src="https://images.unsplash.com/photo-1562519819-016930ada31b?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury car showroom" 
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;