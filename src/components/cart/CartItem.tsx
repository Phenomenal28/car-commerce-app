"use client";
import React from 'react';
import { CartItem as CartItemType } from '@/types';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onRemove }: CartItemProps) {
  return (
    <div className="cart-item-card">
      <div className="cart-item-image">
        <Image 
          src={item.image} 
          alt={item.model} 
          fill
          className="cart-item-img"
        />
      </div>
      <div className="cart-item-content">
        <div>
          <div className="cart-item-header">
            <div>
              <p className="cart-item-brand">{item.brand}</p>
              <h3 className="cart-item-model">{item.model}</h3>
            </div>
            <p className="cart-item-price">${item.price.toLocaleString()}</p>
          </div>
          <p className="cart-item-quantity">Quantity: {item.quantity}</p>
        </div>
        <div className="cart-item-footer">
          <button 
            onClick={() => onRemove(item.id)}
            className="cart-item-remove-btn"
          >
            <Trash2 size={16} className="cart-item-remove-icon" /> Remove
          </button>
        </div>
      </div>
    </div>
  );
}
