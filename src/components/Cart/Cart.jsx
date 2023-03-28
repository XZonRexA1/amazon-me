import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);
  // calculating total price
  let totalPrice = 0;
  for (const { price } of cart) {
    totalPrice += price;
  }

  // calculating total shipping (Different methods)
  const totalShipping = cart
    .map((cart) => cart.shipping)
    .reduce((acc, cur) => acc + cur, 0);

  // calculating total tax
  const tax = (totalPrice * 7) / 100;

  // calculating Grand total
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Grand Total: ${grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
