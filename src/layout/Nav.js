import React, { useState } from "react";

function Nav() {
  const [display, setDisplay] = useState(false);
  const [isActive, setIsActive] = useState(1);
  return (
    <header>
      <nav
        className={` navbar navbar-expand-sm navbar-light fixed-top top-nav`}
        data-testid="main-nav"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={"logo"} alt="Hassan Adeola Logo" className="nav-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbarMenu"
            onClick={() => {
              setDisplay(!display);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${!display ? "collapse" : ""}  navbar-collapse`}
            id="mainNavbarMenu"
          >
            <ul className="navbar-nav ms-auto right-nav">
              <li className="nav-item">
                <span
                  className={`${
                    isActive === 0 ? "active-nav" : ""
                  } nav-link about-link`}
                  id="aboutlink"
                >
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span
                  className={`${
                    isActive === 1 ? "active-nav" : ""
                  } nav-link service-link`}
                  id="servicelink"
                >
                  About
                </span>
              </li>

              <li className="nav-item">
                <span
                  className={`${
                    isActive === 2 ? "active-nav" : ""
                  } nav-link contact-link`}
                  id="contactlink"
                >
                  Services
                </span>
              </li>

              <li className="nav-item">
                <span
                  className={`${
                    isActive === 3 ? "active-nav" : ""
                  } nav-link contact-link`}
                  id="contactlink"
                >
                  Projects
                </span>
              </li>

              <li className="nav-item">
                <span
                  className={`${
                    isActive === 4 ? "active-nav" : ""
                  } nav-link contact-link`}
                  id="contactlink"
                >
                  Qualification
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
