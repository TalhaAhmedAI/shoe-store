import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./components/products";
import Cart from "./components/cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  return (
    <div className="App">
      <Router>
        <header>
          <button>
            <Link to="cart">Go to cart ({cart.length})</Link>
          </button>
          <button>
            <Link to="/">View Products</Link>
          </button>
        </header>
        <Routes>
          <Route exact path="/" element={<Products addToCart={addToCart} />} />
          <Route
            path="cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
