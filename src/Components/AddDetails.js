import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../Slice/detailsSlice";

const AddDetails = () => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const getData = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        
        e.preventDefault();
    console.log("user data...", data);
    dispatch(createUser(data));
        
      };
 
  return (
    <div>
      <h2>Enter the data</h2>
      
        <div>
          <input
                  type="text"
                  name="title"
                  placeholder="enter title"
                  onChange={getData}
           
          />
        </div>
        <div>
          <input
                type="text"
                name="body"
                placeholder="enter details"
                onChange={getData}
            
          />
        </div>
      
       
        <div>
          <button type="submit" onClick={handleSubmit} >Submit</button>
        </div>
     
    </div>
  );
};
export default AddDetails;