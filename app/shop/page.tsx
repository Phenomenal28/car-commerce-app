import React from 'react';
import { FeaturedCars } from '@/components/home/FeaturedCars';
import { GridLayout } from '@/components/layout/GridLayout';
import Footer from '@/components/layout/Footer';


export default function ShopPage() {
  return (
    <>
      <GridLayout showGrid={false}>
        <FeaturedCars />
      </GridLayout>
      <Footer />
    </>
  );
}