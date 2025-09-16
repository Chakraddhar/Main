ShoppyGlobe E-commerce Backend

A RESTful API backend for the ShoppyGlobe e-commerce application, built with Node.js, Express.js, MongoDB, and JWT-based authentication.

Project Structure
shoppyglobe-backend/
├── controllers/
├── models/
├── middleware/
├── routes/
├── server.js
├── package.json
└── README.md

Technologies Used: Node.js, Express.js, MongoDB Atlas, Mongoose, JWT (JSON Web Tokens), Bcrypt.js, Thunder Client (for API testing)

->How to Run the Project

->Clone the repository

git clone https://github.com/your-username/shoppyglobe-backend.git
cd shoppyglobe-backend


->Install dependencies

npm install


->Start the server

npm start


Server runs on: http://localhost:5000

-> API Endpoints
-> Authentication

1)POST /api/auth/register

Register a new user.

Body:

{
  "email": "chakri@gmail.com",
  "password": "1234"
}

2)POST /api/auth/login

Login and receive a JWT token.

Body:

{
  "email": "chakri@gmail.com",
  "password": "1234"
}

-> Products

3) GET /api/products

Get all products.

4) GET /api/products/:id

Get a single product by ID.

🛒 Cart (Requires JWT token)

Add Authorization: Bearer <token> header to these routes.

5) POST /api/cart

Add product to cart.

Body:

{
  "productId": "PRODUCT_ID",
  "quantity": 2
}

6) PUT /api/cart/:productId

Update quantity of a product in the cart.

Body:

{
  "quantity": 5
}

7) DELETE /api/cart/:productId

Remove a product from the cart.