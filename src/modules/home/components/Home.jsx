import React, { useContext } from "react";
import { DemoContext } from "../../../Context/Context.jsx";
import "../home.css";
import BestSelling from "./BestSelling.jsx";
import Ribon from "./Ribon.jsx";

import Trending from "./Trending.jsx";
const Home = () => {
  const info = useContext(DemoContext);
  const { loop } = useContext(DemoContext);
  return (
    <>
      <div className="mainDiv">
        <div className="left">
          <div>
            <img src={info.data[0].main.banner} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="leaf">
            <img src={info.data[0].main.bLeaf} alt="" />
          </div>
          <div className="tag">Best Quality Products</div>
          <div className="tag2">Join The Organic Movement!</div>
          <div className="dess">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
          <div className="buttonMain">
            <button className="buttonMain">shop now</button>
          </div>
        </div>
      </div>
      <div className="banner">
        {loop.map((l) => (
          <div className="bannerContainer">
            <div>{l.tag}</div>
            <div>{l.tag2}</div>
          </div>
        ))}
      </div>
      <BestSelling />
      <Ribon />
      <Trending />
    </>
  );
};

export default Home;
