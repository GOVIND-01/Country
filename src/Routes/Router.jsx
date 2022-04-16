import React from "react";
const axios = require('axios').default;
import {useEffect,useState} from "react";
function Show (){
    
// id	Country	City	Population	Edit	Delete
// 1	India	Delhi	19,000,000	Edit	Delete
// 2	SriLanka	Colombo	5,600,000	Edit	Delete
// 3	USA	Chicago	2,920,000	Edit	Delete
 const [show,setShow]=useState([]) 
 useEffect(()=>{
    const axios = require('axios');

    
    axios.get('/user?ID=12345')
      .then(function (response) {
       
        console.log(response);
      })
      .catch(function (error) {
       
        console.log(error);
      })
      .then(function () {
       
      });
 },[])

}