import React, { useContext } from "react";
import { InfoContext } from "../services/info.services";
import { AiOutlineDoubleRight } from "react-icons/ai";

function Home(props) {
  const { homeRef } = props;
  const { info, isLoading } = useContext(InfoContext);
  return (
    <div className="home-page" ref={homeRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro-details">
              <h1 className="intro-name" translate="no">
                hassan a. adeola
              </h1>
              <div className="info-role">
                {!isLoading && (
                  <h2 className="info-job-role">{info.about.role}</h2>
                )}
              </div>

              <div className="intro-buttons">
                <button className="btn btn-primary">
                  <span>
                    Read More <AiOutlineDoubleRight />
                  </span>
                </button>
                <button className="btn btn-outline-primary">
                  <span>
                    Download Resume <AiOutlineDoubleRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="intro-image">
              {!isLoading && (
                <img
                  src={info.about.image}
                  alt="Hassan Azeez Adeola"
                  className="my-image"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
