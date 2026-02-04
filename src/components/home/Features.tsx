"use client";

import React from 'react';
import { Sparkles, Globe, CheckCircle, CreditCard, Star, ArrowRight } from 'lucide-react';

function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        {/* Section Header */}
        <div className="features-header">
          <span className="features-header-subtitle">Why Choose Us</span>
          <h2 className="features-header-title">The Luxe Standard</h2>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {/* Feature 1: AI Concierge (Large Card) */}
          <div className="feature-card-large">
            <div className="feature-card-large-bg" />
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
              alt="AI Technology" 
              className="feature-card-large-img"
            />
            <div className="feature-card-large-content">
              <div className="feature-icon-box">
                <Sparkles className="icon-text-pink" size={24} />
              </div>
              <h3 className="feature-card-large-title">AI-Powered Concierge</h3>
              <p className="feature-card-large-text">
                Experience the future of car buying. Our intelligent assistant analyzes your preferences to curate a personalized selection of the world's finest machines, available 24/7.
              </p>
              <button className="feature-cta-link" onClick={() => console.log('Try AI Concierge')}>
                Try it now <ArrowRight size={16} className="feature-cta-icon" />
              </button>
            </div>
          </div>

          {/* Feature 2: Global Logistics */}
          <div className="feature-card-small">
            <div className="feature-icon-circle icon-circle-pink">
              <Globe className="icon-text-pink" size={24} />
            </div>
            <h3 className="feature-card-small-title">Global Logistics</h3>
            <p className="feature-card-small-text">
              From our showroom to your driveway, anywhere on Earth. We handle customs, insurance, and enclosed transport.
            </p>
          </div>

          {/* Feature 3: Verified Authenticity */}
          <div className="feature-card-small">
            <div className="feature-icon-circle icon-circle-cyan">
              <CheckCircle className="icon-text-cyan" size={24} />
            </div>
            <h3 className="feature-card-small-title">Verified Authenticity</h3>
            <p className="feature-card-small-text">
              Every vehicle undergoes a rigorous 150-point inspection by certified master technicians before listing.
            </p>
          </div>

          {/* Feature 4: Secure Payments */}
          <div className="feature-card-small">
            <div className="feature-icon-circle icon-circle-purple">
              <CreditCard className="icon-text-purple" size={24} />
            </div>
            <h3 className="feature-card-small-title">Secure Transactions</h3>
            <p className="feature-card-small-text">
              We accept traditional wire transfers and major cryptocurrencies, ensuring a seamless and secure acquisition.
            </p>
          </div>

          {/* Feature 5: VIP Access (Large Card with Image) */}
          <div className="feature-card-vip">
            <div className="feature-card-vip-glow" />
            <div className="feature-card-vip-content">
              <div className="feature-icon-box">
                <Star className="icon-text-yellow" size={24} />
              </div>
              <h3 className="feature-card-vip-title">VIP Club Access</h3>
              <p className="feature-card-vip-text">
                Ownership grants you access to exclusive track days, private rallies, and pre-release viewings of upcoming hypercars.
              </p>
            </div>
            <div className="feature-card-vip-image">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
                alt="VIP Track Day" 
                className="feature-card-vip-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;