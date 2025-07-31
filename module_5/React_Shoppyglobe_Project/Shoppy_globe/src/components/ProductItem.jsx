// src/components/ProductItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
//import './ProductItem.css'; // Optional: for styling
import "./style.css";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} className="product-img" />
      </Link>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
