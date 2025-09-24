import "../Style/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navBar">
      <div className="logo">
        <img className="mainLogo" src="./pngwing.com.png" alt="logo img" />
        <h3>Restaurant</h3>
      </div>

      {/* Burger Icon */}
      <div className="burger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation Items */}
      <div className={`navItems ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to={"/"} onClick={() => setIsOpen(false)}>HOME</Link>
          </li>
          <li>
            <Link to={"/about"} onClick={() => setIsOpen(false)}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/services"} onClick={() => setIsOpen(false)}>SERVICE</Link>
          </li>
          <li>
            <Link to={"/menu"} onClick={() => setIsOpen(false)}>MENU</Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => setIsOpen(false)}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
