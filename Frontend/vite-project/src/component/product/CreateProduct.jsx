import axios from "axios";
import  { useState } from "react";
import { toast } from "react-toastify";



const CreateProduct = () => {
  // name, price,quantity, isDamage

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isDamage, setDamage] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents defuslts behvsviour of refreshing
    let data = {
      name: name,
      price: price,
      quantity: quantity,
      isDamage: isDamage,
      
    };

    try {
      let result = await axios({
      url: "http://localhost:8000/product",
      method: "post",
      data: data,
    });

    console.log(result)

    toast.success(result.data.message)
    setName("")
    setPrice("")
    setQuantity("")
    setDamage(false)
      
    } catch (error) {
      console.log(error.response)
      toast.error(error.response.data.message)
    }
    };

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
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={price}

            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="quantity">quantity</label>
          <input
            type="text"
            id="quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="isDamage">isDamage</label>
          <input
            type="checkbox"
            id="isDamage"
            onChange={(e) => {
              setDamage(e.target.checked);
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

export default CreateProduct;
