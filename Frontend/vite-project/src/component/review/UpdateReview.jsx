import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateReview = () => {

  const [productData, setProductData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [descriptionData, setDescriptionData] = useState([]);

  const [product, setProduct] = useState("");
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");

  const [productInitialValue, setProductInitialValue] = useState("");
  const [userInitialValue, setUserInitialValue] = useState("");
  const [descriptionInitialValue, setDescriptionInitialValue] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents defuslts behvsviour of refreshing
    let data = {
      product: product,
      user: user,
      description: description,
    };

    try {
      let result = await axios({
        url: `http://localhost:8000/review/${params.id}`,
        method: "patch",
        data: data,
      });
      navigate(`/review/${params.id}`);
      // console.log(result);

      toast.success(result.data.message);
      setDescription("");
      setProduct(productInitialValue);
      setUser(userInitialValue);
    } catch (error) {
      console.log(error.response);

      toast.error(error.response.data.message);
    }
  };

  const getProductData = async () => {
    try {
      const result = await axios({
        url: "http://localhost:8000/product",
        method: "get",
      });
      let data = result.data.result;
      setProduct(data[0].id);
      setProductInitialValue(data[0].id);

      let option = data.map((item, i) => {
        return { label: item.name, value: item.id };
      });
      setProductData(option); //setProductOption(option)
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const getUserData = async () => {
    try {
      const result = await axios({
        url: "http://localhost:8000/user",
        method: "get",
      });
      let data = result.data.result;
      setUser(data[0].id);
      setUserInitialValue(data[0].id);

      let option = data.map((item, i) => {
        return { label: item.name, value: item.id };
      });
      setUserData(option); //setProductOption(option)
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const getDescriptionData = async () => {
    try {
      const result = await axios({
        url: `http://localhost:8000/review/${params.id}`,
        method: "get",
      });
      let data = result.data.result;
      console.log(data.description);

      setDescription(data.description);
      // setDescriptionInitialValue(data[0].id);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getProductData();
    getUserData();
    getDescriptionData();
  }, []);

  // console.log(productData)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product">product</label>
          <select
            id="product"
            value={product}
            onChange={(e) => {
              setProduct(e.target.value);
            }}
          >
            {productData.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="user">user</label>
          <select
            id="user"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          >
            {userData.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="description">description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <button>update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
