import React, { useContext, useEffect, useState } from "react";
import "../../styles/products.css";
import { DemoContext } from "../../Context/Context";
import { Link, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import Slider from "@mui/material/Slider";
function valuetext(value) {
  return `${value}`;
}
const Products = () => {
  const [search, setSearch] = useState("");
  const [sId, setSid] = useState();
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState([10, 90]);
  const { name } = useParams();
  const info = useContext(DemoContext);
  const Products = info.data[0].products;
  const filterProducts = Products.filter(
    (pro) => pro.category.toLowerCase() === name
  );
 const displayProducts = name === "shop" ? Products : filterProducts;
  useEffect(() => setProducts(displayProducts), [name]);
  useEffect(
    function handleSearch() {
      const sString = search.toLowerCase();
      const firstMatch = displayProducts.find((p) =>
        p.productName.toLowerCase().includes(sString)
      );
      setSid(firstMatch ? firstMatch.id : null);
      // console.log(search);
      // console.log("display", firstMatch);
    },
    [search]
  );

  useEffect(
    function handleSlider() {
      setProducts(
        displayProducts.filter((p) => p.price > value[0] && p.price < value[1])
      );
    },
    [value]
  );
  console.log(typeof value[0]);
  console.log(typeof Products[0].price);

  const sideProducts = Products.slice(0, 3);

  const stars = [];
  function printStar() {
    for (let i = 0; i < 4; i++) {
      stars.push(<CiStar />);
    }
  }
  printStar();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mainContainer">
      <div className="productDiv">
        <div className="leftPannel">
          <div className="search">
            <input
              type="text"
              placeholder="Search Products"
              className="inputSearch"
              onChange={(e) => setSearch(e.target.value)}
            />{" "}
            <button className="searchBtn">
              <Link to={`/products/detail/${sId}`}>Search</Link>{" "}
            </button>
          </div>
          <div className="filter">
            <div className="slider">
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color="green"
                sx={{
                  color: "#8bc24b", // Set the custom color for the slider thumb and track
                  "& .MuiSlider-thumb": {
                    borderColor: "#8bc24b", // Color of the thumb border
                  },
                  "& .MuiSlider-track": {
                    bgcolor: "#8bc24b", // Color of the track
                  },
                  "& .MuiSlider-rail": {
                    bgcolor: "#8bc24b30", // Light color of the rail
                  },
                }}
              />
              <div>
                <input
                  type="text"
                  style={{ height: "30px", width: "40px" }}
                  value={value[0]}
                />{" "}
                <input
                  type="text"
                  value={value[1]}
                  style={{ height: "30px", width: "40px" }}
                />
              </div>
            </div>
          </div>
          <div className="categoryList">
            <div
              style={{
                textAlign: "left",
                fontSize: "18px",
                paddingBottom: "33px",
              }}
            >
              <h4>
                <span style={{ color: "green", marginRight: "10px" }}>
                  Groceries
                </span>{" "}
                (10)
              </h4>
              <h4>
                <span style={{ color: "green", marginRight: "10px" }}>
                  Juice
                </span>
                (9)
              </h4>
            </div>
          </div>
          <div className="salePro">
            {sideProducts.map((product, id) => (
              <div className="bSProducts" key={id}>
                <div>
                  <Link
                    to={`/products/detail/${product.id}`}
                    className="linkColor"
                  >
                    {" "}
                    <img src={product.img} alt="" />{" "}
                  </Link>
                </div>

                <div
                  style={{
                    color: "#6a973a",
                    marginBottom: "5px",
                    margintom: "50px",
                  }}
                >
                  {product.productName}
                </div>
                <div>${product.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right side--------------------------------------- */}

        <div className="rightPannel">
          <div className="products">
            <div className="path">Home/{name}</div>
            <div className="productTitle">{name}</div>
            <div className="colclusion">
              <div className="proLeft">Showing all 6 results</div>
              <div className="proRight"> Default Sorting </div>
            </div>
            <div className="productsContainer">
              {products.map((product, id) => (
                <div className="bSProducts" key={id}>
                  <div>
                    <Link
                      to={`/products/detail/${product.id}`}
                      className="linkColor"
                    >
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
        </div>
      </div>
    </div>
  );
};

export default Products;
