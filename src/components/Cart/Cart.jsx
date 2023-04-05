import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ cart, handleClearCart, children }) => {
  console.log(cart);
  // calculating total price
  let totalPrice = 0;
  let quantity = 0;
  for (const product of cart) {
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }
    totalPrice += product.price * product.quantity;
    quantity += product.quantity;
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
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Grand Total: ${grandTotal.toFixed(2)}</p>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
