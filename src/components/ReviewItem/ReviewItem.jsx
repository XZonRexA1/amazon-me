import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { name, quantity, price, id, img } = product;
  return (
    <div className="review-item">
      <img src={img} alt="product image" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price <span style={{ color: "orange" }}>${price}</span>
        </p>
        <p>
          Order Quantity: <span style={{ color: "orange" }}>{quantity}</span>
        </p>
      </div>
      <button onClick={() => handleRemoveFromCart(id)} className="btn-delete">
        <FontAwesomeIcon
          style={{ color: "#eb5757", fontSize: "27px" }}
          icon={faTrashAlt}
        />
      </button>
    </div>
  );
};

export default ReviewItem;
