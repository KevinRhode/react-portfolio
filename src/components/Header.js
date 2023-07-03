import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/main-css.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="headerGroup">
      <h1>Kevin Rhode</h1>
      <ul className="nav nav-tabs">
        <li 
        className={currentPage === "About" ? "nav-item active" : "nav-item"}
        onClick={() => handlePageChange("About")}>
           About          
        </li>
        <li
        className={currentPage === "Portfolio" ? "nav-item active" : "nav-item"}
        onClick={() => handlePageChange("Portfolio")}
        >  Portfolio          
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
