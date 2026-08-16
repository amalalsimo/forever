'use client';

import { useCart } from './CartProvider';

export default function AddToCartButton({ product, label }) {
  const { add } = useCart();
  return (
    <button className="btn btnPrimary addWide" onClick={() => add(product)}>
      <i className="fa-solid fa-cart-plus" /> {label}
    </button>
  );
}
