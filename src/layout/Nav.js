import React, { useLayoutEffect, useState, useContext, useEffect } from "react";
import { InfoContext } from "../services/info.services";

import logo from "../asset/images/hassanadeola-logo.png";

function Nav(props) {
  const {
      homeRef,
      aboutRef,
      skillsRef,
      projectsRef,
      servicesRef,
      contactRef,
      onScroll,
    } = props,
    [display, setDisplay] = useState(false),
    [isActive, setIsActive] = useState(1),
    [focus, setFocus] = useState(false),
    { info } = useContext(InfoContext);

  const getCurrentSection = (value) => {
    onScroll(value);
  };

  const addFocus = () => {
    let winScroll = window.scrollY;
    if (winScroll > 100) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };

  const scrollToSection = (where, isActive) => {
    window.scrollTo({
      top: where.offsetTop,
      behavior: "smooth",
    });
    setIsActive((isActive) => isActive);
    setDisplay(!display);
  };

  const moveTo = (e) => {
    let linkid = e.target.id;
    switch (linkid) {
      case "homelink": {
        scrollToSection(homeRef.current, 0);
        setIsActive((isActive) => 0);
        break;
      }
      case "aboutlink": {
        scrollToSection(aboutRef.current, 1);
        break;
      }
      case "skilllink": {
        scrollToSection(skillsRef.current, 4);
        break;
      }
      case "projectlink": {
        scrollToSection(projectsRef.current, 3);
        break;
      }
      case "servicelink": {
        scrollToSection(servicesRef.current, 2);
        break;
      }
      case "contactlink": {
        scrollToSection(contactRef.current, 5);
        break;
      }
      default:
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setIsActive((isActive) => 0);
        break;
    }
  };

  const changeFocus = () => {
    const about = aboutRef.current,
      home = homeRef.current,
      service = servicesRef.current,
      contact = contactRef.current,
      skills = skillsRef.current,
      projects = projectsRef.current;

    let winScroll = window.scrollY + 100;
    if (winScroll >= 0 && winScroll < home.clientHeight) {
      setIsActive((isActive) => 0);
    } else if (
      winScroll >= about.offsetTop &&
      winScroll < about.offsetTop + about.clientHeight
    ) {
      getCurrentSection("about");
      setIsActive((isActive) => 1);
    } else if (
      winScroll >= skills.offsetTop &&
      winScroll < skills.offsetTop + skills.clientHeight
    ) {
      getCurrentSection("skills");
      setIsActive((isActive) => 2);
    } else if (
      winScroll >= projects.offsetTop &&
      winScroll < projects.offsetTop + projects.clientHeight
    ) {
      getCurrentSection("projects");
      setIsActive((isActive) => 3);
    } else if (
      winScroll >= service.offsetTop &&
      winScroll < service.offsetTop + service.clientHeight
    ) {
      getCurrentSection("service");
      setIsActive((isActive) => 4);
    } else if (
      winScroll >= contact.offsetTop &&
      winScroll < contact.offsetTop + contact.clientHeight
    ) {
      getCurrentSection("contact");
      setIsActive((isActive) => 5);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", changeFocus, { passive: true });
    window.addEventListener("scroll", addFocus, { passive: true });

    return () => {
      window.removeEventListener("scroll", changeFocus);
      window.removeEventListener("scroll", addFocus);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const observeFunction = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = [
      homeRef.current,
      aboutRef.current,
      skillsRef.current,
      projectsRef.current,
      servicesRef.current,
      contactRef.current,
    ];
    hiddenElements.forEach((el) => observer.observe(el.firstElementChild));
  };

  useEffect(() => {
    observeFunction();
  }, [info]);

  return (
    <header>
      <nav
        className={`${
          focus ? "change-nav-bg" : ""
        } navbar navbar-expand-sm navbar-light fixed-top top-nav`}
        data-testid="main-nav"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Hassan Adeola Logo" className="nav-logo" />
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
                  } nav-link home-link`}
                  id="homelink"
                  onClick={(e) => moveTo(e)}
                >
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span
                  className={`${
                    isActive === 1 ? "active-nav" : ""
                  } nav-link about-link`}
                  id="aboutlink"
                  onClick={(e) => moveTo(e)}
                >
                  About
                </span>
              </li>

              <li className="nav-item">
                <span
                  className={`${
                    isActive === 2 ? "active-nav" : ""
                  } nav-link skill-link`}
                  id="skilllink"
                  onClick={(e) => moveTo(e)}
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
                  onClick={(e) => moveTo(e)}
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
                  onClick={(e) => moveTo(e)}
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
                  onClick={(e) => moveTo(e)}
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
