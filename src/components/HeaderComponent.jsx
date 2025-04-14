import logo2 from '../../sources/Application-logo-2.jpg'
import {useState} from "react";


export const HeaderComponent = () => {
  const [toggleBtn , setToggleBtn] = useState("Login");

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
          <button 
            className="btn"
            onClick={() => toggleBtn == "Login" ? setToggleBtn("Logout") : setToggleBtn("Login")}
          >
            {toggleBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};