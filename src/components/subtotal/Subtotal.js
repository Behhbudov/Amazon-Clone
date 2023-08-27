import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../context/StateProvider";
import { cartTotalHandler } from "../../context/reducer";
import { useNavigate } from "react-router-dom";
import "./Subtotal.css";

const Subtotal = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={cartTotalHandler(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={(event) => {
          if (user) {
            if (cart.length > 0) {
              navigate("/payment");
            } else {
              alert("You have to add something to the Cart !!!");
            }
          } else {
            alert("You have to Log In or Register !!!");
          }
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
