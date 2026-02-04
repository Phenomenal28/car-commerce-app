"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CartSummaryProps {
  subtotal: number;
}

export default function CartSummary({ subtotal }: CartSummaryProps) {
  const router = useRouter();
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="cart-summary-card">
      <h3 className="cart-summary-title">Order Summary</h3>
      <div className="cart-summary-details">
        <div className="cart-summary-row">
          <span>Subtotal</span>
          <span>${subtotal.toLocaleString()}</span>
        </div>
        <div className="cart-summary-row">
          <span>Tax (Est. 8%)</span>
          <span>${tax.toLocaleString()}</span>
        </div>
        <div className="cart-summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="cart-summary-total">
          <span>Total</span>
          <span>${total.toLocaleString()}</span>
        </div>
      </div>
      <Button 
        variant="default" 
        size="lg"
        className="cart-summary-btn"
        onClick={() => router.push('/checkout')}
      >
        Proceed to Checkout <ArrowRight size={18} className="cart-summary-btn-icon" />
      </Button>
    </div>
  );
}
