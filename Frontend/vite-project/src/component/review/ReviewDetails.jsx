import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReviewDetails = () => {
  /* make empty variable
  hit api on page load
  api guives data set data to empty variable
  show data  */

  
  let [data, setData] = useState({});

  let params = useParams();

  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/review/${params.id}`,
        method: "get",
      });
       
      //  console.log(result.data.result);

      setData(result.data.result)
    } catch (error) {console.log(error);}
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data)
  return (
  <div>
    
    <h1> review details</h1>
    <p>product is {data.product?.name}</p>
    <p>user is {data.user?.name}</p>
    <p>Description is {data.description}</p>
    
    
  </div>
  );
};

export default ReviewDetails;
