'use client';

import React from 'react';
import { BRANDS, CATEGORIES } from '@/data/cars';
import { Button } from '../ui/button';

interface CarFilterSideBarProps {
  selectedBrands: string[];
  selectedCategories: string[];
  priceRange: number;
  transmission: 'All' | 'Automatic' | 'Manual';
  onBrandToggle: (brand: string) => void;
  onCategoryToggle: (category: string) => void;
  onPriceRangeChange: (price: number) => void;
  onTransmissionChange: (transmission: 'All' | 'Automatic' | 'Manual') => void;
}

export function CarFilterSideBar({
  selectedBrands,
  selectedCategories,
  priceRange,
  transmission,
  onBrandToggle,
  onCategoryToggle,
  onPriceRangeChange,
  onTransmissionChange,
}: CarFilterSideBarProps) {
  return (
    <aside className="shop-sidebar">
      <div className="filter-section">
        <h3 className="filter-title">Filter By</h3>

        {/* Brand Filter */}
        <div className="filter-group">
          <label className="filter-group-title">Brand</label>
          <div className="filter-checkbox-group">
            {BRANDS.filter(b => b !== 'All').map(brand => (
              <label key={brand} className="filter-checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => onBrandToggle(brand)}
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Body Type Filter */}
        <div className="filter-group">
          <label className="filter-group-title">Body Type</label>
          <div className="filter-checkbox-group">
            {CATEGORIES.filter(c => c !== 'All').map(category => (
              <label key={category} className="filter-checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryToggle(category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="filter-group">
          <label className="filter-group-title">Price Range</label>
          <input
            type="range"
            className="filter-range"
            min="50000"
            max="500000"
            step="5000"
            value={priceRange}
            onChange={(e) => onPriceRangeChange(Number(e.target.value))}
          />
          <div className="filter-range-labels">
            <span>$50k</span>
            <span>${(priceRange / 1000).toFixed(0)}k+</span>
          </div>
        </div>

        {/* Transmission */}
        <div className="filter-group">
          <label className="filter-group-title">Transmission</label>
          <div className="filter-transmission-buttons">
            <Button
              className={`transmission-btn${transmission === 'Automatic' ? ' active' : ''}`}
              onClick={() => onTransmissionChange('Automatic')}
            >
              Automatic
            </Button>
            <Button
              className={`transmission-btn${transmission === 'Manual' ? ' active' : ''}`}
              onClick={() => onTransmissionChange('Manual')}
            >
              Manual
            </Button>
          </div>
        </div>

        <Button className="filter-apply-btn" onClick={() => {}}>
          Apply Filters
        </Button>
      </div>
    </aside>
  );
}
