import React, { useContext } from "react";
import { InfoContext } from "../services/info.services";

function Home(props) {
  const { homeRef } = props;
  const { info } = useContext(InfoContext);
  return (
    <div className="home-page" ref={homeRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro-details">
              <h1 className="intro-name" translate="no">
                {info.about.name}
              </h1>
              <div className="info-role">
                <h2 className="info-job-role">{info.about.role}</h2>
              </div>

              <div className="intro-buttons">
                <button className="btn regular-btn">
                  <span>Hire Me</span>
                </button>
                <button className="btn outline-btn">
                  <span>
                    View Resume <i className="fa-solid fa-chevron-right" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
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
