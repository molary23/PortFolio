import React, { useContext } from "react";
import { InfoContext } from "../services/info.services";
import Loader from "../layout/Loader";

function Services() {
  const { info, isLoading } = useContext(InfoContext);

  let services;
  if (isLoading) {
    services = <Loader />;
  } else {
    services = info.services.map((service, i) => {
      return (
        <div className="col-lg-4 col-12" key={i}>
          <div className="service-card my-card">
            <div className="service-image">
              <i className={`${service.image} fa-2x`} />
            </div>
            <div className="service-name">
              <h3>{service.name}</h3>
            </div>
            <div className="service-content">
              <p>{service.content}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="services">
      <div className="my-services">
        <div className="section-heading">
          <h1>My Services</h1>
          <h2>what I can do for you</h2>
        </div>
        <div className="container">
          <div className="row">{services}</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
