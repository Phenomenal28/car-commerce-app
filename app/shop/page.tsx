import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { FeaturedCars } from '@/components/home/FeaturedCars';
import { GridLayout } from '@/components/layout/GridLayout';
import Footer from '@/components/layout/Footer';


export default function ShopPage() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <GridLayout showGrid={false}>
          <FeaturedCars />
        </GridLayout>
        <Footer />
      </div>
    </>
  );
}