import React, { useState } from "react";
import { useEffect } from "react";
import HeaderBar from '../HeaderBar/HeaderBar'
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import './Restaurant.css';
const Restaurant=()=>{
    const[data,setData]=useState([]);

    useEffect(()=>{
        const fetchResult=async()=>{
            let response=await fetch();
            const data=await response.json();
            if(data.length>0){
                setData(data)
            }
        }
        fetchResult();
    },[]);

  return(
    <div className="restaurant-list-container">
        <div className="restaurant-list-wrapper child">
            <HeaderBar/>
            {data.map((res)=>{
                return(
                    <div key={res.id+res.name}>
                        <RestaurantCard key={res.id} restaurant={res}/>
                    </div>
                )
            })}
        </div>
        lorem500
    </div>
  )  
}


export default Restaurant;