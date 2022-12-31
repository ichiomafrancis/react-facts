import React from "react";
import reactLogo from "../images/react-icon-small.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="title">
        <img src={reactLogo} alt="" className="img" />
        <h3>ReactFacts</h3>
      </div>
      <p>React Course - Project 1</p>
    </nav>
  );
}

export default Navbar;
