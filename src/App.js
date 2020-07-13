import React, { useState } from "react";
import "./App.css";

function App() {
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
  return (
    <div className="App">
      <h1>Products</h1>
      {products.map((product) => (
        <div>
          <h3>{product.name}</h3>
          <h4>{product.cost}</h4>
          <img src={product.image} alt={product.name} />
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default App;
