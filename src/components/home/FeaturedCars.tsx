'use client';

import React, { useState, useMemo } from 'react';
import { MOCK_CARS } from '@/data/cars';
import { ProductCard } from '@/components/product/ProductCard';
import { CarFilterSideBar } from '@/components/shop/CarFilterSideBar';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

export function FeaturedCars() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(500000);
  const [transmission, setTransmission] = useState<'All' | 'Automatic' | 'Manual'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const filteredCars = useMemo(() => {
    return MOCK_CARS.filter(car => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(car.brand);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(car.category);
      const matchesPrice = car.price <= priceRange;
      const matchesTransmission = transmission === 'All' || (car.specs.transmission && car.specs.transmission === transmission);
      const matchesSearch = car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           car.brand.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesBrand && matchesCategory && matchesPrice && matchesTransmission && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return b.year - a.year; // newest
    });
  }, [selectedBrands, selectedCategories, priceRange, transmission, searchQuery, sortBy]);

  return (
    <div className="shop-layout">
      {/* Sidebar Filters */}
      <CarFilterSideBar
        selectedBrands={selectedBrands}
        selectedCategories={selectedCategories}
        priceRange={priceRange}
        transmission={transmission}
        onBrandToggle={toggleBrand}
        onCategoryToggle={toggleCategory}
        onPriceRangeChange={setPriceRange}
        onTransmissionChange={setTransmission}
      />

      {/* Main Content */}
      <div className="shop-content">
        {/* Toolbar */}
        <div className="shop-toolbar">
          <div className="shop-search-wrapper">
            <Search className="shop-search-icon" size={20} />
            <input
              type="text"
              className="shop-search-input"
              placeholder="Search for your dream car..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="shop-sort-wrapper">
            <span className="shop-sort-label">Sort By:</span>
            <select
              className="shop-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredCars.map(car => (
            <ProductCard key={car.id} car={car} />
          ))}
        </div>

        {/* Pagination */}
        <div className="shop-pagination">
          <button className="pagination-btn">
            <ChevronLeft size={20} />
          </button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn page-number">2</button>
          <button className="pagination-btn page-number">3</button>
          <span className="pagination-ellipsis">...</span>
          <button className="pagination-btn page-number">12</button>
          <button className="pagination-btn">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
