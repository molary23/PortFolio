import React, { useState } from "react";

function Nav(props) {
  const { homeRef, aboutRef, skillsRef, projectsRef, servicesRef, contactRef } =
      props,
    [display, setDisplay] = useState(false),
    [isActive, setIsActive] = useState(1);

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
                  Skills
                </span>
              </li>

              <li className="nav-item">
                <span
                  className={`${
                    isActive === 3 ? "active-nav" : ""
                  } nav-link project-link`}
                  id="projectlink"
                >
                  Projects
                </span>
              </li>

              <li className="nav-item">
                <span
                  className={`${
                    isActive === 4 ? "active-nav" : ""
                  } nav-link service-link`}
                  id="servicelink"
                >
                  Services
                </span>
              </li>

              <li className="nav-item">
                <span
                  className={`${
                    isActive === 5 ? "active-nav" : ""
                  } nav-link contact-link`}
                  id="contactlink"
                >
                  Contact
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
