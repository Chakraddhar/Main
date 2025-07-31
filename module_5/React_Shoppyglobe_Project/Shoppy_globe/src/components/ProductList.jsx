// src/components/ProductList.jsx
import React, { useState } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import "./style.css";

function ProductList() {
  const { data: products, error, loading } = useFetchProducts('https://dummyjson.com/products');
  const [search, setSearch] = useState('');

  const filtered = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
  <input
    className="search-bar"
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={e => setSearch(e.target.value)}
  />
  <div className="product-grid">
    {filtered.map(product => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
</div>
  );
}

export default ProductList;
