import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ReadAllReview = () => {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const getData = async () => {
    try {
      const result = await axios({
        url: "http://localhost:8000/review",
        method: "get",
      });
      setData(result.data.result);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <section className="product-list-container">
      <div className="product-grid">
        {data.map((item, i) => (
          <article className="product-card" key={i}>
            <div className="product-card-row">
              <span className="product-label">Name</span>
              <span className="product-value">{item?.product?.name}</span>
            </div>
            <div className="product-card-row">
              <span className="product-label">User</span>
              <span className="product-value">{item?.user?.name}</span>
            </div>
            <div className="product-card-row">
              <span className="product-label">Description</span>
              <span className="product-value">{item?.description}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReadAllReview;
