// Updated React Component Code
import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./sources/ApplicationLogo.jpg";
import logo2 from "/sources/Application-logo-2.jpg";
import { apiResponse } from "./swiggyAPI";
import rahulDish from './sources/rahul-dish.webp'
import muskanDish from './sources/muskan-dish.webp'

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo2} className="logo" alt="Logo" />
      </div>
      {/* Navigation Items */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      {/* Search Bar */}
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
        <button className="search-button">Search</button>
      </div>

      {/* Card Container */}
      <div className="res-card-container">

      <RestaurantCardContainer 
        resName = "Rahul Dish"
        resCuisine = "Madhya Pradhesh Special" 
        resRating = "5"  
        imageSrc = {rahulDish}
      />

      <RestaurantCardContainer 
        resName = "Muskan Dish"
        resCuisine = "Odisha + Bangalore Crazy Combo" 
        resRating = "20"  
        imageSrc = {muskanDish}
      />

        {apiResponse.map((data) => {
          return (
            <RestaurantCardContainer 
              key={data.id}
              resName={data.name}
              resCuisine={data.cuisines}
              resRating={Number(data.avgRatingString)}
              imageSrc={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`}
            />
          );
        })}
      </div>
    </div>
  );
};

const RestaurantCardContainer = ({resName, resCuisine, resRating, imageSrc}) => {
  return (
    <div className="res-card">
      <div className="res-image-container">
        <img src={imageSrc} className="res-card-logo" alt={resName} />
      </div>
      <div className="res-info">
        <h3 className="res-name">{resName}</h3>
        <p className="res-cuisine">{Array.isArray(resCuisine) ? resCuisine.join(", ") : resCuisine}</p>
        <div className="res-details">
          <span className={`res-rating ${resRating >= 4 ? "good-rating" : "average-rating"}`}>
            ★ {resRating}
          </span>
          <span className="res-timing">38 Minutes</span>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);