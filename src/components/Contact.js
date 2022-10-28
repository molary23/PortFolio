import React, { useState, useContext, useRef } from "react";
import { InfoContext } from "../services/info.services";

import useObserve from "../hooks/useObserve";

import TextAreaField from "../layout/TextAreaField";
import TextInputField from "../layout/TextInputField";
import Modal from "../layout/Modal";

const URL = `${process.env.REACT_APP_SECURE_URL}send.php`;
function Contact(props) {
  const { contactRef, section } = props,
    [inputs, setInputs] = useState({}),
    [errors, setErrors] = useState({}),
    [loading, setLoading] = useState(false),
    [modal, setModal] = useState(false),
    [sender, setSender] = useState(null),
    { info } = useContext(InfoContext),
    headingRef = useRef(),
    contactFormRef = useRef(),
    contactInfoRef = useRef();

  useObserve([headingRef, contactFormRef, contactInfoRef]);

  let contacts = info.contacts,
    contact = (
      <div>
        <div className="contact-details">
          <div className="contact-icon">
            <i className="fa-solid fa-envelope-open-text" />
          </div>
          <div className="contact-info">
            <a href={`mailto:${contacts.mail}`}>{contacts.mail}</a>
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-icon">
            <i className="fa-solid fa-phone" />
          </div>
          <div className="contact-info">
            <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-icon">
            <i className="fa-brands fa-skype" />
          </div>
          <div className="contact-info">
            <a href={`skype:${contacts.skype}?chat`}>{contacts.skype}</a>
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-icon">
            <i className="fa-solid fa-map-location-dot" />
          </div>
          <div className="contact-info contact-location">{`${contacts.location} - open to ${contacts.office}`}</div>
        </div>
      </div>
    );
  let connect = info.connects.map((con, i) => {
    return (
      <div className="connect-social" key={i}>
        <a href={con.url} target="_blank" rel="noreferrer">
          <i className={`${con.image} fa-2x`} />
        </a>
      </div>
    );
  });

  const modalHandler = (close) => {
    setModal(close);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!Object.keys(inputs).includes("name") || inputs.name === "") {
      setErrors({
        name: "We need your name for documentation purposes.",
      });
    } else if (!Object.keys(inputs).includes("email") || inputs.email === "") {
      setErrors({
        email: "We need your email for our response to reach you.",
      });
    } else if (!Object.keys(inputs).includes("phone") || inputs.phone === "") {
      setErrors({
        phone: "We need  your phone number for faster communication.",
      });
    } else if (isNaN(inputs.phone)) {
      setErrors({
        phone: "Phone number can only be numbers.",
      });
    } else if (
      !Object.keys(inputs).includes("subject") ||
      inputs.subject === ""
    ) {
      setErrors({
        subject: "You need to enter a Subject for your message.",
      });
    } else if (
      !Object.keys(inputs).includes("message") ||
      inputs.message === ""
    ) {
      setErrors({
        message: "Please enter the content of your Message.",
      });
    } else {
      setLoading(true);
      setErrors({});
      const message = {
        name: inputs.name.toLowerCase(),
        email: inputs.email.toLowerCase(),
        phone: inputs.phone,
        subject: inputs.subject,
        message: inputs.message,
        key: process.env.REACT_APP_SECURE_POST_KEY,
        send: "message",
      };

      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(message),
        };
        const response = await fetch(URL, requestOptions);
        const data = await response.json();
        setLoading(false);
        if (data === 1) {
          setInputs({});
          setSender("success");
          setModal(true);
        } else {
          setSender("error");
          setModal(true);
        }
      } catch (error) {
        setSender("error");
        setModal(true);
      }
    }
  };

  return (
    <div className="contact" ref={contactRef}>
      <div className="contact-me">
        <div className="section-heading hidden" ref={headingRef}>
          <h1>Contact Me</h1>
          <h2 className={`${section === "contact" ? "animate" : ""}`}>
            get in touch
          </h2>
        </div>

        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-5 col-12 hidden" ref={contactInfoRef}>
              <div className="contact-connect-info">
                <div className="contact-info-card">{contact}</div>
                <div className="connect-info-card">{connect}</div>
              </div>
            </div>
            <div className="col-lg-7 col-12 hidden" ref={contactFormRef}>
              <form className="contact-form" onSubmit={submitHandler}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <TextInputField
                        id="contact-form-name"
                        label="Name"
                        type="name"
                        name="name"
                        value={inputs.name || ""}
                        onChange={changeHandler}
                        error={errors.name}
                        maxLength="50"
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <TextInputField
                        id="contact-form-email"
                        label="Email Address"
                        type="email"
                        name="email"
                        value={inputs.email || ""}
                        onChange={changeHandler}
                        error={errors.email}
                        maxLength="50"
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <TextInputField
                        id="contact-form-phone"
                        label="Phone Number"
                        type="phone"
                        name="phone"
                        value={inputs.phone || ""}
                        onChange={changeHandler}
                        error={errors.phone}
                        maxLength="50"
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <TextInputField
                        id="contact-form-subject"
                        label="Subject"
                        type="subject"
                        name="subject"
                        value={inputs.subject || ""}
                        onChange={changeHandler}
                        error={errors.subject}
                        maxLength="50"
                      />
                    </div>
                    <div className="col-12">
                      <TextAreaField
                        id="contact-form-message"
                        label="Message"
                        name="message"
                        value={inputs.message || ""}
                        onChange={changeHandler}
                        error={errors.message}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn outline-btn contact-btn">
                    Send Message
                    {loading && (
                      <i className="fa-solid fa-circle-notch fa-spin" />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {modal ? (
        <Modal onClick={modalHandler} modal={modal} sender={sender} />
      ) : null}
    </div>
  );
}

export default Contact;
