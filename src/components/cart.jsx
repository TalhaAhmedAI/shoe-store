import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  if (cart.length)
    return (
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
  else {
    return <h1> There are no items in the cart</h1>;
  }
};

export default Cart;
