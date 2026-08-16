'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('forever_cart') || '[]');
      if (Array.isArray(saved)) setCart(saved);
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem('forever_cart', JSON.stringify(cart));
  }, [cart, ready]);

  const add = (product) => {
    setCart((current) => {
      const found = current.find((item) => item.ref === product.ref);
      if (found) {
        return current.map((item) =>
          item.ref === product.ref ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const setQuantity = (ref, quantity) => {
    const q = Math.max(1, Number(quantity) || 1);
    setCart((current) =>
      current.map((item) => item.ref === ref ? { ...item, quantity: q } : item)
    );
  };

  const remove = (ref) => setCart((current) => current.filter((item) => item.ref !== ref));
  const clear = () => setCart([]);

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = useMemo(
    () => ({ cart, add, setQuantity, remove, clear, count, total, ready }),
    [cart, count, total, ready]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
