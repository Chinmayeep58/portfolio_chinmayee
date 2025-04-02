import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Main Page</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
