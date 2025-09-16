const express = require('express');
const mongoose = require('mongoose');

// Constants
const PORT = 5000;
const MONGO_URI = "mongodb+srv://chakradharreddyb2_db_user:67uUBvvO0yryhovL@cluster0.9cpyz9c.mongodb.net/shoppyglobe?retryWrites=true&w=majority";

// App setup
const app = express();
app.use(express.json());

// Route imports
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
