import { useContext } from "react";
import { DemoContext } from "../../Context/Context";

export const sliceData=()=>{
    const info = useContext(DemoContext);
  const products = info.data[0].products;
  const displayedProducts = products.slice(0, 4);
 return displayedProducts
    
}