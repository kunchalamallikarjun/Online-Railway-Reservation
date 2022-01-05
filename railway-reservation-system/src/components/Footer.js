import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        {/* <button>Home</button> */}
        <Link to="/"> Home </Link>
      </div>
      <div>
        <Link to="/">Careers</Link>
      </div>
      <div>
        <Link>Privacy Policy</Link>
      </div>
      <div>
        <Link>Disclaimer</Link>
      </div>
    </footer>
  );
};

export default Footer;