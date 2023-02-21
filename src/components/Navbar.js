import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import "../scss/components/navbar.scss";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar nav-override" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand nav-brand-override">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Anthemicz" className="nav-logo" />
          </Link>
          <button className={`navbar-burger burger ${isActive && "is-active"}`} aria-expanded={isActive} onClick={() => setIsActive(!isActive)}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-end has-text-centered navbar-menu ${isActive && "is-active"} nav-menu-override`}>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item navbar-item-override" to="/meet-us">
              MEET US
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item navbar-item-override" to="/products">
              OUR MISSION
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item navbar-item-override" to="/contact">
              MUSIC
            </Link>
          </li>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link navbar-item-override">
              FOLLOW US
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Instagram
              </a>
              <a class="navbar-item">
                TikTok
              </a>
              <a class="navbar-item">
                YouTube
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>

          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item navbar-item-override" to="/contact">
              REACH OUT
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item merch-button" to="/contact/examples">
              MERCH
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
