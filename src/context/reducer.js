export const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  user: null,
};

export const cartTotalHandler = (cart) => {
  return cart?.reduce(
    (initialAmount, cartItem) => initialAmount + cartItem.price,
    0
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newStateAdd = {
        ...state,
        cart: [...state.cart, action.item],
      };
      localStorage.setItem("cart", JSON.stringify(newStateAdd.cart));
      return newStateAdd;
    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (cartItem) => cartItem.uniqueId !== action.uniqueId
      );
      const newStateRemove = {
        ...state,
        cart: updatedCart,
      };
      localStorage.setItem("cart", JSON.stringify(newStateRemove.cart));
      return newStateRemove;
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "REMOVE_FROM_CART_WITH_SIGNOUT":
      const removedState = {
        ...state,
        cart: [],
      };
      localStorage.removeItem("cart");
      return removedState;
    default:
      return state;
  }
};

export default reducer;
