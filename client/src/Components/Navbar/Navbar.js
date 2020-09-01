import React, { Component } from "react";
import './Navbar.css';
import { FaHome, FaCamera, FaThLarge, FaCog, } from "react-icons/fa";



class Navbar extends Component {
  render() {
    return (
      <div className="Navbar__Container">
        <div className="container">
          <div className="icon home">
            <i className="fab fa-icon">
              <FaHome />
            </i>
          </div>
        <div className="icon gallery">
            <i className="fab fa-gallery">
              <FaThLarge />
            </i>
          </div>
         <div className="icon Camera">
            <i className="fab fa-Camera">
              <FaCamera />
            </i>
          </div>
          <div className="icon FaCog">
            <i className="fab fa-FaCog">
              <FaCog />
            </i>
          </div>
        </div>
      </div>
    );
  }
}


export default Navbar;