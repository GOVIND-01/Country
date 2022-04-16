import React from "react";

import {useEffect,useState} from "react";
const axios = require('axios').default;
export default function Show(){
    
// id	Country	City	Population	Edit	Delete
// 1	India	Delhi	19,000,000	Edit	Delete
// 2	SriLanka	Colombo	5,600,000	Edit	Delete
// 3	USA	Chicago	2,920,000	Edit	Delete
 const [show,setShow]=useState([])
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
 },[])

 return (
    <div >
     <div className="main-box">{show.map((e,index)=>(
        <>
          <div>{index+1}.</div>
          <div>{e.country}</div>
          <div>{e.city}</div>
          <div>{e.population}</div>
          <button>Edit</button>  
          <button onClick={()=>{
               const axios = require('axios');
               axios.delete(`http://localhost:8080/data/${e.id}`)
                 .then(function (response) {
                  
                   //setShow(response.data);
                 })
                 .catch(function (error) {
                  
                   console.log(error);
                 })
                 .then(function () {
                    handleShow()
                 });
          }}>Delete</button> 
          </>
     ))}</div>
       </div>
 )

}