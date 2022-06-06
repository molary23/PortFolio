import React from "react";

function Services() {
  return (
    <div className="services">
      <div className="my-services">
        <div className="section-heading">
          <h1>My Services</h1>
          <h2>what I can do for you</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="service-card my-card">
                <div className="service-image">
                  <img src={"service.image"} alt={"service.name"} />
                </div>
                <div className="service-name">
                  <h3>Web Dev</h3>
                </div>
                <div className="service-text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
