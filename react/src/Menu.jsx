import React, { useEffect, useState } from 'react';
import PizzaCard from './PizzaCard';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Menu = () => {
  const [items, setItems] = useState([]);
  const { cartItems, addToCart, removeFromCart, increaseCount, decreaseCount } =
    useContext(CartContext);

  console.log(cartItems);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(
          'https://react-fast-pizza-api.jonas.io/api/menu'
        );
        const data = await res.json();

        setItems(data.data);
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchItems();
  }, []);

  console.log(items);

  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => {
          const itemInCart = cartItems.find(
            (cartItem) => cartItem.id === item.id
          );

          return (
            <div
              className='flex'
              key={item.id}>
              <PizzaCard {...item} />
              {itemInCart ? (
                <>
                  <button onClick={() => increaseCount(item.id)}>+</button>
                  <span>{itemInCart.count}</span>
                  <button onClick={() => decreaseCount(item.id)}>-</button>

                  <button onClick={() => removeFromCart(item.id)}>
                    Remove from cart
                  </button>
                </>
              ) : (
                <button onClick={() => addToCart(item)}>Add to cart</button>
              )}
            </div>
          );
        })
      ) : (
        <span> No Items found</span>
      )}
    </div>
  );
};

export default Menu;
