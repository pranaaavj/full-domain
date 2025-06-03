import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return <div>Cart: {cartItems.length}</div>;
};

export default Navbar;
