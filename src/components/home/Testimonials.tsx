"use client";

import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alexander V.",
    role: "Collector, Dubai",
    text: "The AI concierge found a specific spec 911 GT3 RS I've been hunting for years. The shipping to Dubai was flawless.",
    car: "Porsche 911 GT3 RS"
  },
  {
    name: "Sarah J.",
    role: "Entrepreneur, London",
    text: "LuxeDrive made buying my first supercar less intimidating. The verification process gave me total peace of mind.",
    car: "McLaren 720S"
  },
  {
    name: "James R.",
    role: "Investor, New York",
    text: "Efficient. Professional. The crypto payment option allowed me to close the deal instantly. Highly recommended.",
    car: "Lamborghini Aventador"
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Client Stories</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {/* 5 Star Rating */}
              <div className="testimonial-stars">
                {[...Array(5)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className="testimonial-star-icon"
                    fill="currentColor"
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="testimonial-text">
                "{testimonial.text}"
              </p>
              
              {/* Author Info */}
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-author-info">
                  <p className="testimonial-author-name">{testimonial.name}</p>
                  <p className="testimonial-author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;