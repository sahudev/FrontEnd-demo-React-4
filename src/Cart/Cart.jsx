import React from "react";

function Cart({ cart }) {
  const cartList = Object.values(cart);

  if (cartList.length === 0) {
    return <div> No items in the cart</div>;
  } else {
    return (
      <ol>
        {cartList.map((cartItem) => (
          <li key={cartItem.id}>
            <div>{cartItem.title}</div>
            <div> Quantity: {cartItem.quantity}</div>
          </li>
        ))}
      </ol>
    );
  }
}
export default Cart;
