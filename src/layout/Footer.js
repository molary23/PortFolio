import React from "react";

function Footer() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark footer-nav justify-content-center">
        <p className="footer-title">
          All rights reserved © <span translate="no">hassan azeez adeola</span>{" "}
          {new Date().getFullYear()}
        </p>
      </nav>
    </div>
  );
}

export default Footer;
