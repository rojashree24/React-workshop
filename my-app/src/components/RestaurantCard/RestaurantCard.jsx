import React from "react";
import PropTypes from 'prop-types';
import './RestaurantCard.css';

const RestaurantCard=(props)=>{
    return(
        <div className="restaurant-card">
            <img src={props.restaurant.image} alt="img" className="restaurant-logo" />
            <div className="restaurant-name wrap-text">{props.Restaurant.name}</div>
            <div className="restaurant-name wrap-text">{props.Restaurant.cusines}</div>
            <div className="restaurant-location">
                <div className="distance">{props.restaurant.distance}</div>
            </div>
            <div className="restaurant-review">{`${props.restaurant.review} reviews`}</div>
        </div>
    );
};

export default RestaurantCard;