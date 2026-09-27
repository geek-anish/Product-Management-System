import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ReadAllUser.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ReadAllUser = () => {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const getData = async () => {
    try {
      const result = await axios({
        url: "http://localhost:8000/user",
        method: "get",
      });
      setData(result.data.result || []);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleView = (id) => {
    return (e) => {
      navigate(`/user/${id}`);
    };
  };

  const handleUpdate = (id) => {
    return (e) => {
      navigate(`/user/update/${id}`);
    };
  };

  const handleDelete = (id) => {
    return async (e) => {
      try {
        let result = await axios({
          url: `http://localhost:8000/user/${id}`,
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
    <section className="user-list-container">
      <div className="user-grid">
        {data.map((item, i) => (
          <article className="user-card" key={i}>
            <div className="user-card-row">
              <span className="user-label">Name</span>
              <span className="user-value">{item.name}</span>
            </div>
            <div className="user-card-row">
              <span className="user-label">Email</span>
              <span className="user-value">{item.email}</span>
            </div>
            
            <div className="user-card-row">
              <span className="user-label">Profile Image</span>
              <span className="user-value">
                <img
                  alt="profileImage"
                  src={item.profileImage}
                  width="100"
                  height="100"
                ></img>
              </span>
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

export default ReadAllUser;
