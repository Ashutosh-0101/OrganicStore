import React, { createContext, useState, useEffect } from "react";
import Data from "../utils/Data/Data.json";
import loop from "../utils/Data/loop.json";
export const DemoContext = createContext();

// console.log(Data);

const ContextDemo = ({ children }) => {
  const [cart, setCart] = useState([
    {
      id: 9,
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg",
      productName: "Coffee-Asorted",
      price: 35.0,
      raiting: "5",
      category: "Juice",
      description:
        "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
    },
  ]);

  function addToCart(item) {
    setCart((prev) => [...prev, item]);
  }
  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }
  return (
    <DemoContext.Provider
      value={{ data: Data, addToCart, removeFromCart, cart, loop }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export { ContextDemo };
