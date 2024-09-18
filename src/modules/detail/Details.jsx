import React, { useContext } from "react";
import "../../styles/detail.css";
import { DemoContext } from "../../Context/Context";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action/Action";




const Details = () => {
// ---------------------------------------
   const dispatch=useDispatch();

   const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
//----------------------------------------


  const { id } = useParams();
  const info = useContext(DemoContext);
 // const { addToCart, removeFromCart, cart } = useContext(DemoContext);

  const Products = info.data[0].products;
  const detailProduct = Products.filter((pro) => pro.id == id);
  const prod = detailProduct[0];
  console.log(prod);

  // const handleAddToCart = (product) => {
  //   addToCart(product);
  // };

  // const handleRemoveFromCart = (productId) => {
  //   removeFromCart(productId);
  // };

  return (
    <div className="productDetails">
      <div className="details">
        <div className="leftImg">
          <img src={prod.img} alt="" />
        </div>
        <div className="rigthDetails">
          <div style={{ fontSize: "2.75rem" }}>{prod.productName}</div>
          <div className="price">${prod.price}</div>
          <div className="descrip">
            {prod.description}
            <div className="ATC">
              <input type="text" className="aTCInput" />{" "}
              {/* <button
                className="addTCBtn"
                onClick={() => handleAddToCart(prod)}
              > */}
              {/* redux=-------------------- */}
               <button
                className="addTCBtn"
                onClick={() => handleAddToCart(prod)}
              >
                Add to Cart
              </button>
            </div>
            <hr />
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <div>Category: </div>
            <div style={{ color: "gray" }}>
              {" "}
              {detailProduct[0].category}{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
