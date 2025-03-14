import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./sources/ApplicationLogo.jpg";
import logo2 from "/sources/Application-logo-2.jpg";
import meghanaBriyaniImage from "./sources/Meghana-Foods.avif";
/*
- Header
    - Logo
    - Nav Items
- Body
    - Search bar component
    - Card container : Restaurant cards component
        - Restaurant Cards
            - Image of the restaurant 
            - Description 
            - Rating 
            - Price 
            - Time to deliver
- Footer
    - Copyright
    - Links
    - Address
    - Content
*/

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const HeaderComponent = () => {
  /**
    - Header
        - Logo
        - Nav Items
     */
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo2} className="logo" />
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
    /*
        - Body
        - Search bar component
        - Card container : Restaurant cards component
        */
    <div className="body">
      {/* Search Bar */}
      <div className="search">Search</div>

      {/* Card Container */}
      <div className="res-card-container">
        <RestaurantCardContainer
          resName="Meghana Foods"
          resCuisine="Andhra Style"
        />
        <RestaurantCardContainer
          resName="KFC"
          resCuisine="Burget , Fast Food"
        />
      </div>
    </div>
  );
};

const RestaurantCardContainer = ({resName , resCuisine}) => {
  /*
     - Restaurant Cards
        - Image of the restaurant 
        - Description 
        - Rating 
        - Price 
        - Time to deliver
     */
  return (
    <div className="res-card">
      <img src={meghanaBriyaniImage} className="res-card-logo" />
      <h4 className="res-desc">{resName}</h4>
      <h5 className="res-cuisine">{resCuisine}</h5>
      <h5 className="res-rating">4.4 ✬ Rating</h5>
      <h5 className="res-timing">38 Minutes</h5>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
