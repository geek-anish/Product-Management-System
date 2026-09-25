import axios from "axios";
import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";



const ProductForm = ({type}) => {
  // name, price,quantity, isDamage

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isDamage, setDamage] = useState(false);

  const params = useParams();
  const navigate = useNavigate()

  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/product/${params.id}`,
        method: "get",
      });
      //  console.log(result.data.result);
      let data = result.data.result;
      console.log(data.name);
      console.log(data.price);
      setName(data.name);
      setPrice(data.price);
      setQuantity(data.quantity);
      setDamage(data.isDamage);
    } catch (error) {}
  };

  useEffect(() => {
    if(type==="update"){getData();}
    
  }, [type]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents defuslts behvsviour of refreshing
    let data = {
      name: name,
      price: price,
      quantity: quantity,
      isDamage: isDamage,
      
    };

    if(type==="create"){
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
    }
    else{
          try {
      let result = await axios({
        url: `http://localhost:8000/product/${params.id}`,
        method: "patch",
        data: data,
      });
      navigate(`/product/${params.id}`)
      console.log(result);

      toast.success(result.data.message);
      setName("");
      setPrice("");
      setQuantity("");
      setDamage(false);
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    }
    };}
    

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
          <button>{type==="create"?"create":"update"}</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
