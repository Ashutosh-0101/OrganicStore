import { useState, useEffect, useContext } from "react";
import React from "react";
import { DemoContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import "../../styles/header.css";
import { IoCartOutline } from "react-icons/io5";
import Cart from "../Cart/Cart";
import { RiAdminFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Header = () => {
    const info = useContext(DemoContext);
   // const {  cart } = useContext(DemoContext);
    const cart=useSelector((state)=>state.cart);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const noItem=cart.length;
    // console.log(noItem);
   
    const totalPrice = cart.reduce((accumulator, item) => {
        const itemPrice = parseFloat(item.price);
        return accumulator + (isNaN(itemPrice) ? 0 : itemPrice);
      }, 0);
    console.log(cart.id);

    

  return (
    <>
      <div className="header">
        <div id="left">
          <div id="img">
            <Link to="/">
              {" "}
              <img src={info.data[0].main.logo} alt="" />{" "}
            </Link>
          </div>

          <ul>
            <li>
              <Link to="/products/shop" className="linkColor">
                {" "}
                Everything{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/products/groceries" className="linkColor">
                {" "}
                Groceries{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/products/juice" className="linkColor">
                {" "}
                Juice{" "}
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div id="right">
          <ul>
            <li>
              {" "}
              <Link to="/contact" className="linkColor">
                {" "}
                Contact{" "}
              </Link>{" "}
            </li>

            <li style={{color:"rgb(106, 151, 58)"}}>${totalPrice}</li>
            <li><div className="outterDiv">
                <div className="cart" onClick={openModal}>
                <IoCartOutline/>
                </div>
                <div className="noItem">
                   {noItem}
                </div>
                </div></li>
            <li><RiAdminFill/></li>
          </ul>
        </div>
        <Cart isOpen={isModalOpen} onClose={closeModal} />

      </div>
    </>
  );
};

export default Header;
