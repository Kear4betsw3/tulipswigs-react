import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function add(item) {
    setItems(prev => {
      const found = prev.find(p => p.id === item.id);
      if (found) {
        return prev.map(p =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function remove(id) {
    setItems(prev => prev.filter(p => p.id !== id));
  }

  function changeQty(id, qty) {
    setItems(prev =>
      prev.map(p => (p.id === id ? { ...p, qty } : p))
    );
  }

  const total = items.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{ items, add, remove, changeQty, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
