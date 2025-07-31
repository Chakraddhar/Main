// src/components/Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { selectCartItems, selectCartTotal } from '../redux/cartSlice';
import "./style.css";

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <hr />
          <h3>Total Price: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
