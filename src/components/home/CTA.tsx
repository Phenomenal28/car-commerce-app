"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function FinalCTA() {
  const router = useRouter();

  return (
    <section className="cta-section">
      <div className="cta-background-texture" />
      <div className="cta-content">
        <h2 className="cta-title">
          READY TO <span className="cta-title-highlight">DRIVE?</span>
        </h2>
        <p className="cta-description">
          Your dream car is waiting. Join the exclusive club of LuxeDrive owners today.
        </p>
        <div className="cta-buttons">
          <Button 
            size="lg" 
            onClick={() => router.push('/shop')}
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => router.push('/contact')}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;