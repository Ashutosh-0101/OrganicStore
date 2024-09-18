import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { DemoContext } from "../../../Context/Context";
import { Link } from "react-router-dom";
import "../bestSelling.css";
import { sliceData } from "../../../utils/sliceData/sliceData";

const Trending = () => {
  const info = useContext(DemoContext);
  const stars = [];
  function printStar() {
    for (let i = 0; i < 4; i++) {
      stars.push(<CiStar />);
    }
  }
  printStar();
  return (
    <div className="mainBest">
      <div className="Best">Trending Products</div>
      <div className="bLeaf">
        <img src={info.data[0].main.bLeaf} alt="" />
      </div>
      <div className="allProduct">
        {sliceData().map((product, id) => (
          <div className="bSProducts" key={id}>
            <div>
              <Link to={`/products/detail/${product.id}`} className="linkColor">
                {" "}
                <img src={product.img} alt="" />{" "}
              </Link>
            </div>
            <div className="gro">{product.category}</div>
            <div className="pName">{product.productName}</div>
            <div>{stars}</div>${product.price}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Trending;
