import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return <div>Cart: {cartItems.length}</div>;
};

export default Navbar;
