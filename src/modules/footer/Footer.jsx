import React, { useContext } from "react";
import "../../styles/footer.css";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { DemoContext } from "../../Context/Context";

const Footer = () => {
  const info = useContext(DemoContext);
  const logo = info.data[0].footer.logo;
  return (
    <div className="footer">
      <div className="upper">
        <div className="logo">
          <img src={logo} alt="" />
          <div className="desFooter">
            Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
            Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse
            quis faucibus urna. Suspendisse pellentesque.
          </div>
        </div>
        <div className="links">
          <div>Quick Links</div>
          <div>About</div>
          <div>Cart</div>
          <div>Checkout</div>
          <div>Contact</div>
          <div>Home</div>
          <div>My account</div>
          <div>Shop</div>

          <div>Quick Links</div>
          <div>About</div>
          <div>Cart</div>
          <div>Checkout</div>
          <div>Contact</div>
          <div>Home</div>
          <div>My account</div>
          <div>Shop</div>
        </div>
        <div className="categories">
          <div>Download Our Mobile App</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt
            libero interdum sit amet.
          </div>
          <div>Quick Links</div>
          <div>Quick Links</div>
          <div>Quick Links</div>
          <div>Know More About Us</div>
          <div>Visit Store</div>
          <div> Let’s Connect </div>

          <div>Locate Stores </div>
        </div>
      </div>

      <div className="lower">
        <div className="lowerLeft">Copyright © 2024 | Organic Store</div>
        <div className="lowerRight">
          <CiTwitter />
          <FaFacebookF />
          <FaYoutube />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
