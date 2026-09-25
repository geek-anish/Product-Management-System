import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  /* make empty variable
  hit api on page load
  api guives data set data to empty variable
  show data  */

  
  let [data, setData] = useState({});

  let params = useParams();

  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/product/${params.id}`,
        method: "get",
      });
      //  console.log(result.data.result);
      setData(result.data.result)
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data)
  return (
  <div>
    <h1> product details</h1>
    <p>name is {data.name}</p>
    <p>price is {data.price}</p>
    <p>quantity is {data.quantity}</p>
    <p>isDamage:{data.isDamage?"yes":"no"}</p>
  </div>
  );
};

export default ProductDetails;
