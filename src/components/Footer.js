import * as React from "react";
import { Link } from "gatsby";
import "../scss/components/footer.scss";

import logo from "../img/logo.png";


const Footer = () => {

  return (
    <footer className="anth-footer">
      <div className="anth-footer-holder">
        <div className="anth-subscribe">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <input type="email" className="anth-email" placeholder="myemail@example.com" />
        </div>

        <div className="anth-content">
          <img src={logo} alt="Anthemicz" />
          <p>COPYRIGHT 2023 ANTHEMICZ MUSIC GROUP. ALL RIGHTS RESERVED.</p>
          <div className="link-holder">
            <a href="#">Privacy Policy</a><a href="#">Reach Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
