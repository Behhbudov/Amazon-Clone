import React from "react";
import "./CartProduct.css";
import { useStateValue } from "../../context/StateProvider";

const CartProduct = ({ id, uniqueId, image, title, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCartHandler = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      uniqueId: uniqueId,
    });
  };

  return (
    <div className="cartProduct">
      <img className="cartProduct__image" src={image} alt="Product" />
      <div className="cartProduct__info">
        <p className="cartProduct__title">{title}</p>
        <p className="cartProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        <button onClick={removeFromCartHandler}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CartProduct;
