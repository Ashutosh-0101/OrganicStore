import {   createStore} from "redux";
const initialState = {
  cart: [],
};
//action

const addToCart = "addToCart";
const removeFromCart = "removeFromCart";

//reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case addToCart:
      return { ...state, cart: [...state.cart, action.payload] }; // Add item to cart
    case removeFromCart:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload), // Remove item from cart
      };
    default:
      return state;
  }
};

//crrate store

const store = createStore(cartReducer);

export default store;