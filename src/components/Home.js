import React, { useContext } from "react";
import { InfoContext } from "../services/info.services";
import { AiOutlineDoubleRight } from "react-icons/ai";

function Home() {
  const infoContext = useContext(InfoContext);
  console.log(infoContext);
  return (
    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro-details">
              <h1 className="intro-name">hassan a. adeola</h1>
              <div className="info-role">
                <h2 className="info-job-role">full stack web developer</h2>
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
          <div className="col-lg-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
