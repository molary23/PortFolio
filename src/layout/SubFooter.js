import React from "react";

function SubFooter() {
  return (
    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-intro">
              <img
                src={"logo"}
                alt="Hassan Azeez Adeola's Logo"
                className="nav-logo mb-4"
              />
              <h2>full stack web developer</h2>
              <p>
                Esse non commodo proident qui duis. Aliquip ad minim aute
                adipisicing fugiat enim elit. Voluptate voluptate tempor amet
                exercitation nostrud mollit commodo eu velit. Reprehenderit
                dolore dolor sit in fugiat magna labore ex veniam esse.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-address">
              <h2 className="footer-heading">Contact</h2>
              <address>
                <a href="mailto:info@hassanadeola.com">info@hassanadeola.com</a>
              </address>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-connect">
              <h2 className="footer-heading">Connect</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubFooter;
