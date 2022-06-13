import React, { useEffect, useState } from "react";
import { InfoContext } from "../services/info.services";

function SplashScreen(props) {
  const [title, setTitle] = useState(0),
    { error } = props;
  const jobs = [
    "full stack developer",
    "web developer",
    "senior developer",
    "front-end developer",
    "backend developer",
    "web designer",
    "software developer",
    "mobile app developer",
  ];

  console.log("first");

  const randomiseArray = (array) => {
    setInterval(() => {
      let job = Math.floor(Math.random() * array.length);
      setTitle(job);
    }, 1000);
  };

  useEffect(() => {
    randomiseArray(jobs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="loader">
      <div className="loading-section">
        <h1>Hassan A. Adeola</h1>
        <h2 className="loading-title">{jobs[title]}</h2>
        {error === null ? (
          <div className="loading-bar">
            <div className="progress">
              <div className="progress-bar progress-bar-striped"></div>
            </div>
          </div>
        ) : (
          <div className="error-info">
            <p>Sorry but there has been an Error. Please refresh the page.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SplashScreen;
