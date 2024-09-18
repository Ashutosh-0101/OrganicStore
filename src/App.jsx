import { useState } from "react";
import "./styles/App.css";
import Products from "./modules/products/Products";
import Contact from "./modules/Contact/Contact";
import Home from "./modules/home/components/Home";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./modules/detail/Details";
import { Provider } from "react-redux";
import store from "./redux/store/Store"
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products/:name" element={<Products />} />
              <Route path="contact" element={<Contact />} />
              <Route path="products/detail/:id" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
