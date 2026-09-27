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

  const handleView = (id) => {
    return (e) => {
      navigate(`/review/${id}`);
    };
  };

  const handleUpdate = (id) => {
    return (e) => {
      navigate(`/review/update/${id}`);
    };
  };

  const handleDelete = (id) => {
    return async (e) => {
      try {
        let result = await axios({
          url: `http://localhost:8000/review/${id}`,
          method: "delete",
        });
        getData();

        toast.success(result.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  };


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
            <button onClick={handleView(item.id)}>View</button>
            <button onClick={handleUpdate(item.id)}>Update</button>
            <button onClick={handleDelete(item.id)}>Delete</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReadAllReview;
