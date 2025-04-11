import logo2 from '../../sources/Application-logo-2.jpg'

export const HeaderComponent = () => {
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