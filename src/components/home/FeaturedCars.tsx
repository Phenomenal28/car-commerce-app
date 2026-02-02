'use client';

import React, { useState, useMemo } from 'react';
import { MOCK_CARS } from '@/data/cars';
import { ProductCard } from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';

// Extract unique brands from car data
const BRANDS = [
  'All',
  ...Array.from(new Set(MOCK_CARS.map(car => car.brand)))
];

export function FeaturedCars() {
  const [selectedBrand, setSelectedBrand] = useState('All');

  const filteredCars = useMemo(() => {
    if (selectedBrand === 'All') return MOCK_CARS;
    return MOCK_CARS.filter(car => car.brand === selectedBrand);
  }, [selectedBrand]);

  return (
    <section id="collection" className="section-padding">
      <div className="featured-cars-container">
        {/* Brand Filter Bar */}
        <div className="brand-filter-bar">
          {BRANDS.map(brand => (
            <Button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`brand-filter-btn${selectedBrand === brand ? ' active' : ''}`}
              variant={selectedBrand === brand ? 'default' : 'outline'}
              size="sm"
            >
              {brand}
            </Button>
          ))}
        </div>

        {/* Car Grid */}
        <div className="car-grid" key={selectedBrand}>
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <ProductCard key={car.id} car={car} style={{ animationDelay: `${index * 0.1}s` }} />
            ))
          ) : (
            <div className="no-cars-message">
              <p>No vehicles found in this category.</p>
              <Button variant="ghost" onClick={() => setSelectedBrand('All')}>View All Cars</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
