import React, { useState } from "react";
import "./App.css";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [products] = useState([
    {
      name: "AA Battery",
      cost: "$2.99",
      image: "https://tinyurl.com/y8wnrymv",
    },
    {
      name: "Blanket",
      cost: "$19.99",
      image: "https://tinyurl.com/y7s5krpw",
    },
  ]);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to cart ({cart.length})
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
