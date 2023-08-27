import React from "react";
import CartProduct from "../cartProduct/CartProduct";
import { useStateValue } from "../../context/StateProvider";
import { Link } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/cart">{cart?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Times Street</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__products">
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
