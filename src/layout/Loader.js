import React, { useEffect, useState } from "react";

function Loader() {
  const [title, setTitle] = useState(0);
  const jobs = [
    "full stack web developer",
    "web developer",
    "senior developer",
    "front-end developer",
    "backend developer",
    "web designer",
    "software developer",
    "mobile app developer",
  ];

  const randomiseArray = (array) => {
    setInterval(() => {
      let job = Math.floor(Math.random() * array.length);
      setTitle(job);
    }, 1000);
  };

  useEffect(() => {
    randomiseArray(jobs);
  }, []);
  return (
    <div className="loader">
      <div className="section-heading">
        <h1>Hassan A. Adeola</h1>
        <h2 className="loading-title">{jobs[title]}</h2>
        <div className="loading-bar">
          <div className="progress">
            <div className="progress-bar progress-bar-striped"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
