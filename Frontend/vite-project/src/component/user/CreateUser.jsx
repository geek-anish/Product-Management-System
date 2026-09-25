import axios from 'axios';
import React from 'react'
import { toast, ToastContainer } from "react-toastify";

import  { useState } from 'react'
import ReactDropZone from '../ReactDropZone';




const CreateUser = () => {

  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [profileImage, setProfileImage] = useState("");

      let [link,setLink] = useState("")


    const handleSubmit = async (e) => {
    e.preventDefault(); // prevents defuslts behvsviour of refreshing
    let data = {
      name: name,
      email: email,
      password: password,
      profileImage: link,
    };
    try {
      let result = await axios({
      url: "http://localhost:8000/user",
      method: "post",
      data: data,
    });

    console.log(result)

    toast.success(result.data.message)
    setName("")
    setEmail("")
    setPassword("")
    setLink("")
      
    } catch (error) {
      console.log(error.response)
       toast.error(error.response.data.message)
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
    }

   
  return (
    <div>
      <ToastContainer></ToastContainer>
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
        

            <ReactDropZone setLink={setLink} link={link}></ReactDropZone>

        <div>
          <button>send</button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser