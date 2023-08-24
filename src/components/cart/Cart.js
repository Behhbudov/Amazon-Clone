import React from "react";
import "./Cart.css";
import Subtotal from "../subtotal/Subtotal";
import CartProduct from "../cartProduct/CartProduct";
import { useStateValue } from "../../context/StateProvider";

const Cart = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  let cartTitle = "Log In or Register Then Start Shopping";
  if (user) {
    cartTitle = "There Is No Product In The Cart";
  }
  if (user && cart.length > 0) {
    cartTitle = "Your Shopping Cart";
  }

  return (
    <div className="cart">
      <div className="cart__left">
        <img
          className="cart__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="cart__title">{cartTitle}</h2>
          {cart.map((item) => (
            <CartProduct
              key={item.uniqueId}
              id={item.id}
              uniqueId={item.uniqueId}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Cart;
