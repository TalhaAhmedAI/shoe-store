import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("");
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
    console.log("We are in add to cart");
    setCart([...cart, product]);
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
  return (
    <div className="App">
      <header>
        <button>Add to cart ({cart.length})</button>
      </header>
      {renderProducts()}
    </div>
  );
}

export default App;
