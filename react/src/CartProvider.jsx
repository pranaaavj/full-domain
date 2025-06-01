import { useState } from 'react';
import { CartContext } from './CartContext';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, count: 1 }]);
  };

  const removeFromCart = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);

    setCartItems(filteredItems);
  };

  const increaseCount = (id) => {
    const oldItems = [...cartItems];

    const incrementItem = oldItems.find((item) => item.id === id);
    incrementItem.count++;

    setCartItems(oldItems);
  };

  const decreaseCount = (id) => {
    const oldItems = [...cartItems];

    const incrementItem = oldItems.find((item) => item.id === id);

    if (incrementItem.count === 1) {
      const filteredItems = cartItems.filter((item) => item.id !== id);
      setCartItems(filteredItems);
      return;
    }

    incrementItem.count--;

    setCartItems(oldItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseCount,
        decreaseCount,
      }}>
      {children}
    </CartContext.Provider>
  );
}
