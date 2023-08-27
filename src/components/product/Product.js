import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ id, title, price, image, rating }) => {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    if (user) {
      dispatch({
        type: "ADD_TO_CART",
        item: {
          id: id,
          uniqueId: Date.now(),
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    }
    if (!user && window.confirm("You have to Log In or Register!!!")) {
      if (window.confirm("Do You Want to Log In or Register!!!")) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToCartHandler}>Add To Basket</button>
    </div>
  );
};

export default Product;
