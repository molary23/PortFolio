import React, { useContext } from "react";
import { InfoContext } from "../services/info.services";

function Home(props) {
  const { homeRef, contactRef } = props;
  const { info } = useContext(InfoContext),
    contact = contactRef.current;

  const toContact = () => {
    window.scrollTo({
      top: contact.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="home-page" ref={homeRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <div className="intro-details">
              <h1 className="intro-name" translate="no">
                {info.about.name}
              </h1>
              <div className="info-role">
                <h2 className="info-job-role">{info.about.role}</h2>
              </div>

              <div className="intro-buttons">
                <button className="btn regular-btn" onClick={toContact}>
                  <span>Hire Me</span>
                </button>
                <a
                  href="https://www.hassanadeola.com/resume/"
                  className="btn outline-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    View Resume <i className="fa-solid fa-chevron-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 d-none d-sm-block">
            <div className="intro-image">
              <img
                src={info.about.image}
                alt="Hassan Azeez Adeola"
                className="my-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
