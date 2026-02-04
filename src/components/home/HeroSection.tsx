'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
//import { Marquee } from '@/components/home/Marquee';

export function HeroSection() {
  const scrollToCollection = () => {
    const element = document.getElementById('collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="hero-blob blob-pink" />
        <div className="hero-blob blob-purple" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content container">
        <h2 className="hero-subtitle">The Collection 2026</h2>
        <h1 className="hero-title">
          <span className="text-gradient-liquid">LIQUID</span>
          <span className="text-gradient-speed">SPEED</span>
        </h1>
        <p className="hero-description">
          Discover the pinnacle of automotive engineering. 
          Designed for those who demand excellence.
        </p>
        <div className="hero-buttons">
          <Button size="lg" onClick={scrollToCollection}>
            Explore Collection
          </Button>
          <Button size="lg" variant="outline">
            View Wishlist
          </Button>
        </div>
      </div>
      
      
    </section>
  );
}
