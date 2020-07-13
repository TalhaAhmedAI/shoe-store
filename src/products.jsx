import React, { useState } from "react";

const Products = ({ addToCart }) => {
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
};

export default Products;
