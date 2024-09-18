import React ,{useContext}from "react";
import { CiStar } from "react-icons/ci";
import { DemoContext } from "../../../Context/Context";
import { Link } from "react-router-dom";
import { sliceData } from "../../../utils/sliceData/sliceData";

import "../bestSelling.css";

const BestSelling = () => {
   const info = useContext(DemoContext);
  // const products = info.data[0].products;
  // const displayedProducts = products.slice(0, 4);
  const stars = [];
  function printStar() {
    for (let i = 0; i < 4; i++) {
      stars.push(<CiStar />);
    }
  }
  printStar();
  return (
    <div className="mainBest">
      <div className="Best">Best Selling Products</div>
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
            <div>
              {stars}
              {/* <CiStar/> <CiStar/> <CiStar/> <CiStar/> <CiStar/> */}
            </div>
            ${product.price}
          </div>
        ))}
      </div>

      {/* <div className='bSProducts'>
             <div>
             <img src={info.data[0].products[0].img} alt="" />
            </div>
             <div className='gro'>
             Grocery 
                </div> 
                <div className='pName'>
                Assorted Coffee
                </div>
             
              <div>
              <CiStar/><CiStar/>
              </div>
              25
        </div> */}
    </div>
  );
};

export default BestSelling;
