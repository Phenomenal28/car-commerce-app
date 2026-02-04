"use client";
import React from 'react';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const router = useRouter();
  const { items, removeFromCart, getSubtotal } = useCart();
  const subtotal = getSubtotal();

  return (
    <div className="cart-page">
      <div className="cart-page-container">
        <h1 className="cart-page-title">Shopping Cart</h1>

        {items.length > 0 ? (
          <div className="cart-page-grid">
            <div className="cart-items-section">
              {items.map((item) => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onRemove={removeFromCart} 
                />
              ))}
            </div>

            <div className="cart-summary-section">
              <CartSummary subtotal={subtotal} />
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <h2 className="cart-empty-title">Your cart is empty</h2>
            <Button onClick={() => router.push('/shop')}>Start Shopping</Button>
          </div>
        )}
      </div>
    </div>
  );
}