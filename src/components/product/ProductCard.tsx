'use client';

import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Car } from '@/types';

interface ProductCardProps {
  car: Car;
  className?: string; // Optional className prop
  style?: React.CSSProperties; // Optional style prop
}

export function ProductCard({ car, className = '', style }: ProductCardProps) {
  return (
    <div className={`car-card group ${className}`} style={style}>
      {/* Image Container */}
      <div className="car-card-image-container">
        <div className="car-card-overlay" />
        <div className="relative aspect-[4/3]">
            {/* Using img for external URLs if Next.js Image is not configured for domains */}
            <img 
            src={car.image} 
            alt={`${car.brand} ${car.model}`}
            className="car-image"
            />
        </div>
        
        {/* Hover Actions */}
        <div className="car-card-actions">
           <Button size="icon" variant="secondary" className="action-btn">
             <Heart size={18} />
           </Button>
           <Button size="icon" variant="default" className="action-btn">
             <ShoppingBag size={18} />
           </Button>
        </div>
      </div>

      {/* Content */}
      <div className="car-card-content">
        <div className="car-header">
           <p className="car-brand">{car.brand}</p>
           <div className="price-tag">
             ${car.price.toLocaleString()}
           </div>
        </div>
        
        <h3 className="car-model">{car.model}</h3>
        
        <div className="car-specs">
          <div className="spec-item">
            <span className="spec-label">0-60</span>
            <span className="spec-value">{car.specs.acceleration}</span>
          </div>
          <div className="spec-separator" />
          <div className="spec-item">
            <span className="spec-label">Power</span>
            <span className="spec-value">{car.specs.horsepower}HP</span>
          </div>
          <div className="spec-separator" />
          <div className="spec-item">
            <span className="spec-label">Top Speed</span>
            <span className="spec-value">{car.specs.topSpeed}</span>
          </div>
        </div>

        <Button className="w-full mt-4 group-hover:bg-brand-pink border-brand-pink" variant="outline">
          View Details
        </Button>
      </div>
    </div>
  );
}
