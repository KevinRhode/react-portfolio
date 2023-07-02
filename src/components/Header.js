import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="headerGroup">
      <h1>Kevin Rhode</h1>
      <ul className="nav nav-tabs">
        <li className={currentPage === "About" ? "nav-item active" : "nav-item"}>
          <a
            href="#home"
            onClick={() => handlePageChange("About")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className={currentPage === "Portfolio" ? "nav-item active" : "nav-item"}>
          <a
            href="#about"
            onClick={() => handlePageChange("Portfolio")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </a>
        </li>
        <li 
        className={currentPage === "Contact" ? "nav-item active" : "nav-item"}
        onClick={() => handlePageChange("Contact")}
        >
            Contact
         
        </li>
        <li 
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
           
        className={currentPage === "Resume" ? "nav-item active" : "nav-item"}
        onClick={() => handlePageChange("Resume")}
        >          
          Resume
          
        </li>
      </ul>
    </div>
  );
}

export default Header;
