import React from "react";

import {useEffect,useState} from "react";
const axios = require('axios').default;
export default function Show(){
    
 const [show, setShow] = useState([])
 const [sort,setSort]=useState([])
 function handleShow(){
    const axios = require('axios');
    axios.get('http://localhost:8080/data')
      .then(function (response) {
       
        setShow(response.data);
      })
      .catch(function (error) {
       
        console.log(error);
      })
      .then(function () {
       
      });
  } 

 useEffect(()=>{
  handleShow()
 }, [])

 return (
     <div > 

     <div className="main-box">
       <div style={{"fontSize":"20px","paddingBottom":"10px","backgroundColor":"bisque"}}>
          <div>id</div>  
          <div onClick={() => {
           const newData = show.sort((a, b) => a.country > b.country?1:-1)
           console.log(newData)
           setSort(newData)
           setShow(sort)
          
          }}>country</div>
         <div onClick={() => {
           const newData = show.sort((a, b) => a.city > b.city?1:-1)
           console.log(newData)
           setSort(newData)
           setShow(sort)
          
          }}>city</div>

         <div onClick={() => {
           const newData = show.sort((a, b) => a.population - b.population)
           console.log(newData)
           setSort(newData)
           setShow(sort)
          
          }}>population</div>
          <button>Edit</button>  
          <button>Delete</button> 
          </div>
    </div>
     <div className="main-box">{show.map((e,index)=>(
        <div key={index}>
          <div>{index+1}.</div>
          <div>{e.country}</div>
          <div>{e.city}</div>
          <div>{e.population}</div>
          <button>Edit</button>  
          <button onClick={()=>{
               const axios = require('axios');
               axios.delete(`http://localhost:8080/data/${e.id}`)
                 .then(function (response) {
                 })
                 .catch(function (error) {
                  
                   console.log(error);
                 })
                 .then(function () {
                    handleShow()
                 });
          }}>Delete</button> 
          </div>
     ))}</div>
       </div>
 )

}