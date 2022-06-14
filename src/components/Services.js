import React, { useContext } from "react";
import { InfoContext } from "../services/info.services";

function Services(props) {
  const { info } = useContext(InfoContext),
    { servicesRef, section } = props;

  let services = info.services.map((service, i) => {
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
            {service.content.map((item, i) => {
              return (
                <p className="service-content-paragraph" key={i}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="services" ref={servicesRef}>
      <div className="my-services">
        <div className="section-heading">
          <h1>My Services</h1>
          <h2 className={`${section === "service" && "animate"}`}>
            what I can do for you
          </h2>
        </div>
        <div className="container">
          <div className="row">{services}</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
