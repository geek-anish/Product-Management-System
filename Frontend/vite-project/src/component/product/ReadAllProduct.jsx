import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ReadAllProduct.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const ReadAllProduct = () => {
  const [data, setData] = useState([]);
  let navigate = useNavigate()

  const getData = async () => {
    try {
      const result = await axios({
        url: "http://localhost:8000/product",
        method: "get",
      });
      setData(result.data.result || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getData();
  },[]);

  const handleView = (id)=>{

    return (e)=>{
      navigate(`/product/${id}`)
    }

  }

   const handleUpdate = (id)=>{

    return (e)=>{
      navigate(`/product/update/${id}`)
    }

  }

   const handleDelete =  (id)=>{

    return async (e)=>{
      try {
        let result = await axios({
        url: `http://localhost:8000/product/${id}`,
        method: "delete",
        });
        getData();
        
        toast.success(result.data.message)
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }

  }

  return (
    <section className="product-list-container">
      <div className="product-grid">
        {data.map((item, i) => (
          <article className="product-card" key={i}>
            <div className="product-card-row">
              <span className="product-label">Name</span>
              <span className="product-value">{item.name}</span>
            </div>
            <div className="product-card-row">
              <span className="product-label">Price</span>
              <span className="product-value">{item.price}</span>
            </div>
            <div className="product-card-row">
              <span className="product-label">Quantity</span>
              <span className="product-value">{item.quantity}</span>
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

export default ReadAllProduct;
