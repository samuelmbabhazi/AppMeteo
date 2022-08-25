import React from "react";
function Header() {
    return (
      <header>
        <nav className="nav">
          <img src="logo.svg" alt="" className="logo"></img>
          <ul className="ul">
            <li className="li">Prix</li>
            <li className="li">A propos</li>
            <li className="li">Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
  export default Header;