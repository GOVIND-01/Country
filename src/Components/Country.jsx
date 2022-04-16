import { useState, useEffect } from "react";
export default function InputForm() {
  const [input, setInput] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  }

  function handleSubmit() {
      
  }
  return (
    <div>
      <input name="country" onChange={handleChange} type="text" />
      <input name="city" onChange={handleChange} type="text" />
      <input name="population" onChange={handleChange} type="number" />
      <input onClick={handleSubmit} type="submit" value="submit" />
    </div>
  );
}
