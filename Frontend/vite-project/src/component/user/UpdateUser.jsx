import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUser = () => {
  // name, price,quantity, isDamage

 

   const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [profileImage, setProfileImage] = useState("");

  const params = useParams();
  const navigate = useNavigate()

  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/user/${params.id}`,
        method: "get",
      });
      //  console.log(result.data.result);
      let data = result.data.result;
      console.log(data.name);
      console.log(data.email);
      

      setName(data.name)
    setEmail(data.email)
    setPassword(data.password)
    setProfileImage(data.profileImage)
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents defuslts behvsviour of refreshing
   
    let data = {
      name: name,
      email: email,
      password: password,
      profileImage: profileImage,
    };

    try {
      let result = await axios({
        url: `http://localhost:8000/user/${params.id}`,
        method: "patch",
        data: data,
      });
      navigate(`/user/${params.id}`)
      console.log(result);

      

      toast.success(result.data.message)
    setName("")
    setEmail("")
    setPassword("")
    setProfileImage("")
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    }

    /* 
           network panel
           headers
            url
            methode
          payload
            data sent by frontend
          preview
            data sent by backend
        
        
        */
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="profileImage">profileImage</label>
          <input
            type="text"
            id="profileImage"
            value={profileImage}
            onChange={(e) => {
              setProfileImage(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <button>send</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
