import React, { useState } from "react";

const Products = ({ addToCart }) => {
  const [products] = useState([
    {
      name: "VALOUR BLUE",
      cost: "$70.99",
      image:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    },
    {
      name: "JORDAN MARS 270 LONDON",
      cost: "$85.99",
      image:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    },
    {
      name: "RACER BLUE",
      cost: "$99.00",
      image:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    },
    {
      name: "JORDAN MAX 200",
      cost: "$79.00",
      image:
        "https://secure-images.nike.com/is/image/DotCom/844940_100_99_PREM?$SNKRS_COVER_WT$&align=0,1",
    },
  ]);

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <div id="product-item" className="product" key={index}>
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
