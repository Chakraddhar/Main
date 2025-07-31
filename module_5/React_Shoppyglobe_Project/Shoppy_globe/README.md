# React + Vite

# 🛒 ShoppyGlobe - React E-Commerce Application

ShoppyGlobe is a basic e-commerce application built using React. It demonstrates key concepts such as component structure, routing, Redux state management, data fetching, search, and cart functionality.

## 📦 Features

- Browse products fetched from an external API
- View product details
- Add/remove products to/from cart
- Modify product quantities in cart
- Search products by name
- Responsive UI design
- React Router for page navigation
- Redux for global cart state
- Custom hook for API fetching
- Error handling for API failures
- Code splitting and lazy loading

---

## 🧰 Tech Stack

- React
- Redux Toolkit
- React Router DOM
- JavaScript (ES6+)
- CSS (or Tailwind CSS if extended)
- Vite (for fast development)

---

## 📁 Project Structure

Shoppy_globe/
├── public/
├── src/
│ ├── assets/ # Images or static assets
│ ├── components/ # Reusable UI components
│ │ ├── Header.jsx
│ │ ├── ProductList.jsx
│ │ ├── ProductItem.jsx
│ │ ├── ProductDetail.jsx
│ │ ├── Cart.jsx
│ │ ├── CartItem.jsx
│ │ └── NotFound.jsx
│ ├── hooks/
│ │ └── useFetchProducts.js
│ ├── redux/ # Redux setup
│ │ ├── store.js
│ │ └── cartSlice.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .gitignore
├── package.json
└── README.md

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
