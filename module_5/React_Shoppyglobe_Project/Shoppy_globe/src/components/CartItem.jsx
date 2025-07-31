// src/components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../redux/cartSlice';
import "./style.css";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} style={{ width: '100px' }} />
      <div>
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${item.price * item.quantity}</p>
        <button onClick={() => dispatch(addToCart(item))}>+</button>
        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
