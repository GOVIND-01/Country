import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
const axios = require('axios').default;


export  function InputForm() {
  const [input, setInput] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, id:uuidv4()});
    console.log(input);
  }

  function handleSubmit() {
    
        const axios = require('axios');
        axios.post('http://localhost:8080/data',input)
          .then(function (response) {
           
            //setShow(response.data);
          })
          .catch(function (error) {
           
            console.log(error);
          })
          .then(function () {
           
          });
     
  }
  return (
    <div className="add-data-box">
      <input name="country" onChange={handleChange} type="text" />
      <input name="city" onChange={handleChange} type="text" />
      <input name="population" onChange={handleChange} type="number" />
      <input onClick={handleSubmit} type="submit" value="submit" />
    </div>
  );
}
