// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../redux/cartSlice';
//import './Header.css'; // Optional: style
import "./style.css";

function Header() {
  const cartItems = useSelector(selectCartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="logo">ShoppyGlobe</Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          🛒 Cart
          <span className="cart-badge">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
