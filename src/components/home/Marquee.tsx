'use client';

import React from 'react';

const BRAND_NAMES = [
  'Mercedes-Benz',
  'Porsche',
  'Lamborghini',
  'Ferrari',
  'McLaren',
  'Bugatti',
  'Aston Martin',
  'Rolls-Royce',
  'Bentley',
  'Jaguar',
  'Toyota'
];

// Duplicate the list enough times to ensure smooth infinite scroll
const MARQUEE_ITEMS = [...BRAND_NAMES, ...BRAND_NAMES, ...BRAND_NAMES, ...BRAND_NAMES];

export function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {MARQUEE_ITEMS.map((brand, index) => (
          <div key={`${brand}-${index}`} className="marquee-item">
            <span>{brand}</span>
            <span className="marquee-separator">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
